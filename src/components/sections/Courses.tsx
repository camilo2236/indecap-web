"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import { MessageCircle, Clock, MapPin, Award } from "lucide-react";

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

export function Courses() {
  const [tipoActivo, setTipoActivo] = useState("Todos");

  const filtrados = tipoActivo === "Todos"
    ? courses
    : courses.filter((c) => c.tipo === tipoActivo);

  return (
    <section id="cursos" className="bg-[#F3F8FA] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Educación Continua INDECAP</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Cursos y Diplomados
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Certificaciones rápidas con validez nacional. Formación intensiva
            para complementar tu perfil profesional o iniciar una nueva carrera.
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

        {/* Grid de cursos */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((course) => {
            const color = tipoColors[course.tipo] || "#312783";
            return (
              <div
                key={course.id}
                className="group rounded-[16px] border border-[#E4F1F6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Tipo badge */}
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase"
                    style={{ background: `${color}12`, color }}
                  >
                    {course.tipo === "paquete" ? "Paquete especial" : course.tipo}
                  </span>
                  {course.validez && (
                    <span className="flex items-center gap-1 text-[0.68rem] font-medium text-[#6B7280]">
                      <Award className="h-3 w-3" />
                      Validez {course.validez}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3
                  className="font-[family-name:var(--font-playfair)] text-base font-bold leading-snug"
                  style={{ color }}
                >
                  {course.name}
                </h3>

                {/* Descripción */}
                <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                  {course.description}
                </p>

                {/* Detalles */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Clock className="h-3.5 w-3.5" style={{ color }} />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <MapPin className="h-3.5 w-3.5" style={{ color }} />
                    <span>{course.sedes}</span>
                  </div>
                </div>

                {/* Badge especial */}
                {course.badge && (
                  <div className="mt-3 rounded-[8px] bg-[#FEF9E7] px-3 py-2 text-[0.7rem] font-semibold text-[#92400E]">
                    {course.badge}
                  </div>
                )}

                {/* CTA */}
                <a
                  href={course.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold text-white transition-all duration-250 hover:opacity-90"
                  style={{ backgroundColor: color }}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Inscribirme
                </a>
              </div>
            );
          })}
        </div>

        {/* Escuela label */}
        <p className="mt-8 text-center font-[family-name:var(--font-dm-sans)] text-xs text-[#6B7280]">
          Todos los cursos incluyen certificación. Asegura tu cupo con solo el 50% del valor.
        </p>

      </div>
    </section>
  );
}
