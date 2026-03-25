"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";

const CAROUSEL_SLIDES = [
  { src: "/images/inscripcion/fondo.jpg", alt: "Estudiantes INDECAP Cosmetología" },
  { src: "/images/inscripcion/fondo-2.jpg", alt: "Estudiantes INDECAP Enfermería" },
];

const INTERVAL_MS = 6000;

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

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [form, setForm] = useState({
    nombres: "", apellidos: "", correo: "",
    celular: "", programa: "", sede: "",
  });
  const [estado, setEstado] = useState<Estado>("idle");

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % CAROUSEL_SLIDES.length);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#080F14]">

      {/* CARRUSEL DE FONDO */}
      <div className="absolute inset-0">
        {CAROUSEL_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F14]/95 via-[#080F14]/80 to-[#080F14]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F14]/60 via-transparent to-[#080F14]/30" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* DERECHA — Formulario */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-md mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0A500] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F0A500]" />
              </span>
              Inscripciones abiertas 2026
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,4.5vw,4rem)] font-black leading-tight text-white mb-6">
              40 años formando el<br />
              talento humano de{" "}
              <em className="italic text-[#FFD166]">Antioquia</em>
            </h1>

            <p className="text-white/75 text-lg font-[family-name:var(--font-dm-sans)] font-light leading-relaxed max-w-md mb-8">
              Formación técnica laboral con enfoque práctico. Más de 35.000 egresados ya están trabajando.
            </p>

            {/* Checks */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                "Amplia vinculación laboral de nuestros egresados",
                "Prácticas reales en entornos laborales",
                "Más de 120 convenios de práctica",
                "Financiación directa con INDECAP",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#FFD166] shrink-0" />
                  <span className="text-white/80 text-sm font-[family-name:var(--font-dm-sans)]">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: "35.000+", label: "Egresados", color: "#FFD166" },
                { num: "40", label: "Años", color: "white" },
                { num: "16", label: "Programas", color: "white" },
                { num: "3", label: "Sedes", color: "white" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-[family-name:var(--font-playfair)] text-3xl font-black"
                    style={{ color: stat.color }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mt-1 font-[family-name:var(--font-dm-sans)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA — Formulario */}
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl order-first lg:order-last">
            {estado === "success" ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFD166]/20 mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#FFD166]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-white/60 text-sm font-[family-name:var(--font-dm-sans)]">
                  Un asesor INDECAP te contactará pronto.
                </p>
                <button
                  onClick={() => setEstado("idle")}
                  className="mt-6 text-sm text-[#FFD166] underline underline-offset-4"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-5">
                  Solicitar información gratis
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text" name="nombres" value={form.nombres}
                    onChange={handleChange} placeholder="Nombres *" required
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                  />
                  <input
                    type="text" name="apellidos" value={form.apellidos}
                    onChange={handleChange} placeholder="Apellidos *" required
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                  />
                </div>

                <input
                  type="tel" name="celular" value={form.celular}
                  onChange={handleChange} placeholder="Número de celular *" required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                />

                <input
                  type="email" name="correo" value={form.correo}
                  onChange={handleChange} placeholder="Correo electrónico"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all"
                />

                <select
                  name="programa" value={form.programa} onChange={handleChange}
                  className="w-full rounded-xl border border-white/15 bg-[#0d1520] px-4 py-3 text-sm text-white/80 focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all appearance-none"
                >
                  <option value="" disabled>Programa de interés</option>
                  {programas.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>

                <select
                  name="sede" value={form.sede} onChange={handleChange} required
                  className="w-full rounded-xl border border-white/15 bg-[#0d1520] px-4 py-3 text-sm text-white/80 focus:border-[#FFD166]/50 focus:outline-none focus:ring-1 focus:ring-[#FFD166]/30 transition-all appearance-none"
                >
                  <option value="" disabled>Sede más cercana *</option>
                  {sedes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>

                {estado === "error" && (
                  <p className="text-red-400 text-xs text-center">
                    Hubo un error. Por favor intenta de nuevo.
                  </p>
                )}

                <button
                  type="submit" disabled={estado === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F0A500] py-4 text-sm font-black uppercase tracking-wide text-[#080F14] transition-all hover:bg-[#FFD166] hover:shadow-[0_8px_24px_rgba(240,165,0,0.35)] disabled:opacity-60"
                >
                  {estado === "loading" ? (
                    <><Loader2 className="h-4 w-4 animate-spin" />Enviando...</>
                  ) : (
                    <><Send className="h-4 w-4" />Solicitar información</>
                  )}
                </button>

                <p className="text-center text-[0.65rem] text-white/30 font-[family-name:var(--font-dm-sans)]">
                  Tus datos son confidenciales. Solo te contactaremos para orientarte.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Indicadores carrusel */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {CAROUSEL_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#F0A500]" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
