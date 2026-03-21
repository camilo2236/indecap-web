"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";

const programas = [
  "Auxiliar en Enfermería",
  "Cosmetología y Estética Integral",
  "Auxiliar en Veterinaria",
  "Auxiliar Administrativo en Salud",
  "Auxiliar en Farmacia",
  "Auxiliar en Salud Oral",
  "Salud Pública",
  "Atención al Adulto Mayor",
  "Talento Humano",
  "Contabilidad y Finanzas",
  "Mercadeo y Ventas",
  "SST - Seguridad y Salud en el Trabajo",
  "Entrenamiento Deportivo",
  "Sistemas e Informática",
  "Excel + IA",
  "Peluquería Canina",
  "Otro / No sé aún",
];

const sedes = ["Medellín", "Envigado", "Caldas"];

type Estado = "idle" | "loading" | "success" | "error";

export function Inscripcion() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    celular: "",
    programa: "",
    sede: "",
  });
  const [estado, setEstado] = useState<Estado>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("loading");

    try {
      const res = await fetch("/api/inscripcion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setEstado("success");
        setForm({ nombres: "", apellidos: "", correo: "", celular: "", programa: "", sede: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  return (
    <section
      id="inscripcion"
      className="relative min-h-[700px] flex items-center py-20 overflow-hidden"
    >
      {/* Foto de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/inscripcion/fondo.jpg"
          alt="Estudiantes INDECAP"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F14]/90 via-[#080F14]/75 to-[#080F14]/50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto izquierda */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-[#F0A500] animate-pulse" />
              Inscripciones abiertas 2026
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight mb-6">
              Tu futuro<br />
              <em className="italic text-[#FFD166]">empieza aquí</em>
            </h2>
            <p className="text-white/70 text-lg font-[family-name:var(--font-dm-sans)] font-light leading-relaxed max-w-md mb-8">
              Déjanos tus datos y un asesor INDECAP te contactará para orientarte sobre horarios, financiación y proceso de inscripción.
            </p>

            {/* Beneficios */}
            <div className="space-y-3">
              {[
                "Asesoría personalizada sin costo",
                "Financiación directa con INDECAP",
                "Cupos limitados — asegura el tuyo",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FFD166] shrink-0" />
                  <span className="text-white/80 text-sm font-[family-name:var(--font-dm-sans)]">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario derecha */}
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            {estado === "success" ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFD166]/20 mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#FFD166]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-white/60 text-sm font-[family-name:var(--font-dm-sans)]">
                  Un asesor INDECAP te contactará pronto para orientarte.
                </p>
                <button
                  onClick={() => setEstado("idle")}
                  className="mt-6 text-sm text-[#FFD166] underline underline-offset-4"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-6">
                  Solicitar información
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="nombres"
                      value={form.nombres}
                      onChange={handleChange}
                      placeholder="Nombres *"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="apellidos"
                      value={form.apellidos}
                      onChange={handleChange}
                      placeholder="Apellidos *"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                    />
                  </div>
                </div>

                <input
                  type="tel"
                  name="celular"
                  value={form.celular}
                  onChange={handleChange}
                  placeholder="Número de celular *"
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                />

                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 backdrop-blur-sm focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                />

                <select
                  name="programa"
                  value={form.programa}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-[#0d1520] px-4 py-3 text-sm text-white/80 backdrop-blur-sm focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all appearance-none"
                >
                  <option value="" disabled>Programa de interés</option>
                  {programas.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <select
                  name="sede"
                  value={form.sede}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-[#0d1520] px-4 py-3 text-sm text-white/80 backdrop-blur-sm focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all appearance-none"
                >
                  <option value="" disabled>Sede más cercana *</option>
                  {sedes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {estado === "error" && (
                  <p className="text-red-400 text-xs text-center">
                    Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={estado === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F0A500] py-4 text-sm font-black uppercase tracking-wide text-[#080F14] transition-all hover:bg-[#FFD166] hover:shadow-[0_8px_24px_rgba(240,165,0,0.35)] disabled:opacity-60"
                >
                  {estado === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Solicitar información
                    </>
                  )}
                </button>

                <p className="text-center text-[0.65rem] text-white/30 font-[family-name:var(--font-dm-sans)]">
                  Tus datos son confidenciales y solo serán usados para contactarte.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
