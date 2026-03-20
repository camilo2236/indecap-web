"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Phone, CheckCircle, ChevronDown } from "lucide-react";

const CAROUSEL_SLIDES = [
  { src: "/images/hero/hero-banner.jpg", alt: "Estudiantes INDECAP en práctica hospitalaria", label: "Escuela de Salud" },
  { src: "/images/hero/feature-1.png", alt: "Formación técnica laboral INDECAP", label: "40 años de experiencia" },
  { src: "/images/hero/feature-2.png", alt: "Egresados INDECAP trabajando", label: "25.000+ egresados" },
  { src: "/images/hero/feature-3.png", alt: "Prácticas reales en INDECAP", label: "Prácticas reales" },
  { src: "/images/hero/feature-4.png", alt: "Sedes INDECAP en Antioquia", label: "6 sedes en Antioquia" },
];

const INTERVAL_MS = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 600);
  }, [current, isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % CAROUSEL_SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <section id="inicio" className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#080F14]">
        {/* CARRUSEL */}
        <div className="absolute inset-0">
          {CAROUSEL_SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === current ? 1 : 0 }}
              aria-hidden={i !== current}
            >
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover object-top" />
            </div>
          ))}
          {/* Overlay Premium: Oscuro abajo para leer, claro arriba para ver la imagen */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080F14] via-[#080F14]/70 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#080F14]/80 to-transparent" />
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-20 container mx-auto px-6 pb-16 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="max-w-3xl">
            {/* Badge Animado */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs font-semibold tracking-wide text-white backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F0A500] opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F0A500]"></span>
              </span>
              Inscripciones abiertas 2026
            </div>

            <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-tight text-white drop-shadow-lg">
              40 años formando el <br />
              talento de <em className="font-style: italic text-[#FFD166] drop-shadow-md">Antioquia</em>
            </h1>

            <p className="mt-6 max-w-xl font-[family-name:var(--font-dm-sans)] text-lg font-light leading-relaxed text-gray-200">
              Corporación Educativa INDECAP. Formación técnica laboral con enfoque 100% práctico. Más de 25.000 egresados ya están trabajando.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              {['Prácticas reales', 'Alta empleabilidad', 'Certificación laboral'].map((text) => (
                <div key={text} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-[#FFD166]" />
                  <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://api.whatsapp.com/send?phone=573022389760&text=Hola%20INDECAP%20quiero%20inscribirme..." target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F0A500] px-8 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#080F14] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(240,165,0,0.4)]">
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                Inscríbete ahora
              </a>
              <a href="#programas" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                Ver programas <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* STATS FLOTANTES - Glassmorphism Mejorado */}
          <div className="mt-12 hidden lg:absolute lg:bottom-24 lg:right-12 lg:block">
            <div className="flex gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              {[
                { num: "25.000+", label: "Egresados", color: "#FFD166" },
                { num: "40", label: "Años", color: "white" },
                { num: "16", label: "Programas", color: "white" },
                { num: "6", label: "Sedes", color: "white" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[family-name:var(--font-playfair)] text-4xl font-bold" style={{ color: stat.color }}>{stat.num}</div>
                  <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-wider text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}