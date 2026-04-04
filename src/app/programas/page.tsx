"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

const escuelas = [
  {
    name: "Escuela de Salud",
    dot: "#378ADD",
    color: "#185FA5",
    bg: "#E6F1FB",
    shortName: "Salud",
    programs: [
      { name: "Auxiliar en Enfermería",        hours: "1.650h", img: "/images/programs/enfermeria/enfermeria-hero.jpg",                       slug: "enfermeria" },
      { name: "Servicios Farmacéuticos",        hours: "1.650h", img: "/images/programs/farmacia/farmacia-hero.jpg",                           slug: "farmacia" },
      { name: "Auxiliar en Salud Oral",         hours: "1.650h", img: "/images/programs/salud-oral/salud-oral-hero.jpg",                       slug: "salud-oral" },
      { name: "Auxiliar en Salud Pública",      hours: "1.650h", img: "/images/programs/salud-publica/salud-publica-hero.jpg",                 slug: "salud-publica" },
      { name: "Administrativo en Salud",        hours: "1.650h", img: "/images/programs/administrativo-salud/administrativo-hero.jpg",         slug: "administrativo-salud" },
      { name: "Atención al Adulto Mayor",       hours: "700h",   img: "/images/programs/adulto-mayor/adulto-mayor-hero.jpg",                   slug: "adulto-mayor" },
    ],
  },
  {
    name: "Escuela Veterinaria",
    dot: "#639922",
    color: "#3B6D11",
    bg: "#EAF3DE",
    shortName: "Veterinaria",
    programs: [
      { name: "Auxiliar en Veterinaria",        hours: "1.200h", img: "/images/programs/veterinaria/veterinaria-hero.jpg",                     slug: "veterinaria" },
      { name: "Peluquería y Estética Canina",   hours: "1.000h", img: "/images/programs/peluqueria-canina/peluqueria-hero.jpg",                slug: "peluqueria-canina" },
    ],
  },
  {
    name: "Escuela de Belleza",
    dot: "#D4537E",
    color: "#993556",
    bg: "#FBEAF0",
    shortName: "Belleza",
    programs: [
      { name: "Cosmetología y Estética Integral", hours: "1.190h", img: "/images/programs/cosmetologia/cosmetologia-hero.jpg",                 slug: "cosmetologia" },
    ],
  },
  {
    name: "Escuela de Administración",
    dot: "#7F77DD",
    color: "#534AB7",
    bg: "#EEEDFE",
    shortName: "Administrativa",
    programs: [
      { name: "Talento Humano",                   hours: "1.000h", img: "/images/programs/talento-humano/talento-humano-hero.jpg",             slug: "talento-humano" },
      { name: "Auxiliar Contable",                hours: "1.000h", img: "/images/programs/contable/contable-hero.jpg",                         slug: "contable" },
      { name: "Auxiliar en Mercadeo",             hours: "1.000h", img: "/images/programs/mercadeo/mercadeo-hero.jpg",                         slug: "mercadeo" },
      { name: "Seguridad y Salud en el Trabajo",  hours: "1.000h", img: "/images/programs/sst/sst-hero.jpg",                                   slug: "sst" },
    ],
  },
  {
    name: "Escuela de Tecnología",
    dot: "#378ADD",
    color: "#185FA5",
    bg: "#E6F1FB",
    shortName: "Tecnología",
    programs: [
      { name: "Técnico en Sistemas",              hours: "1.000h", img: "/images/programs/sistemas/sala-medellin.jpg",                         slug: "sistemas" },
      { name: "Auxiliar en Desarrollo de Software", hours: "700h", img: "/images/programs/sistemas/sala-medellin-clase.jpg",                   slug: "software" },
    ],
  },
  {
    name: "Escuela de Deportes",
    dot: "#1D9E75",
    color: "#0F6E56",
    bg: "#E1F5EE",
    shortName: "Deportes",
    programs: [
      { name: "Entrenamiento Deportivo",          hours: "1.000h", img: "/images/programs/entrenamiento-deportivo/entrenamiento-deportivo-hero.jpg", slug: "entrenamiento-deportivo" },
    ],
  },
];

const filters = ["Todos", ...escuelas.map((e) => e.shortName)];

export default function ProgramasPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? escuelas
      : escuelas.filter((e) => e.shortName === activeFilter);

  return (
    <main className="min-h-screen bg-[#f5fafc]">

      {/* HERO */}
      <section className="pt-32 pb-10 px-8 border-b border-[#c8c4d3]/30" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
            INDECAP — Formación técnica laboral
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
            Programas<br />
            <em className="italic" style={{ color: "#ffb21d" }}>Técnicos</em>
          </h1>
          <p className="text-white/60 text-lg max-w-lg mb-10">
            Formación práctica avalada por la Secretaría de Educación de Antioquia. Elige el programa que transformará tu vida profesional.
          </p>
          <div className="flex flex-wrap gap-10">
            {[
              { num: "17", label: "Programas" },
              { num: "35.000+", label: "Egresados" },
              { num: "40", label: "Años" },
              { num: "3", label: "Sedes" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-playfair)] text-4xl font-black" style={{ color: "#ffb21d" }}>{s.num}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <div className="sticky top-20 z-10 bg-[#f5fafc]/95 backdrop-blur-sm border-b border-[#c8c4d3]/30">
        <div className="max-w-7xl mx-auto px-8 py-3 flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-4 py-2 rounded-full border transition-all whitespace-nowrap font-medium ${
                activeFilter === f
                  ? "bg-[#1a086e] text-white border-[#1a086e]"
                  : "border-[#c8c4d3]/50 text-[#474551] hover:border-[#1a086e] hover:text-[#1a086e] bg-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* PROGRAMAS POR ESCUELA */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {filtered.map((esc) => (
          <div key={esc.name} className="mb-14">

            {/* Header escuela */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: esc.dot }} />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#787583]">{esc.name}</span>
              <div className="flex-1 h-px bg-[#c8c4d3]/40" />
              <span className="text-xs text-[#787583]">{esc.programs.length} programa{esc.programs.length > 1 ? "s" : ""}</span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {esc.programs.map((prog) => (
                <Link
                  key={prog.slug}
                  href={`/programas/${prog.slug}`}
                  className="group bg-white rounded-2xl border border-[#c8c4d3]/20 overflow-hidden hover:border-[#c8c4d3]/60 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  {/* Foto */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#eaeff1]">
                    <Image
                      src={prog.img}
                      alt={prog.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-2"
                      style={{ background: esc.bg, color: esc.color }}
                    >
                      {esc.shortName}
                    </span>
                    <p className="text-sm font-semibold text-[#171c1e] leading-snug mb-3 group-hover:text-[#1a086e] transition-colors">
                      {prog.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#787583]">{prog.hours}</span>
                      <ArrowUpRight
                        size={14}
                        className="text-[#c8c4d3] group-hover:text-[#1a086e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-2 tracking-tight">
                ¿No sabes cuál <em className="italic">elegir?</em>
              </h2>
              <p className="text-white/60 text-lg">Un asesor INDECAP te orienta sin costo y sin compromiso.</p>
            </div>
            <Link
              href="/admision"
              className="shrink-0 inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base hover:scale-105 transition-transform shadow-xl"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              Solicitar orientación gratuita
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}