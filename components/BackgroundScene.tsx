"use client";

import { useEffect, useRef } from "react";

const CUBE_SPECS = [
  { x: "8%", y: "18%", s: 70, dur: 12, delay: 0 },
  { x: "14%", y: "46%", s: 46, dur: 9.5, delay: 0.8 },
  { x: "4%", y: "68%", s: 90, dur: 13, delay: 0.3 },
  { x: "78%", y: "12%", s: 60, dur: 10.5, delay: 0.5 },
  { x: "86%", y: "40%", s: 40, dur: 8.5, delay: 1.1 },
  { x: "70%", y: "72%", s: 54, dur: 11, delay: 0.2 },
  { x: "30%", y: "78%", s: 34, dur: 8, delay: 0.9 },
  { x: "52%", y: "10%", s: 38, dur: 9, delay: 0.4 },
  { x: "44%", y: "58%", s: 30, dur: 7.5, delay: 1.4 },
  { x: "92%", y: "78%", s: 48, dur: 10, delay: 0.7 },
];

const TRAIL_COLORS = ["#3ddc84", "#ff4b4b", "#c85ce0", "#5ac8fa", "#ffd166"];

function faceTransforms(half: number) {
  return {
    front: `translateZ(${half}px)`,
    back: `rotateY(180deg) translateZ(${half}px)`,
    right: `rotateY(90deg) translateZ(${half}px)`,
    left: `rotateY(-90deg) translateZ(${half}px)`,
    top: `rotateX(90deg) translateZ(${half}px)`,
    bottom: `rotateX(-90deg) translateZ(${half}px)`,
  };
}

export default function BackgroundScene() {
  const cubeFieldRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const field = cubeFieldRef.current;
    if (!field) return;

    // Build floating cube field
    CUBE_SPECS.forEach((c) => {
      const cube = document.createElement("div");
      cube.className = "cube";
      cube.style.left = c.x;
      cube.style.top = c.y;
      cube.style.width = `${c.s}px`;
      cube.style.height = `${c.s}px`;
      cube.style.animationDuration = `${c.dur}s`;
      cube.style.animationDelay = `${c.delay}s`;

      const half = c.s / 2;
      Object.entries(faceTransforms(half)).forEach(([face, transform]) => {
        const f = document.createElement("div");
        f.className = `face f-${face}`;
        f.style.transform = transform;
        cube.appendChild(f);
      });
      field.appendChild(cube);
    });

    return () => {
      field.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>(".trail-path");
    const dots = svg.querySelectorAll<SVGCircleElement>(".trail-dot");
    const W = 800;
    const H = 500;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function randomPathData() {
      const edge = Math.floor(rand(0, 4));
      const pad = 40;
      let start;
      if (edge === 0) start = { x: rand(-pad, W * 0.3), y: rand(-pad, H + pad) };
      else if (edge === 1) start = { x: rand(W * 0.7, W + pad), y: rand(-pad, H + pad) };
      else if (edge === 2) start = { x: rand(-pad, W + pad), y: rand(-pad, H * 0.3) };
      else start = { x: rand(-pad, W + pad), y: rand(H * 0.7, H + pad) };

      const end = { x: rand(W * 0.15, W * 0.85), y: rand(H * 0.15, H * 0.85) };
      const c1 = { x: rand(Math.min(start.x, end.x), Math.max(start.x, end.x)), y: rand(Math.min(start.y, end.y), Math.max(start.y, end.y)) };
      const c2 = { x: rand(Math.min(start.x, end.x), Math.max(start.x, end.x)), y: rand(Math.min(start.y, end.y), Math.max(start.y, end.y)) };

      return `M${start.x.toFixed(1)},${start.y.toFixed(1)} C${c1.x.toFixed(1)},${c1.y.toFixed(1)} ${c2.x.toFixed(1)},${c2.y.toFixed(1)} ${end.x.toFixed(1)},${end.y.toFixed(1)}`;
    }

    function playTrail(path: SVGPathElement, dot: SVGCircleElement, delay: number) {
      if (cancelled) return;
      const d = randomPathData();
      path.setAttribute("d", d);
      dot.style.offsetPath = `path("${d}")`;
      dot.style.offsetRotate = "0deg";

      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);

      const duration = rand(7000, 12000);

      const t = setTimeout(() => {
        if (cancelled) return;
        path.animate(
          [
            { strokeDashoffset: len, opacity: 0 },
            { strokeDashoffset: len * 0.9, opacity: 0.85, offset: 0.1 },
            { strokeDashoffset: 0, opacity: 0.85, offset: 0.55 },
            { strokeDashoffset: 0, opacity: 0.25, offset: 0.82 },
            { strokeDashoffset: 0, opacity: 0 },
          ],
          { duration, easing: "ease-in-out", fill: "forwards" }
        );

        const dotAnim = dot.animate(
          [
            { offsetDistance: "0%", opacity: 0 },
            { offsetDistance: "12%", opacity: 1, offset: 0.12 },
            { offsetDistance: "90%", opacity: 1, offset: 0.82 },
            { offsetDistance: "100%", opacity: 0 },
          ],
          { duration, easing: "ease-in-out", fill: "forwards" }
        );

        dotAnim.finished
          .then(() => {
            if (!cancelled) playTrail(path, dot, rand(200, 1800));
          })
          .catch(() => {});
      }, delay);
      timeouts.push(t);
    }

    paths.forEach((path, i) => {
      playTrail(path, dots[i], rand(0, 2500));
    });

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div id="bgScene" aria-hidden="true">
      <div className="bg-mist" />
      <div className="cube-field" ref={cubeFieldRef} />

      <svg className="trails" ref={svgRef} viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        {TRAIL_COLORS.map((color) => (
          <g key={color}>
            <path className="trail-path" style={{ color }} stroke={color} />
            <circle className="trail-dot" style={{ color }} fill={color} r={4} />
          </g>
        ))}
      </svg>
    </div>
  );
}
