"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = [
  { name: "Diplomado en Peluqueria y Estetica Canina", hours: "120h · 45 dias", img: "/images/cursos/peluqueria-canina.jpg", slug: "peluqueria-canina", main: true },
  { name: "Calidad y Humanizacion en los Servicios",   hours: "20h certificadas", img: "/images/cursos/calidad-humanizacion.jpg", slug: "calidad-humanizacion" },
  { name: "RCP — Reanimacion Cardiopulmonar",          hours: "20h certificadas", img: "/images/cursos/rcp.jpg", slug: "rcp" },
  { name: "Inyectologia",                               hours: "20h certificadas", img: "/images/cursos/inyectologia.jpg", slug: "inyectologia" },
  { name: "Excel Basico, Intermedio y Avanzado",        hours: "20h por nivel", img: "/images/cursos/excel.jpg", slug: "excel" },
  { name: "Primeros Auxilios",                          hours: "20h certificadas", img: "/images/cursos/primeros-auxilios.jpg", slug: "primeros-auxilios" },
];

const categorias = [
  {
    name: "Escuela de Salud", dot: "#378ADD", color: "#185FA5", bg: "#E6F1FB", short: "Salud",
    cursos: [
      { name: "RCP — Reanimacion Cardiopulmonar",           hours: "20h", tipo: "Curso", img: "/images/cursos/rcp.jpg",               slug: "rcp" },
      { name: "Inyectologia",                               hours: "20h", tipo: "Curso", img: "/images/cursos/inyectologia.jpg",       slug: "inyectologia" },
      { name: "Vacunacion",                                 hours: "20h", tipo: "Curso", img: "/images/cursos/vacunacion.jpg",         slug: "vacunacion" },
      { name: "Toma de Muestras de Laboratorio",            hours: "20h", tipo: "Curso", img: "/images/cursos/toma-muestras.jpg",     slug: "toma-muestras" },
      { name: "Primeros Auxilios",                          hours: "20h", tipo: "Curso", img: "/images/cursos/primeros-auxilios.jpg", slug: "primeros-auxilios" },
      { name: "Codigo Fucsia",                              hours: "20h", tipo: "Curso", img: "/images/cursos/codigo-fucsia.jpg",     slug: "codigo-fucsia" },
      { name: "Calidad y Humanizacion en los Servicios",   hours: "20h", tipo: "Paquete", img: "/images/cursos/calidad-humanizacion.jpg", slug: "calidad-humanizacion" },
    ],
  },
  {
    name: "Escuela Veterinaria", dot: "#639922", color: "#3B6D11", bg: "#EAF3DE", short: "Veterinaria",
    cursos: [
      { name: "Diplomado en Peluqueria y Estetica Canina", hours: "120h", tipo: "Diplomado", img: "/images/cursos/peluqueria-canina.jpg", slug: "peluqueria-canina" },
    ],
  },
  {
    name: "Escuela de Tecnologia", dot: "#7F77DD", color: "#534AB7", bg: "#EEEDFE", short: "Tecnologia",
    cursos: [
      { name: "Excel Basico, Intermedio y Avanzado", hours: "20h por nivel", tipo: "Curso", img: "/images/cursos/excel.jpg", slug: "excel" },
      { name: "Word Basico y Avanzado",              hours: "20h",           tipo: "Curso", img: "/images/cursos/word.jpg",  slug: "word" },
    ],
  },
];

const filterLabels = ["Todos", "Salud", "Veterinaria", "Tecnologia"];

export default function EducacionContinuaPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const featFiltered =
    activeFilter === "Todos" ? featured
    : activeFilter === "Salud" ? featured.filter(p => ["rcp", "inyectologia", "primeros-auxilios", "calidad-humanizacion"].includes(p.slug))
    : activeFilter === "Veterinaria" ? featured.filter(p => p.slug === "peluqueria-canina")
    : activeFilter === "Tecnologia" ? featured.filter(p => ["excel", "word"].includes(p.slug))
    : featured;

  const catFiltered =
    activeFilter === "Todos" ? categorias
    : categorias.filter(c => c.short === activeFilter);

  const [main, ...rest] = featFiltered;

  return (
    <main className="min-h-screen bg-white">

      {/* HERO COMPACTO */}
      <section className="pt-24 pb-6 px-8 bg-white border-b border-[#c8c4d3]/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#787583] mb-2">
            INDECAP — Educacion Continua
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-black text-[#1a086e] leading-[0.9] tracking-tight">
              Cursos y
              <br />
              <em className="italic" style={{ color: "#ffb21d" }}>Diplomados</em>
            </h1>
            <div className="flex gap-8 pb-1">
              <div className="text-right">
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e]">10+</div>
                <div className="text-xs text-[#787583] uppercase tracking-wider mt-0.5">Cursos</div>
              </div>
              <div className="text-right">
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e]">20h</div>
                <div className="text-xs text-[#787583] uppercase tracking-wider mt-0.5">Certificacion</div>
              </div>
              <div className="text-right">
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e]">3</div>
                <div className="text-xs text-[#787583] uppercase tracking-wider mt-0.5">Sedes</div>
              </div>
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
            <div
              className={`grid gap-[3px] rounded-2xl overflow-hidden ${rest.length > 0 ? "grid-cols-2" : "grid-cols-1"}`}
              style={{ border: "0.5px solid #c8c4d3" }}
            >
              {main && (
                <Link
                  href={`/cursos/${main.slug}`}
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
                    <p className="text-white/60 text-sm">{main.hours}</p>
                  </div>
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${Math.min(rest.length, 5)}, 1fr)` }}>
                  {rest.slice(0, 5).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/cursos/${p.slug}`}
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
        {catFiltered.length > 0 && (
          <div className="flex items-center gap-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8c4d3]" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#787583]">Todos los cursos</span>
            <div className="flex-1 h-px bg-[#c8c4d3]/40" />
          </div>
        )}

        {/* GRILLA POR CATEGORIA */}
        {catFiltered.map((cat) => (
          <div key={cat.name} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: cat.dot }} />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#787583]">{cat.name}</span>
              <div className="flex-1 h-px bg-[#c8c4d3]/40" />
              <span className="text-xs text-[#787583]">{cat.cursos.length} curso{cat.cursos.length > 1 ? "s" : ""}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {cat.cursos.map((curso) => (
                <Link
                  key={curso.slug}
                  href={`/cursos/${curso.slug}`}
                  className="group bg-white rounded-2xl border border-[#c8c4d3]/20 overflow-hidden hover:border-[#1a086e]/30 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="relative w-full overflow-hidden bg-[#eaeff1]" style={{ aspectRatio: "3/2" }}>
                    <Image
                      src={curso.img}
                      alt={curso.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3"
                      style={{ background: cat.bg, color: cat.color }}
                    >
                      {curso.tipo}
                    </span>
                    <p className="font-[family-name:var(--font-playfair)] text-base font-black text-[#171c1e] leading-snug mb-3 group-hover:text-[#1a086e] transition-colors">
                      {curso.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#787583]">{curso.hours}</span>
                      <ArrowUpRight size={15} className="text-[#c8c4d3] group-hover:text-[#1a086e] transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          className="mb-16 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}
        >
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-2 tracking-tight">
              No sabes cual <em className="italic">elegir?</em>
            </h2>
            <p className="text-white/55 text-lg">Un asesor INDECAP te orienta sin costo ni compromiso.</p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=573022389760"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base hover:scale-105 transition-transform shadow-xl"
            style={{ backgroundColor: "#ffb21d", color: "#281800" }}
          >
            Escribir por WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}