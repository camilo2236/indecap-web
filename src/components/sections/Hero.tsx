"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CheckCircle, Loader2, Send, ArrowRight } from "lucide-react";

const SLIDES = [
  { src: "/images/programs/hero-enfermeria.jpg",   label: "Estudiantes de Enfermería",  escuela: "Escuela de Salud" },
{ src: "/images/programs/hero-bienvenidos.jpg",   label: "Bienvenida INDECAP",         escuela: "Comunidad INDECAP" },
{ src: "/images/programs/hero-cosmetologia.jpg",  label: "Cosmetología y Estética",    escuela: "Escuela de Belleza" },   
  { src: "/images/programs/IMG_0166-hero.jpg",                  label: "Enfermería y Veterinaria",       escuela: "Escuela de Salud" },
  { src: "/images/programs/IMG_0186-hero.jpg",                  label: "Auxiliar en Veterinaria",        escuela: "Escuela Veterinaria" },
  { src: "/images/programs/IMG_0190-hero.jpg",                  label: "Auxiliar en Enfermería",         escuela: "Escuela de Salud" },
  { src: "/images/programs/enfermeria/enfermeria-hero.jpg",     label: "Auxiliar en Enfermería",         escuela: "Escuela de Salud" },
  { src: "/images/programs/cosmetologia/cosmetologia-hero.jpg", label: "Cosmetología y Estética",        escuela: "Escuela de Belleza" },
  { src: "/images/programs/veterinaria/veterinaria-hero.jpg",   label: "Auxiliar en Veterinaria",        escuela: "Escuela Veterinaria" },
  { src: "/images/programs/salud-oral/salud-oral-hero.jpg",     label: "Auxiliar en Salud Oral",         escuela: "Escuela de Salud" },
  { src: "/images/programs/farmacia/farmacia-hero.jpg",         label: "Servicios Farmacéuticos",        escuela: "Escuela de Salud" },
  { src: "/images/programs/mercadeo/mercadeo-hero.jpg",         label: "Técnico en Marketing Digital",   escuela: "Escuela de Administración" },
];

const programasTecnicos = [
  "Auxiliar en Enfermería",
  "Cosmetología y Estética Integral",
  "Auxiliar en Veterinaria",
  "Administrativo en Salud",
  "Servicios Farmacéuticos",
  "Auxiliar en Salud Oral",
  "Salud Pública",
  "Atención al Adulto Mayor",
  "Talento Humano",
  "Auxiliar Contable",
  "Técnico en Marketing Digital",
  "SST — Seguridad y Salud en el Trabajo",
  "Entrenamiento Deportivo",
  "Técnico en Sistemas",
  "Auxiliar en Desarrollo de Software",
  "Peluquería y Estética Canina",
  "Otro / No sé aún",
];

const cursos = [
  "RCP y Soporte Vital Básico",
  "Inyectología",
  "Vacunación",
  "Toma de Muestras de Laboratorio",
  "Primeros Auxilios",
  "Código Fucsia",
  "Calidad y Humanización en Salud",
  "Excel Básico y Avanzado",
  "Word",
  "Peluquería y Estética Canina (Curso)",
];

const sedes = ["Medellín", "Envigado", "Caldas"];

type Estado = "idle" | "loading" | "success" | "error";
type Tab = "tecnicos" | "cursos";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [form, setForm] = useState({ nombres: "", apellidos: "", celular: "", correo: "", programa: "", sede: "" });
  const [estado, setEstado] = useState<Estado>("idle");
  const [tab, setTab] = useState<Tab>("tecnicos");

  const goTo = useCallback((i: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(i); setTransitioning(false); }, 800);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const selectPrograma = (p: string) => {
    setForm({ ...form, programa: p });
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
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", { content_name: form.programa, content_category: form.sede });
  }
} else {
  setEstado("error");
}
      if (res.ok) setForm({ nombres: "", apellidos: "", celular: "", correo: "", programa: "", sede: "" });
    } catch { setEstado("error"); }
  };

  const lista = tab === "tecnicos" ? programasTecnicos : cursos;

  return (
    <section id="inicio" className="relative min-h-screen flex overflow-hidden bg-[#080F14]">

      {/* FONDO */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
              quality={85}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080F14]/90 via-[#080F14]/60 to-[#080F14]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080F14]/50 via-transparent to-transparent" />
      </div>

      {/* Indicador */}
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#F0A500]" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-white/40 font-medium">{SLIDES[current].label}</span>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* IZQUIERDA */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold tracking-wide text-white/80 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0A500] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F0A500]" />
              </span>
              Inscripciones abiertas 2026
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] font-black text-white leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
              Tu carrera<br />técnica<br />
              <em className="italic" style={{ color: "#FFD166" }}>empieza aquí</em>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-md mb-10 font-light">
              40 años formando técnicos en Antioquia. Más de 35.000 egresados trabajando hoy en las mejores empresas de la región.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Formación avalada por la Secretaría de Educación",
                "Ambientes reales de aprendizaje",
                "Más de 120 convenios de práctica",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-[#FFD166] shrink-0" />
                  <span className="text-white/75 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {[
                { num: "35.000+", label: "Egresados" },
                { num: "40", label: "Años" },
                { num: "17", label: "Programas" },
                { num: "3", label: "Sedes" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#FFD166]">{s.num}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA — Formulario */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {estado === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1a086e] mb-2">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-[#474551] text-sm mb-6">Un asesor INDECAP te contactará pronto.</p>
                <button onClick={() => setEstado("idle")} className="text-sm text-[#1a086e] underline underline-offset-4">
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1a086e] mb-1">
                    Solicita información gratis
                  </h2>
                  <p className="text-sm text-[#787583]">Te contactamos en menos de 24 horas</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text" name="nombres" value={form.nombres}
                      onChange={handleChange} placeholder="Nombres *" required
                      className="w-full rounded-xl border border-[#e4e9eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#171c1e] placeholder:text-[#aab0b8] focus:border-[#1a086e] focus:outline-none focus:ring-2 focus:ring-[#1a086e]/10 transition-all"
                    />
                    <input
                      type="text" name="apellidos" value={form.apellidos}
                      onChange={handleChange} placeholder="Apellidos *" required
                      className="w-full rounded-xl border border-[#e4e9eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#171c1e] placeholder:text-[#aab0b8] focus:border-[#1a086e] focus:outline-none focus:ring-2 focus:ring-[#1a086e]/10 transition-all"
                    />
                  </div>

                  <input
                    type="tel" name="celular" value={form.celular}
                    onChange={handleChange} placeholder="Celular *" required
                    className="w-full rounded-xl border border-[#e4e9eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#171c1e] placeholder:text-[#aab0b8] focus:border-[#1a086e] focus:outline-none focus:ring-2 focus:ring-[#1a086e]/10 transition-all"
                  />

                  <input
                    type="email" name="correo" value={form.correo}
                    onChange={handleChange} placeholder="Correo electrónico"
                    className="w-full rounded-xl border border-[#e4e9eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#171c1e] placeholder:text-[#aab0b8] focus:border-[#1a086e] focus:outline-none focus:ring-2 focus:ring-[#1a086e]/10 transition-all"
                  />

                  {/* SELECTOR DE PROGRAMA INTERACTIVO */}
                  <div className="rounded-xl border border-[#e4e9eb] bg-[#f8fafc] p-3">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() => { setTab("tecnicos"); setForm(f => ({ ...f, programa: "" })); }}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                          tab === "tecnicos"
                            ? "bg-[#1a086e] text-white"
                            : "bg-white text-[#787583] border border-[#e4e9eb]"
                        }`}
                      >
                        Programas técnicos
                      </button>
                      <button
                        type="button"
                        onClick={() => { setTab("cursos"); setForm(f => ({ ...f, programa: "" })); }}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                          tab === "cursos"
                            ? "bg-[#1a086e] text-white"
                            : "bg-white text-[#787583] border border-[#e4e9eb]"
                        }`}
                      >
                        Cursos cortos
                      </button>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
                      {lista.map((p) => {
                        const sel = form.programa === p;
                        const esCurso = tab === "cursos";
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => selectPrograma(p)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border ${
                              sel
                                ? esCurso
                                  ? "bg-[#1a086e] text-white border-[#1a086e]"
                                  : "bg-[#1a086e] text-white border-[#1a086e]"
                                : "bg-white text-[#474551] border-[#e4e9eb] hover:border-[#1a086e]"
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>

                    {/* Programa seleccionado */}
                    {form.programa && (
                      <p className="text-[11px] text-[#787583] mt-2 pt-2 border-t border-[#e4e9eb]">
                        Seleccionado: <span className="font-bold text-[#1a086e]">{form.programa}</span>
                      </p>
                    )}
                    {!form.programa && (
                      <p className="text-[11px] text-[#aab0b8] mt-2">Toca un programa para seleccionarlo</p>
                    )}
                  </div>

                  {/* Sede */}
                  <div className="relative">
                    <select
                      name="sede" value={form.sede} onChange={handleChange} required
                      aria-label="Sede más cercana"
                      className="w-full rounded-xl border border-[#e4e9eb] bg-[#f8fafc] px-4 py-3 text-sm text-[#171c1e] focus:border-[#1a086e] focus:outline-none focus:ring-2 focus:ring-[#1a086e]/10 transition-all appearance-none"
                    >
                      <option value="" disabled>Sede más cercana *</option>
                      {sedes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {estado === "error" && (
                    <p className="text-red-500 text-xs text-center">Hubo un error. Por favor intenta de nuevo.</p>
                  )}

                  <button
                    type="submit" disabled={estado === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}
                  >
                    {estado === "loading" ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Solicitar información</>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-[#aab0b8]">
                    Tus datos son confidenciales. Solo te contactamos para orientarte.
                  </p>
                </form>

                <div className="mt-4 pt-4 border-t border-[#eaeff1] flex items-center justify-center gap-2">
                  <a
                    href="https://wa.me/573022389760?text=Hola%20INDECAP%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20programas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    O escríbenos por WhatsApp
                    <ArrowRight size={12} />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}