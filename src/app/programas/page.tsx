"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = [

  { name: "Auxiliar en Enfermería",        hours: "1.650h", img: "/images/programs/enfermeria/enfermeria-hero.jpg",      slug: "enfermeria",   main: true },
  { name: "Cosmetología y Estética",        hours: "1.190h", img: "/images/programs/cosmetologia/cosmetologia-hero.jpg",  slug: "cosmetologia" },
  { name: "Auxiliar en Veterinaria",        hours: "1.200h", img: "/images/programs/veterinaria/veterinaria-hero.jpg",    slug: "veterinaria" },
  { name: "Auxiliar en Salud Oral",         hours: "1.650h", img: "/images/programs/salud-oral/salud-oral-hero.jpg",      slug: "salud-oral" },
  { name: "Servicios Farmacéuticos",        hours: "1.650h", img: "/images/programs/farmacia/farmacia-hero.jpg",          slug: "farmacia" },
  { name: "Técnico en Marketing Digital",   hours: "1.000h", img: "/images/programs/mercadeo/mercadeo-hero.jpg",          slug: "mercadeo" },
];

const escuelas = [
  {
    name: "Escuela de Salud", dot: "#378ADD", color: "#185FA5", bg: "#E6F1FB", short: "Salud",
    programs: [
      { name: "Auxiliar en Salud Pública",        hours: "1.650h", img: "/images/programs/salud-publica/salud-publica-hero.jpg",         slug: "salud-publica" },
      { name: "Administrativo en Salud",          hours: "1.650h", img: "/images/programs/administrativo-salud/administrativo-hero2.jpg", slug: "administrativo-salud" },
      { name: "Atención al Adulto Mayor",         hours: "700h",   img: "/images/programs/adulto-mayor/adulto-mayor-hero.jpg",           slug: "adulto-mayor" },
    ],
  },
  {
    name: "Escuela Veterinaria", dot: "#639922", color: "#3B6D11", bg: "#EAF3DE", short: "Veterinaria",
    programs: [
      { name: "Peluquería y Estética Canina",     hours: "1.000h", img: "/images/programs/peluqueria-canina/peluqueria-hero.jpg",        slug: "peluqueria-canina" },
    ],
  },
  {
    name: "Escuela de Administración", dot: "#7F77DD", color: "#534AB7", bg: "#EEEDFE", short: "Administrativa",
    programs: [
      { name: "Talento Humano",                   hours: "1.000h", img: "/images/programs/talento-humano/talento-humano-hero.jpg",       slug: "talento-humano" },
      { name: "Auxiliar Contable",                hours: "1.000h", img: "/images/programs/contable/contable-hero.jpg",                   slug: "contable" },
      { name: "Seguridad y Salud en el Trabajo",  hours: "1.000h", img: "/images/programs/sst/sst-hero.jpg",                             slug: "sst" },
    ],
  },
  {
    name: "Escuela de Tecnología", dot: "#378ADD", color: "#185FA5", bg: "#E6F1FB", short: "Tecnología",
    programs: [
      { name: "Técnico en Sistemas",              hours: "1.000h", img: "/images/programs/sistemas/sala-medellin.jpg",                   slug: "sistemas" },
      { name: "Auxiliar en Desarrollo de Software", hours: "700h", img: "/images/programs/sistemas/sala-medellin-clase.jpg",             slug: "software" },
    ],
  },
  {
    name: "Escuela de Deportes", dot: "#1D9E75", color: "#0F6E56", bg: "#E1F5EE", short: "Deportes",
    programs: [
      { name: "Entrenamiento Deportivo",          hours: "1.000h", img: "/images/programs/entrenamiento-deportivo/entrenamiento-deportivo-hero.jpg", slug: "entrenamiento-deportivo" },
    ],
  },
];

const filterLabels = ["Todos", "Salud", "Veterinaria", "Belleza", "Administrativa", "Tecnología", "Deportes"];

export default function ProgramasPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const featFiltered =
    activeFilter === "Todos" ? featured
    : activeFilter === "Salud" ? featured.filter(p => ["enfermeria", "salud-oral", "farmacia"].includes(p.slug))
    : activeFilter === "Belleza" ? featured.filter(p => p.slug === "cosmetologia")
    : activeFilter === "Veterinaria" ? featured.filter(p => p.slug === "veterinaria")
    : activeFilter === "Administrativa" ? featured.filter(p => p.slug === "mercadeo")
    : [];

  const escFiltered =
    activeFilter === "Todos" ? escuelas
    : escuelas.filter(e => e.short === activeFilter);

  const [main, ...rest] = featFiltered;

  return (
    <main className="min-h-screen bg-white">

      {/* HERO COMPACTO */}
      <section className="pt-24 pb-6 px-8 bg-white border-b border-[#c8c4d3]/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#787583] mb-2">
            INDECAP — Formación técnica laboral
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black text-[#1a086e] leading-[0.9] tracking-tight">
              Programas<br />
              <em className="italic" style={{ color: "#ffb21d" }}>Técnicos</em>
            </h1>
            <div className="flex gap-8 pb-1">
              {[
                { num: "17", label: "Programas" },
                { num: "35.000+", label: "Egresados" },
                { num: "3", label: "Sedes" },
              ].map((s) => (
                <div key={s.label} className="text-right">
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e]">{s.num}</div>
                  <div className="text-xs text-[#787583] uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS STICKY */}
      <div className="sticky top-20 z-10 bg-white/95 backdrop-blur-sm border-b border-[#c8c4d3]/30">
        <div className="max-w-7xl mx-auto px-8 py-3 flex gap-2 overflow-x-auto">
          {filterLabels.map((f) => (
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

      <div className="max-w-7xl mx-auto px-8">

        {/* FEATURED — layout editorial */}
        {featFiltered.length > 0 && (
          <div className="py-8">
            <div className={`grid gap-[3px] rounded-2xl overflow-hidden ${rest.length > 0 ? "grid-cols-2" : "grid-cols-1"}`}
              style={{ border: "0.5px solid #c8c4d3" }}>

              {/* Principal — grande */}
              {main && (
                <Link
                  href={`/programas/${main.slug}`}
                  className={`group relative overflow-hidden bg-[#eaeff1] ${rest.length > 0 ? "row-span-2" : ""}`}
                  style={{ minHeight: rest.length > 0 ? "600px" : "360px" }}
                >
                  <Image
                    src={main.img}
                    alt={main.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-[family-name:var(--font-playfair)] italic text-3xl font-black text-white mb-2 leading-tight">
                      {main.name}
                    </p>
                    <p className="text-white/60 text-sm">{main.hours} · Aval Sec. Educación</p>
                  </div>
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </Link>
              )}

              {/* Resto — pequeños apilados */}
              {rest.length > 0 && (
                <div className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${Math.min(rest.length, 5)}, 1fr)` }}>
                  {rest.slice(0, 5).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/programas/${p.slug}`}
                      className="group relative overflow-hidden bg-[#eaeff1]"
                      style={{ minHeight: "152px" }}
                    >
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-[family-name:var(--font-playfair)] italic text-base font-black text-white leading-tight">
                          {p.name}
                        </p>
                        <p className="text-white/55 text-xs mt-0.5">{p.hours}</p>
                      </div>
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={12} className="text-white" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* DIVISOR */}
        {escFiltered.length > 0 && (
          <div className="flex items-center gap-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8c4d3]" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#787583]">Todos los programas</span>
            <div className="flex-1 h-px bg-[#c8c4d3]/40" />
          </div>
        )}

        {/* GRILLA POR ESCUELA */}
        {escFiltered.map((esc) => (
          <div key={esc.name} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: esc.dot }} />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#787583]">{esc.name}</span>
              <div className="flex-1 h-px bg-[#c8c4d3]/40" />
              <span className="text-xs text-[#787583]">{esc.programs.length} programa{esc.programs.length > 1 ? "s" : ""}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {esc.programs.map((prog) => (
                <Link
                  key={prog.slug}
                  href={`/programas/${prog.slug}`}
                  className="group bg-white rounded-2xl border border-[#c8c4d3]/20 overflow-hidden hover:border-[#1a086e]/30 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="relative w-full overflow-hidden bg-[#eaeff1]" style={{ aspectRatio: "3/2" }}>
                    <Image
                      src={prog.img}
                      alt={prog.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3"
                      style={{ background: esc.bg, color: esc.color }}
                    >
                      {esc.short}
                    </span>
                    <p className="font-[family-name:var(--font-playfair)] text-base font-black text-[#171c1e] leading-snug mb-3 group-hover:text-[#1a086e] transition-colors">
                      {prog.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#787583]">{prog.hours}</span>
                      <ArrowUpRight size={15} className="text-[#c8c4d3] group-hover:text-[#1a086e] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mb-16 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-2 tracking-tight">
              ¿No sabes cuál <em className="italic">elegir?</em>
            </h2>
            <p className="text-white/55 text-lg">Un asesor INDECAP te orienta sin costo ni compromiso.</p>
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
    </main>
  );
}
