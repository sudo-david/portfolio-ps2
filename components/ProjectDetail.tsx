import Link from "next/link";
import { Project } from "@/lib/data";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="max-w-[820px] mx-auto px-6 py-16 relative z-[1]">
      <Link href="/" className="text-xs font-orbitron text-ps2-muted hover:text-ps2-cyan tracking-wide">
        ← VOLVER AL PORTAFOLIO
      </Link>

      <h1 className="font-orbitron text-3xl sm:text-4xl font-black text-ps2-chrome mt-6">
        {project.emoji} {project.name.toUpperCase()}
      </h1>
      <div className="text-ps2-cyan text-sm mt-2 mb-8 tracking-wide">{project.subtitle.toUpperCase()}</div>

      <p className="text-base text-ps2-text leading-relaxed mb-9 max-w-[640px]">{project.description}</p>

      <div className="mb-9">
        <div className="font-orbitron text-xs text-ps2-cyanDim tracking-wide mb-3">// DESAFÍOS</div>
        <ul className="space-y-2.5 text-[15px] text-ps2-text">
          {project.challenges.map((c) => (
            <li key={c} className="flex gap-3">
              <span className="text-ps2-cyan">›</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-9">
        <div className="font-orbitron text-xs text-ps2-cyanDim tracking-wide mb-3">// APRENDIZAJES</div>
        <ul className="space-y-2.5 text-[15px] text-ps2-text">
          {project.learnings.map((l) => (
            <li key={l} className="flex gap-3">
              <span className="text-ps2-cyan">›</span>
              {l}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-9">
        {project.stack.map((t) => (
          <span key={t} className="text-[11px] border border-ps2-panelBorder text-ps2-cyanDim px-2.5 py-0.5 rounded-full">
            {t.toUpperCase()}
          </span>
        ))}
      </div>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-orbitron text-[11px] text-ps2-cyan border border-ps2-cyanDim rounded-full px-5 py-2.5 hover:bg-ps2-cyan hover:text-[#001d3d] hover:shadow-[0_0_20px_rgba(90,200,250,0.5)] transition-all"
      >
        VER REPOSITORIO EN GITHUB →
      </a>
    </main>
  );
}
