"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonios = [
  {
    id: "valentina",
    videoId: "1Hmhu7SKaHE",
    nombre: "Valentina Rangel",
    programa: "Bachillerato Semi Escolarizado",
    cita: "Recomiendo esta institución por ser la mejor, por sus excelentes profesores y por su calidad de estudio. Los invito a todos a que hagan parte de esta gran institución.",
    color: "#312783",
  },
  {
    id: "paula",
    videoId: "9v2jg8mqTrA",
    nombre: "Paula Geraldín",
    programa: "Bachillerato Semi Escolarizado",
    cita: "Recomiendo la institución por su excelente calidad de estudio y por sus excelentes profesores. Los invito a que hagan parte de esta gran institución.",
    color: "#312783",
  },
  {
    id: "enfermeria",
    videoId: "L7erLCnqHGA",
    nombre: "Egresadas Auxiliar en Enfermería",
    programa: "Auxiliar en Enfermería",
    cita: "Recomendamos la institución por su buena calidad y por sus excelentes profesores. Los invitamos a que hagan parte de esta gran institución.",
    color: "#1A3A6B",
  },
  {
    id: "graduados",
    videoId: "nNtLjLRX6jU",
    nombre: "Valentina, Elizabeth, León, María Jimena y María Alejandra",
    programa: "Bachillerato Semi Escolarizado",
    cita: "¡Logramos nuestra meta! INDECAP nos dio la oportunidad de terminar nuestro bachillerato con excelentes profesores y calidad educativa.",
    color: "#0F6E56",
  },
  {
    id: "testimonios",
    videoId: "2IJt2fmyjtQ",
    nombre: "Graduados INDECAP 2024",
    programa: "Varios programas",
    cita: "Una institución que transforma vidas. Cada uno de nosotros encontró en INDECAP la oportunidad de crecer profesionalmente.",
    color: "#7B1F1F",
  },
];

export function Testimonios() {
  const [activo, setActivo] = useState(0);

  const anterior = () => setActivo((a) => (a - 1 + testimonios.length) % testimonios.length);
  const siguiente = () => setActivo((a) => (a + 1) % testimonios.length);

  const t = testimonios[activo];

  return (
    <section id="testimonios" className="bg-[#080F14] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD166]">
            Historias reales
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3vw,3rem)] font-black text-white">
            Lo que dicen nuestros{" "}
            <em className="italic text-[#FFD166]">egresados</em>
          </h2>
          <p className="mt-4 text-white/50 font-[family-name:var(--font-dm-sans)] font-light max-w-lg mx-auto">
            35.000+ egresados respaldan la calidad de INDECAP. Aquí algunos de ellos.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* Video */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] sm:w-[320px]">
              {/* Glow */}
              <div
                className="absolute inset-0 blur-[60px] opacity-30 rounded-3xl"
                style={{ backgroundColor: t.color }}
              />
              {/* iframe YouTube Short */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10" style={{ aspectRatio: "9/16" }}>
                <iframe
                  key={t.videoId}
                  src={`https://www.youtube.com/embed/${t.videoId}?autoplay=0&rel=0&modestbranding=1`}
                  title={t.nombre}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Cita y navegación */}
          <div>
            {/* Quote */}
            <Quote className="h-10 w-10 mb-6 opacity-30" style={{ color: t.color }} />

            <blockquote className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-bold text-white leading-relaxed mb-8">
              "{t.cita}"
            </blockquote>

            <div className="mb-10">
              <p className="font-semibold text-white font-[family-name:var(--font-dm-sans)]">
                {t.nombre}
              </p>
              <p className="text-sm font-[family-name:var(--font-dm-sans)]" style={{ color: t.color === "#312783" ? "#9D97E8" : "#FFD166" }}>
                {t.programa} · INDECAP
              </p>
            </div>

            {/* Navegación */}
            <div className="flex items-center gap-4">
              <button
                onClick={anterior}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={siguiente}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2 ml-2">
                {testimonios.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activo ? "w-8 bg-[#F0A500]" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>

              <span className="ml-auto text-xs text-white/30 font-[family-name:var(--font-dm-sans)]">
                {activo + 1} / {testimonios.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
