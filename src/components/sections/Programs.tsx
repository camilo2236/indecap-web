"use client";

import { useState } from "react";
import Link from "next/link";
import { programs } from "@/data/programs";
import { ArrowRight, Clock } from "lucide-react";

const escuelas = ["Todas", "Escuela de Salud", "Escuela de Belleza", "Escuela Veterinaria", "Escuela de Administración", "Escuela de Seguridad", "Escuela de Deporte", "Escuela de Sistemas"];

export function Programs() {
  const [escuelaActiva, setEscuelaActiva] = useState("Todas");

  const filtrados = escuelaActiva === "Todas"
    ? programs
    : programs.filter((p) => p.escuela === escuelaActiva);

  return (
    <section id="programas" className="bg-[#F8FAFC] py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F0A500]">
            Oferta Académica INDECAP
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3vw,3rem)] font-bold text-[#080F14] leading-tight">
            Programas Técnicos Laborales
          </h2>
          <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-base font-light text-[#4B5563]">
            Programas avalados por la Secretaría de Educación con enfoque práctico y alta empleabilidad. Construye tu futuro laboral en corto tiempo.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {escuelas.map((e) => (
            <button
              key={e}
              onClick={() => setEscuelaActiva(e)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                escuelaActiva === e
                  ? "bg-[#080F14] text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((program) => {
            const isInternalLink = !!program.pageUrl;
            // Componente dinámico: Next Link o Etiqueta 'a'
            const CardWrapper = isInternalLink ? Link : "a";
            const linkProps = isInternalLink 
              ? { href: program.pageUrl as string } 
              : { href: program.whatsappUrl, target: "_blank", rel: "noopener noreferrer" };

            return (
              <CardWrapper
                key={program.id}
                {...linkProps}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                {/* Imagen del Programa */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {program.horas && (
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-sm backdrop-blur-md">
                      <Clock className="h-3.5 w-3.5 text-[#F0A500]" />
                      {program.horas}
                    </div>
                  )}
                </div>

                {/* Info de la Tarjeta */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-wider" style={{ color: program.color }}>
                    ✦ {program.badge}
                  </div>
                  
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-900">
                    {program.name}
                  </h3>
                  
                  <p className="mt-3 line-clamp-2 flex-1 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-gray-500">
                    {program.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="font-[family-name:var(--font-dm-sans)] text-sm font-bold transition-all duration-300" style={{ color: program.color }}>
                      Ver programa
                    </span>
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{ backgroundColor: program.color }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}