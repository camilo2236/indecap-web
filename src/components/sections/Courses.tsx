"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { courses } from "@/data/courses";
import { ArrowUpRight, Clock, MapPin, Award } from "lucide-react";

const filterLabels = ["Todos", "Cursos", "Diplomados", "Paquetes"];

const featured = [
  { id: "peluqueria-canina", img: "/images/cursos/peluqueria-canina.jpg", main: true },
  { id: "calidad-humanizacion", img: "/images/cursos/calidad-humanizacion.jpg" },
  { id: "rcp", img: "/images/cursos/rcp.jpg" },
  { id: "inyectologia", img: "/images/cursos/inyectologia.jpg" },
  { id: "excel", img: "/images/cursos/excel.jpg" },
  { id: "primeros-auxilios", img: "/images/cursos/primeros-auxilios.jpg" },
];

export function Courses() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos" ? courses
    : activeFilter === "Cursos" ? courses.filter((c) => c.tipo === "curso")
    : activeFilter === "Diplomados" ? courses.filter((c) => c.tipo === "diplomado")
    : courses.filter((c) => c.tipo === "paquete");

  const featFiltered =
    activeFilter === "Todos" ? featured
    : activeFilter === "Cursos" ? featured.filter(f => ["rcp","inyectologia","primeros-auxilios","excel","vacunacion","toma-muestras"].includes(f.id))
    : activeFilter === "Diplomados" ? featured.filter(f => f.id === "peluqueria-canina")
    : featured.filter(f => f.id === "calidad-humanizacion");

  const [main, ...rest] = featFiltered;

  return (
    <section id="cursos" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffb21d] mb-3">
              Educacion Continua INDECAP
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-[#1a086e] leading-[0.9] tracking-tight">
              Cursos y<br />
              <em className="italic" style={{ color: "#ffb21d" }}>Diplomados</em>
            </h2>
          </div>
          <Link
            href="/educacion-continua"
            className="inline-flex items-center gap-2 text-sm font-black text-[#1a086e] border-b-2 border-[#ffb21d] pb-0.5 hover:gap-4 transition-all self-start sm:self-end"
          >
            Ver todos <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* BENTO GRID featured */}
        {featFiltered.length > 0 && (
          <div className="mb-10">
            <div
              className={`grid gap-[3px] rounded-2xl overflow-hidden ${rest.length > 0 ? "grid-cols-2" : "grid-cols-1"}`}
              style={{ border: "0.5px solid #c8c4d3" }}
            >
              {main && (
                <Link
                  href={`/cursos/${main.id}`}
                  className={`group relative overflow-hidden bg-[#eaeff1] ${rest.length > 0 ? "row-span-2" : ""}`}
                  style={{ minHeight: rest.length > 0 ? "500px" : "300px" }}
                >
                  <Image
                    src={main.img}
                    alt={main.id}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    {(() => {
                      const c = courses.find(x => x.id === main.id);
                      return c ? (
                        <>
                          <p className="font-[family-name:var(--font-playfair)] italic text-3xl font-black text-white mb-2 leading-tight">{c.name}</p>
                          <p className="text-white/60 text-sm">{c.duration}</p>
                        </>
                      ) : null;
                    })()}
                  </div>
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${Math.min(rest.length, 5)}, 1fr)` }}>
                  {rest.slice(0, 5).map((p) => {
                    const c = courses.find(x => x.id === p.id);
                    return (
                      <Link
                        key={p.id}
                        href={`/cursos/${p.id}`}
                        className="group relative overflow-hidden bg-[#eaeff1]"
                        style={{ minHeight: "130px" }}
                      >
                        <Image
                          src={p.img}
                          alt={p.id}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-[family-name:var(--font-playfair)] italic text-base font-black text-white leading-tight">
                            {c ? c.name : p.id}
                          </p>
                          <p className="text-white/55 text-xs mt-0.5">{c ? c.duration : ""}</p>
                        </div>
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={12} className="text-white" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grid todos los cursos */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ffb21d]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#787583]">Todos los cursos</span>
          <div className="flex-1 h-px bg-[#1a086e]/8" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((course) => (
            <Link
              key={course.id}
              href={`/cursos/${course.id}`}
              className="group bg-white rounded-2xl border border-[#c8c4d3]/20 overflow-hidden hover:border-[#1a086e]/30 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="relative w-full overflow-hidden bg-[#eaeff1]" style={{ aspectRatio: "3/2" }}>
                {course.image ? (
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#eaeff1]">
                    <span className="text-4xl">📚</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-2 bg-[#1a086e]/8 text-[#1a086e]">
                  {course.tipo}
                </span>
                <p className="font-[family-name:var(--font-playfair)] text-sm font-black text-[#171c1e] leading-snug mb-2 group-hover:text-[#1a086e] transition-colors">
                  {course.name}
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#787583]">
                    <Clock size={10} className="text-[#1a086e]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#787583]">
                    <MapPin size={10} className="text-[#1a086e]" />
                    {course.sedes}
                  </div>
                  {course.validez && (
                    <div className="flex items-center gap-1.5 text-xs text-[#787583]">
                      <Award size={10} className="text-[#1a086e]" />
                      {course.validez}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs font-black text-[#1a086e]">Ver curso</span>
                  <ArrowUpRight size={14} className="text-[#c8c4d3] group-hover:text-[#1a086e] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}
        >
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-white italic mb-1">
              Asegura tu cupo hoy
            </h3>
            <p className="text-white/55 text-sm">Solo el 50% del valor para reservar. Certificacion inmediata.</p>
          </div>
          <Link
            href="/educacion-continua"
            className="shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-xl"
            style={{ backgroundColor: "#ffb21d", color: "#281800" }}
          >
            Ver todos los cursos <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}