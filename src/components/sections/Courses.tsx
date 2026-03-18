"use client";

import Link from "next/link";
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
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function Courses() {
  const [tipoActivo, setTipoActivo] = useState("Todos");

  const filtrados =
    tipoActivo === "Todos"
      ? courses
      : courses.filter((c) => c.tipo === tipoActivo);

  return (
    <section id="cursos" className="bg-[#F3F8FA] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0A500]">
            Educación Continua INDECAP
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Cursos y Diplomados
          </h2>

          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Certificaciones rápidas con validez nacional. Formación intensiva
            para complementar tu perfil profesional o iniciar una nueva carrera.
          </p>
        </div>

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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((course) => {
            const color = tipoColors[course.tipo] || "#312783";
            const normalizedName = normalize(course.name);

            const matchedKey = Object.keys(courseLinks).find((key) =>
              normalizedName.includes(normalize(key))
            );

            const link = matchedKey ? courseLinks[matchedKey] : null;

            const cardContent = (
              <div className="rounded-[16px] border border-[#E4F1F6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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

                <h3
                  className="font-[family-name:var(--font-playfair)] text-base font-bold leading-snug"
                  style={{ color }}
                >
                  {course.name}
                </h3>

                <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                  {course.description}
                </p>

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

                {course.badge && (
                  <div className="mt-3 rounded-[8px] bg-[#FEF9E7] px-3 py-2 text-[0.7rem] font-semibold text-[#92400E]">
                    {course.badge}
                  </div>
                )}

                <div className="mt-4 flex flex-col gap-2">
                  {link && (
                    <div className="w-full rounded-full border border-[#312783] py-2 text-center text-xs font-bold text-[#312783] transition hover:bg-[#312783] hover:text-white">
                      Ver curso
                    </div>
                  )}

                  <a
                    href={course.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold text-white transition-all duration-250 hover:opacity-90"
                    style={{ backgroundColor: color }}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Inscribirme
                  </a>
                </div>
              </div>
            );

            if (link) {
              return (
                <Link key={course.id} href={link} className="block">
                  {cardContent}
                </Link>
              );
            }

            return <div key={course.id}>{cardContent}</div>;
          })}
        </div>

        <p className="mt-8 text-center font-[family-name:var(--font-dm-sans)] text-xs text-[#6B7280]">
          Todos los cursos incluyen certificación. Asegura tu cupo con solo el 50% del valor.
        </p>
      </div>
    </section>
  );
}