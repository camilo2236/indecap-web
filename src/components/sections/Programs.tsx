"use client";

import { useState } from "react";
import { programs } from "@/data/programs";

const escuelas = ["Todas", "Escuela de Salud", "Escuela de Belleza", "Escuela Veterinaria", "Escuela de Administración", "Escuela de Seguridad", "Escuela de Deporte", "Escuela de Sistemas"];

export function Programs() {
  const [escuelaActiva, setEscuelaActiva] = useState("Todas");

  const filtrados = escuelaActiva === "Todas"
    ? programs
    : programs.filter((p) => p.escuela === escuelaActiva);

  return (
    <section id="programas" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Oferta Académica</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Programas Técnicos Laborales
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Programas avalados por la Secretaría de Educación con enfoque
            práctico y alta empleabilidad. 25.000+ egresados nos respaldan.
          </p>
        </div>

        {/* Filtros por escuela */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {escuelas.map((e) => (
            <button
              key={e}
              onClick={() => setEscuelaActiva(e)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                escuelaActiva === e
                  ? "bg-[#312783] text-white"
                  : "border border-[#E4F1F6] text-[#6B7280] hover:border-[#312783] hover:text-[#312783]"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        {/* Grid de programas */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((program) => (
            <a
              key={program.id}
              href={program.pageUrl || program.whatsappUrl}
              target={program.pageUrl ? undefined : "_blank"}
              rel={program.pageUrl ? undefined : "noopener noreferrer"}
              className="reveal group block overflow-hidden rounded-[16px] border border-[#E4F1F6] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E4F1F6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                {/* Badge horas */}
                {program.horas && (
                  <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#374151] shadow-sm backdrop-blur-sm">
                    {program.horas}
                  </div>
                )}
                {/* Overlay al hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                  <span className="translate-y-4 rounded-full bg-white px-5 py-2 text-sm font-bold opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ color: program.color }}>
                    Ver programa →
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="mb-2 text-xs font-semibold" style={{ color: program.color }}>
                  {program.badge}
                </div>
                <h3
                  className="font-[family-name:var(--font-playfair)] text-lg font-bold"
                  style={{ color: program.color }}
                >
                  {program.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                  {program.description}
                </p>

                {/* Indicador visual */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: program.color }}>
                    Conoce más →
                  </span>
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: program.color }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
