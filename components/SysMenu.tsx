"use client";

import { useState } from "react";
import { skills, projects } from "@/lib/data";
import Link from "next/link";
import ContactForm from "./ContactForm";

type PanelKey = "about" | "skills" | "projects" | "contact";

const ICONS: Record<PanelKey, JSX.Element> = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-4 3.2-6.5 7-6.5s7 2.5 7 6.5" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8}>
      <path d="M4 18V9M10 18V4M16 18v-7M22 18H2" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8}>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 3.5h8" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
};

const LABELS: Record<PanelKey, string> = {
  about: "PERFIL",
  skills: "STACK",
  projects: "PROYECTOS",
  contact: "CONTACTO",
};

export default function SysMenu() {
  const [active, setActive] = useState<PanelKey>("about");

  return (
    <>
      <nav className="flex justify-center gap-8 flex-wrap py-10" role="tablist" aria-label="Secciones del portafolio">
        {(Object.keys(ICONS) as PanelKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            role="tab"
            aria-selected={active === key}
            className={`sysicon flex flex-col items-center gap-3 font-orbitron text-[11px] tracking-wider transition-colors ${active === key ? "text-ps2-chrome active" : "text-ps2-muted"
              }`}
          >
            <span className="capsule">{ICONS[key]}</span>
            {LABELS[key]}
          </button>
        ))}
      </nav>

      <div className="min-h-[340px] pb-16">
        {active === "about" && (
          <div className="ps2-panel">
            <h2 className="font-orbitron text-sm tracking-wider text-ps2-cyan mb-5">// PERFIL</h2>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="shrink-0 mx-auto sm:mx-0">
                <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-br from-ps2-cyan/60 to-ps2-cyanDim/20 shadow-[0_0_30px_rgba(90,200,250,0.25)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[rgba(0,10,25,0.6)] flex items-center justify-center border border-ps2-panelBorder">
                    {/* Reemplaza esta imagen: coloca tu foto en /public/avatar.png */}
                    <img
                      src="/avatar.png"
                      alt="David Duque Vélez"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-ps2-muted">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} className="w-14 h-14 stroke-current">
                        <circle cx="12" cy="8" r="3.4" />
                        <path d="M5 20c0-4 3.2-6.5 7-6.5s7 2.5 7 6.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[560px] text-base leading-relaxed space-y-3.5">
                <p>
                  Me gusta aprender construyendo, cada proyecto es una oportunidad para resolver
                  un problema diferente y entender cómo funciona el software detrás de escena.

                  He trabajado con tecnologías web robustas, bases de datos relacionales, IAs y
                  teniendo un enfoque centrado en la experiencia del usuario y la funcionalidad, siempre con el objetivo de crear aplicaciones
                  bien estructuradas.

                  Mi interés está en el desarrollo Full Stack, donde puedo participar en todo el
                  proceso: desde el diseño de la aplicación hasta la lógica que lo impulsa.
                  Actualmente continúo ampliando mis conocimientos y conocimientos mientras
                  desarrollo proyectos que fortalecen mis habilidades como ingeniero de software.
                </p>
                <p>
                  Fiel creyente de que el aprendizaje nunca acaba y que la curiosidad es el motor de la innovación, siempre estoy buscando nuevas tecnologías y
                  metodologías para mejorar mis habilidades y aportar valor a los proyectos en los que participo.
                </p>
                <p>
                  Actualmente ampliando mi stack hacia <strong className="text-ps2-chrome">Java</strong>, {" "}
                  <strong className="text-ps2-chrome">Spring Boot</strong>,
                  <strong className="text-ps2-chrome">Android</strong>, {" "}
                  <strong className="text-ps2-chrome">Docker</strong>,

                </p>
              </div>
            </div>
          </div>
        )}

        {active === "skills" && (
          <div className="ps2-panel">
            <h2 className="font-orbitron text-sm tracking-wider text-ps2-cyan mb-5">// STACK TÉCNICO</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((s) => (
                <div key={s.name} className="border border-ps2-panelBorder rounded-xl p-3.5 bg-[rgba(0,29,61,0.55)]">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{s.name}</span>
                    <span className="font-orbitron text-[10px] text-ps2-cyanDim">
                      {s.level === "core" ? "CORE" : "EN CURSO"}
                    </span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill-anim" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "projects" && (
          <div className="ps2-panel">
            <h2 className="font-orbitron text-sm tracking-wider text-ps2-cyan mb-5">// PROYECTOS</h2>
            <div className="flex flex-col gap-5">
              {projects.map((p) => (
                <div
                  key={p.slug}
                  className="border border-ps2-panelBorder rounded-2xl p-6 bg-[rgba(0,29,61,0.55)] transition-shadow hover:shadow-[0_0_26px_rgba(90,200,250,0.18)] hover:-translate-y-0.5"
                >
                  <h3 className="font-orbitron text-[15px] text-ps2-chrome mb-1.5">{p.name.toUpperCase()}</h3>
                  <div className="text-ps2-cyan text-xs mb-3 tracking-wide">{p.subtitle.toUpperCase()}</div>
                  <p className="text-ps2-muted text-[15px] leading-relaxed">{p.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[11px] border border-ps2-panelBorder text-ps2-cyanDim px-2.5 py-0.5 rounded-full">
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-5">
                    <Link
                      href={`/proyectos/${p.slug}`}
                      className="font-orbitron text-[11px] text-ps2-cyan border border-ps2-cyanDim rounded-full px-4 py-2 hover:bg-ps2-cyan hover:text-[#001d3d] hover:shadow-[0_0_20px_rgba(90,200,250,0.5)] transition-all"
                    >
                      VER DETALLE →
                    </Link>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-orbitron text-[11px] text-ps2-cyan border border-ps2-cyanDim rounded-full px-4 py-2 hover:bg-ps2-cyan hover:text-[#001d3d] hover:shadow-[0_0_20px_rgba(90,200,250,0.5)] transition-all"
                    >
                      REPOSITORIO →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "contact" && (
          <div className="ps2-panel">
            <h2 className="font-orbitron text-sm tracking-wider text-ps2-cyan mb-5">// CONTACTO</h2>
            <div className="flex flex-col gap-0 max-w-[460px] mb-6">
              <div className="flex justify-between py-3.5 border-b border-ps2-panelBorder text-[15px]">
                <span className="font-orbitron text-[10px] text-ps2-cyanDim tracking-wide">EMAIL</span>
                <a href="mailto:david11duquev@gmail.com" className="text-ps2-chrome hover:text-ps2-cyan">
                  david11duquev@gmail.com
                </a>
              </div>
              <div className="flex justify-between py-3.5 border-b border-ps2-panelBorder text-[15px]">
                <span className="font-orbitron text-[10px] text-ps2-cyanDim tracking-wide">GITHUB</span>
                <a href="https://github.com/sudo-david" target="_blank" rel="noopener noreferrer" className="text-ps2-chrome hover:text-ps2-cyan">
                  github.com/sudo-david
                </a>
              </div>
              <div className="flex justify-between py-3.5 border-b border-ps2-panelBorder text-[15px]">
                <span className="font-orbitron text-[10px] text-ps2-cyanDim tracking-wide">LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/david-duque-vélez-95476641a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ps2-chrome hover:text-ps2-cyan"
                >
                  /in/david-duque-vélez
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        )}
      </div>

      <div className="text-center font-orbitron text-[10.5px] tracking-wider text-ps2-muted pb-12">
        ◄ ► SELECCIONAR SECCIÓN
      </div>
    </>
  );
}