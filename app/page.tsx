import SysMenu from "@/components/SysMenu";

export default function Home() {
  return (
    <main className="max-w-[980px] mx-auto px-6 relative z-[1]">
      <header className="pt-14 pb-8 text-center">
        <div className="status-badge mb-5">
          <span className="ping-dot" /> DISPONIBLE PARA PRÁCTICAS
        </div>
        <h1 className="chrome-text font-orbitron font-black tracking-wide" style={{ fontSize: "clamp(32px, 6vw, 54px)" }}>
          DAVID DUQUE VÉLEZ
        </h1>
        <div className="font-orbitron text-xs text-ps2-cyan tracking-widest mt-3.5">
          ESTUDIANTE DE ING. DE SISTEMAS — DESARROLLADOR FULL STACK
        </div>
      </header>

      <SysMenu />
    </main>
  );
}
