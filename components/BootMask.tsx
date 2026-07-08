"use client";

import { useEffect, useState } from "react";

export default function BootMask() {
  const [hidden, setHidden] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setSkip(true);
      return;
    }
    document.body.classList.add("no-scroll");
    const t = setTimeout(() => {
      setHidden(true);
      document.body.classList.remove("no-scroll");
    }, 1700);
    return () => clearTimeout(t);
  }, []);

  if (skip) return null;

  return (
    <div id="bootMask" className={hidden ? "hidden" : ""} aria-hidden="true">
      <div className="label">CARGANDO SISTEMA...</div>
    </div>
  );
}
