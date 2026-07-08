"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[460px]">
      <div>
        <label className="text-xs font-orbitron tracking-wide text-ps2-cyanDim block mb-1.5">NOMBRE</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full text-sm px-3.5 py-2.5 bg-[rgba(0,10,25,0.4)] border border-ps2-panelBorder rounded-lg outline-none focus:border-ps2-cyan text-ps2-text transition-colors"
        />
      </div>
      <div>
        <label className="text-xs font-orbitron tracking-wide text-ps2-cyanDim block mb-1.5">CORREO</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full text-sm px-3.5 py-2.5 bg-[rgba(0,10,25,0.4)] border border-ps2-panelBorder rounded-lg outline-none focus:border-ps2-cyan text-ps2-text transition-colors"
        />
      </div>
      <div>
        <label className="text-xs font-orbitron tracking-wide text-ps2-cyanDim block mb-1.5">MENSAJE</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full text-sm px-3.5 py-2.5 bg-[rgba(0,10,25,0.4)] border border-ps2-panelBorder rounded-lg outline-none focus:border-ps2-cyan text-ps2-text resize-none transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-orbitron text-[11px] text-ps2-cyan border border-ps2-cyanDim rounded-full px-5 py-2.5 hover:bg-ps2-cyan hover:text-[#001d3d] hover:shadow-[0_0_20px_rgba(90,200,250,0.5)] transition-all disabled:opacity-50"
      >
        {status === "sending" ? "ENVIANDO..." : "→ ENVIAR MENSAJE"}
      </button>

      {status === "sent" && <div className="text-xs text-ps2-cyan">✓ mensaje enviado — te responderé pronto</div>}
      {status === "error" && <div className="text-xs text-red-400">✕ algo falló — escríbeme directo por correo</div>}
    </form>
  );
}
