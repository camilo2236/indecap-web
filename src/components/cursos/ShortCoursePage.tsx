"use client";

import Link from "next/link";
import type { ShortCourse } from "@/data/shortCourses";

type Props = {
  course?: ShortCourse;
};

export function ShortCoursePage({ course }: Props) {
  if (!course) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0B323]">
            INDECAP
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0E1B63]">
            Curso no encontrado
          </h1>
          <p className="mt-4 text-[#4B5563]">
            No encontramos la información de este curso. Puedes volver al
            catálogo y revisar los cursos disponibles.
          </p>
          <div className="mt-8">
            <Link
              href="/#cursos"
              className="rounded-full bg-[#0E1B63] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Volver a cursos
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/573167405680?text=${encodeURIComponent(course.ctaMessage)}`;

  return (
    <main className="bg-white">
      {/* HERO con imagen */}
      <section className="relative min-h-[480px] overflow-hidden bg-[#0E1B63]">
        {/* Imagen de fondo */}
        {course.image && (
          <div className="absolute inset-0">
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1B63]/95 via-[#0E1B63]/80 to-[#0E1B63]/30" />
          </div>
        )}

        {/* Contenido */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F0B323]">
            Educación continua INDECAP
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{course.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {course.modality}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {course.duration}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              Validez {course.validity}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F0B323] px-6 py-3 font-semibold text-[#111827] transition hover:opacity-90"
            >
              Solicitar información
            </a>
            <Link
              href="/#cursos"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_0.9fr] lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0E1B63]">
            Una formación pensada para avanzar
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4B5563]">
            {course.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {course.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-5"
              >
                <p className="font-semibold text-[#111827]">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#0E1B63]">¿Qué aprenderás?</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {course.learn.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#E5E7EB] px-4 py-3 text-[#374151]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="h-fit rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-6">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0E1B63]">
            Información general
          </h3>

          <div className="mt-6 space-y-5">
            {course.info.map((row) => (
              <div key={row.label}>
                <p className="font-semibold text-[#111827]">{row.label}</p>
                <p className="text-[#4B5563]">{row.value}</p>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-[#25D366] px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
          >
            Hablar por WhatsApp
          </a>
        </aside>
      </section>
    </main>
  );
}
