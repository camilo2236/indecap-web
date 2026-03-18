"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Phone, CheckCircle, ChevronDown } from "lucide-react";

const CAROUSEL_SLIDES = [
  {
    src: "/images/hero/hero-banner.jpg",
    alt: "Estudiantes INDECAP en práctica hospitalaria",
    label: "Escuela de Salud",
  },
  {
    src: "/images/hero/feature-1.png",
    alt: "Formación técnica laboral INDECAP",
    label: "40 años de experiencia",
  },
  {
    src: "/images/hero/feature-2.png",
    alt: "Egresados INDECAP trabajando",
    label: "25.000+ egresados",
  },
  {
    src: "/images/hero/feature-3.png",
    alt: "Prácticas reales en INDECAP",
    label: "Prácticas reales desde el día 1",
  },
  {
    src: "/images/hero/feature-4.png",
    alt: "Sedes INDECAP en Antioquia",
    label: "6 sedes en Antioquia",
  },
];

const INTERVAL_MS = 4500;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 600);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % CAROUSEL_SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* HERO PRINCIPAL */}
      <section
        id="inicio"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* CARRUSEL DE IMÁGENES */}
        <div className="absolute inset-0">
          {CAROUSEL_SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === current ? 1 : 0 }}
              aria-hidden={i !== current}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          ))}

          {/* Overlay gradiente */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(17,22,39,0.92) 0%, rgba(49,39,131,0.75) 50%, rgba(17,22,39,0.6) 100%)",
            }}
          />
        </div>

        {/* CONTENIDO */}
        <div className="relative z-20 container mx-auto px-6 pt-28 pb-16 lg:px-12 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-[0.78rem] font-semibold text-white/90 backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F0A500] animate-pulse" />
              Inscripciones abiertas 2026
            </div>

            {/* Título */}
            <h1 className="reveal mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5.5vw,4.2rem)] font-black leading-[1.04] text-white">
              40 años formando el<br />
              talento de{" "}
              <em className="italic text-[#FFD166]">Antioquia</em>
            </h1>

            {/* Subtítulo */}
            <p className="reveal mt-5 max-w-xl font-[family-name:var(--font-dm-sans)] text-lg font-light leading-relaxed text-white/70">
              Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas.
              Formación técnica laboral avalada por la Secretaría de Educación.
              Más de 25.000 egresados transformando Antioquia.
            </p>

            {/* Beneficios */}
            <div className="reveal mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="h-4 w-4 text-[#FFD166]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">Prácticas reales</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="h-4 w-4 text-[#FFD166]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">Alta empleabilidad</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="h-4 w-4 text-[#FFD166]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">Certificación laboral</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=573022389760&text=Hola%20INDECAP%20quiero%20inscribirme%2C%20mi%20nombre%20es%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#F0A500] px-8 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#080F14] transition-all duration-250 hover:scale-105 hover:shadow-[0_8px_24px_rgba(240,165,0,0.35)]"
              >
                <MessageCircle className="h-4 w-4" />
                Inscríbete ahora
              </a>
              <a
                href="#programas"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-8 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-white backdrop-blur-sm transition-all duration-250 hover:bg-white/15"
              >
                Ver programas
                <ChevronDown className="h-4 w-4" />
              </a>
              <a
                href="tel:6044484794"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white/70 transition-all duration-250 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                (604) 448 4794
              </a>
            </div>
          </div>

          {/* Stats flotantes — desktop derecha */}
          <div className="reveal mt-12 lg:absolute lg:right-12 lg:bottom-24 lg:mt-0">
            <div
              className="inline-flex gap-8 rounded-[20px] px-8 py-6 sm:gap-10"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold leading-none text-[#FFD166]">25.000+</div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-[0.7rem] font-medium text-white/50">Egresados</div>
              </div>
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold leading-none text-white">40</div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-[0.7rem] font-medium text-white/50">Años</div>
              </div>
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold leading-none text-white">16</div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-[0.7rem] font-medium text-white/50">Programas</div>
              </div>
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold leading-none text-white">6</div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-[0.7rem] font-medium text-white/50">Sedes</div>
              </div>
            </div>
          </div>

          {/* INDICADORES DEL CARRUSEL */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {CAROUSEL_SLIDES.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a imagen ${i + 1}: ${slide.label}`}
                className="transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                style={{
                  width: i === current ? "28px" : "8px",
                  height: "8px",
                  background: i === current ? "#F0A500" : "rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BARRA DE CONFIANZA */}
      <div className="bg-[#080F14] py-4 overflow-hidden">
        <div className="container mx-auto flex items-center justify-center gap-8 px-6 flex-wrap">
          <span className="font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-white/40 flex items-center gap-2">
            <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#FFD166]">40</span> años educando
          </span>
          <span className="text-white/15">&#x25C6;</span>
          <span className="font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-white/40 flex items-center gap-2">
            <span className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#FFD166]">25.000+</span> egresados
          </span>
          <span className="text-white/15">&#x25C6;</span>
          <span className="font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-white/40">
            Avalados por la <span className="font-bold text-white/60">Secretaría de Educación</span>
          </span>
          <span className="text-white/15">&#x25C6;</span>
          <span className="font-[family-name:var(--font-dm-sans)] text-[0.8rem] text-white/40">
            Calidad Educativa <span className="font-bold text-[#FFD166]">Certificada</span>
          </span>
        </div>
      </div>
    </>
  );
}
