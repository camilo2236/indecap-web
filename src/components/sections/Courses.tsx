"use client";

import Link from "next/link";
import { useState } from "react";
import { courses } from "@/data/courses";
import { MessageCircle, Clock, MapPin, Award, ArrowRight } from "lucide-react";

const tipos = ["Todos", "curso", "diplomado", "paquete"];
const tipoLabels: Record<string, string> = {
  Todos: "Todos",
  curso: "Cursos",
  diplomado: "Diplomados",
  paquete: "Paquetes",
};

const tipoColors: Record<string, string> = {
  curso: "#1A5CA8",
  diplomado: "#312783",
  paquete: "#F0A500",
};

const courseLinks: Record<string, string> = {
  inyectologia: "/cursos/inyectologia",
  rcp: "/cursos/rcp",
  "primeros auxilios": "/cursos/primeros-auxilios",
  "codigo fucsia": "/cursos/codigo-fucsia",
  vacunacion: "/cursos/vacunacion",
  "toma de muestras": "/cursos/toma-muestras",
  peluqueria: "/cursos/peluqueria-estetica-canina",
};

function normalize(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function Courses() {
  const [tipoActivo, setTipoActivo] = useState("Todos");
  const filtrados = tipoActivo === "Todos" ? courses : courses.filter((c) => c.tipo === tipoActivo);

  return (
    <section id="cursos" className="bg-[#F3F8FA] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A500]">
            Educación Continua INDECAP
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Cursos y Diplomados
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Certificaciones rápidas con validez nacional. Formación intensiva para complementar tu perfil profesional o iniciar una nueva carrera.
          </p>
        </div>

        {/* Filtros */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tipos.map((t) => (
            <button
              key={t}
              onClick={() => setTipoActivo(t)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                tipoActivo === t
                  ? "bg-[#312783] text-white"
                  : "border border-[#E4F1F6] bg-white text-[#6B7280] hover:border-[#312783] hover:text-[#312783]"
              }`}
            >
              {tipoLabels[t]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((course) => {
            const color = tipoColors[course.tipo] || "#312783";
            const normalizedName = normalize(course.name);
            const matchedKey = Object.keys(courseLinks).find((key) => normalizedName.includes(normalize(key)));
            const link = matchedKey ? courseLinks[matchedKey] : null;

            return (
              <div key={course.id} className="group flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
                {link ? (
                  <Link href={link} className="block">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                      {course.image ? (
                        <img src={course.image} alt={course.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center" style={{ background: `${color}18` }}>
                          <span className="text-4xl opacity-40">📚</span>
                        </div>
                      )}
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase" style={{ background: `${color}ee`, color: "#fff" }}>
                          {course.tipo === "paquete" ? "Paquete" : course.tipo}
                        </span>
                      </div>
                      {course.validez && (
                        <div className="absolute right-3 top-3">
                          <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold text-gray-700 shadow-sm">
                            <Award className="h-3 w-3" /> {course.validez}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    {course.image ? (
                      <img src={course.image} alt={course.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center" style={{ background: `${color}18` }}>
                        <span className="text-4xl opacity-40">📚</span>
                      </div>
                    )}
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase" style={{ background: `${color}ee`, color: "#fff" }}>
                        {course.tipo === "paquete" ? "Paquete" : course.tipo}
                      </span>
                    </div>
                    {course.validez && (
                      <div className="absolute right-3 top-3">
                        <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold text-gray-700 shadow-sm">
                          <Award className="h-3 w-3" /> {course.validez}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold leading-snug" style={{ color }}>
                    {course.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                    {course.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                      <Clock className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                      <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                      <span>{course.sedes}</span>
                    </div>
                  </div>
                  {course.badge && (
                    <div className="mt-3 rounded-lg bg-[#FEF9E7] px-3 py-2 text-[0.7rem] font-semibold text-[#92400E]">
                      {course.badge}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 px-5 pb-5">
                  {link && (
                    <Link
                      href={link}
                      className="flex w-full items-center justify-center gap-2 rounded-full border py-2.5 text-xs font-bold transition-all duration-200"
                      style={{ borderColor: color, color }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = color; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = color; }}
                    >
                      Ver curso <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  <a
                    href={course.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: color }}
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Inscribirme
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center font-[family-name:var(--font-dm-sans)] text-xs text-[#6B7280]">
          Todos los cursos incluyen certificación. Asegura tu cupo con solo el 50% del valor.
        </p>
      </div>
    </section>
  );
}