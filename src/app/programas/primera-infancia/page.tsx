// app/programas/primera-infancia/page.tsx
// INDECAP — Técnico Laboral en Atención a la Primera Infancia
// Poner fotos en: /public/images/primera-infancia/

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Técnico Laboral en Atención a la Primera Infancia | INDECAP",
  description:
    "Fórmate como profesional especializada en el cuidado, estimulación y desarrollo integral de niños de 0 a 6 años. Programa avalado por la Corporación Educativa INDECAP.",
  openGraph: {
    title: "Primera Infancia | INDECAP",
    description:
      "Técnico Laboral en Atención a la Primera Infancia. Educación de calidad certificada en Medellín.",
    images: ["/images/primera-infancia/hero.jpg"],
  },
};

const competencias = [
  {
    icon: "🧠",
    titulo: "Desarrollo cognitivo",
    desc: "Estimulación temprana y actividades que potencian el aprendizaje y el pensamiento.",
  },
  {
    icon: "❤️",
    titulo: "Vínculo afectivo",
    desc: "Técnicas para fortalecer el apego seguro entre el niño y su entorno familiar.",
  },
  {
    icon: "🎨",
    titulo: "Expresión creativa",
    desc: "Arte, música y juego como herramientas de comunicación y desarrollo integral.",
  },
  {
    icon: "🍼",
    titulo: "Cuidado y nutrición",
    desc: "Prácticas de alimentación, higiene y salud para el bienestar del menor.",
  },
  {
    icon: "📋",
    titulo: "Observación y registro",
    desc: "Seguimiento del desarrollo para detectar necesidades y avances oportunamente.",
  },
  {
    icon: "👨‍👩‍👧",
    titulo: "Orientación a familias",
    desc: "Acompañamiento y asesoría a padres para continuar el proceso en el hogar.",
  },
];

const perfil = [
  "Hogares infantiles y guarderías",
  "Jardines infantiles y CDI",
  "Instituciones de salud pediátrica",
  "Programas del ICBF",
  "Colegios en grado preescolar",
  "Trabajo independiente como niñera profesional",
];

const modulos = [
  { num: "01", nombre: "Desarrollo humano y primera infancia" },
  { num: "02", nombre: "Estimulación temprana e inteligencias múltiples" },
  { num: "03", nombre: "Lúdica, recreación y expresión artística" },
  { num: "04", nombre: "Salud, nutrición e higiene infantil" },
  { num: "05", nombre: "Psicología del desarrollo" },
  { num: "06", nombre: "Proyectos pedagógicos de aula" },
  { num: "07", nombre: "Legislación y política pública de infancia" },
  { num: "08", nombre: "Práctica profesional supervisada" },
];

export default function PrimeraInfanciaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <Image
          src="/images/primera-infancia/hero.jpg"
          alt="Profesional INDECAP cuidando un bebé"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d6a2d]/85 via-[#2d6a2d]/60 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <span className="mb-4 inline-block w-fit rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Técnico Laboral por Competencias
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Atención a la{" "}
            <span className="text-[#a8e063]">Primera Infancia</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90 leading-relaxed">
            Fórmate para acompañar el desarrollo integral de niños y niñas de{" "}
            <strong className="text-white">0 a 6 años</strong>. Una carrera con
            propósito, corazón y alta demanda laboral.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/inscripciones"
              className="rounded-full bg-[#5cb85c] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#4cae4c] active:scale-95"
            >
              Inscríbete ahora
            </Link>
            <a
              href="https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20Primera%20Infancia"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/70 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Más información →
            </a>
          </div>
          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { valor: "12", label: "meses de formación" },
              { valor: "400+", label: "horas prácticas" },
              { valor: "100%", label: "avalado INDECAP" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#a8e063]">{s.valor}</p>
                <p className="text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ ES EL PROGRAMA? ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Un programa pensado para{" "}
              <span className="text-[#5cb85c]">marcar una diferencia</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              El Técnico Laboral en Atención a la Primera Infancia de INDECAP te
              prepara con herramientas pedagógicas, afectivas y científicas para
              acompañar las etapas más decisivas de la vida humana.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Aprenderás desde la estimulación temprana hasta la orientación
              familiar, con un enfoque práctico desde el primer módulo.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Modalidad", valor: "Presencial" },
                { label: "Duración", valor: "12 meses" },
                { label: "Jornada", valor: "Diurna / Nocturna" },
                { label: "Título", valor: "Técnico Laboral" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-4"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-semibold text-gray-800">
                    {item.valor}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Foto collage */}
          <div className="grid grid-cols-2 gap-3 h-[480px]">
            <div className="relative rounded-2xl overflow-hidden row-span-2">
              <Image
                src="/images/primera-infancia/foto-1.jpg"
                alt="Profesional INDECAP con bebé y juguete jirafa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/primera-infancia/foto-2.jpg"
                alt="Cuidado en el suelo con juguete"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/primera-infancia/foto-3.jpg"
                alt="Sonrisa profesional INDECAP con bebé"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPETENCIAS ── */}
      <section className="bg-[#f7fdf3] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Lo que aprenderás
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Competencias concretas que podrás aplicar desde el primer día de
              trabajo.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competencias.map((c) => (
              <div
                key={c.titulo}
                className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{c.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  {c.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN DE ESTUDIOS ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Plan de estudios
            </h2>
            <p className="mt-4 text-gray-500">
              8 módulos diseñados con expertos en pedagogía infantil y
              psicología del desarrollo.
            </p>
            <div className="mt-8 space-y-3">
              {modulos.map((m) => (
                <div
                  key={m.num}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 px-5 py-4 hover:border-[#5cb85c]/40 hover:bg-[#f7fdf3] transition-colors"
                >
                  <span className="text-xs font-bold text-[#5cb85c] min-w-[28px]">
                    {m.num}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {m.nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Uniforme fotos */}
          <div className="space-y-4">
            <div className="relative h-72 rounded-2xl overflow-hidden">
              <Image
                src="/images/primera-infancia/uniforme-1.jpg"
                alt="Estudiantes INDECAP Primera Infancia — uniforme"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden">
              <Image
                src="/images/primera-infancia/uniforme-2.jpg"
                alt="Estudiante INDECAP con distintivo Primera Infancia"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFIL OCUPACIONAL ── */}
      <section className="bg-[#2d6a2d] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            ¿Dónde puedes trabajar?
          </h2>
          <p className="mt-4 text-green-200 max-w-xl mx-auto">
            El cuidado de la primera infancia es una necesidad creciente en toda
            Colombia.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perfil.map((lugar) => (
              <div
                key={lugar}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 text-left backdrop-blur-sm"
              >
                <span className="text-[#a8e063] text-xl">✓</span>
                <span className="text-white font-medium text-sm">{lugar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          ¿Lista para empezar?
        </h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto">
          Inscripciones abiertas. Cupos limitados por jornada. Consúltanos por
          WhatsApp y te ayudamos a elegir el horario ideal.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/inscripciones"
            className="rounded-full bg-[#5cb85c] px-10 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#4cae4c] active:scale-95"
          >
            Inscríbete ahora
          </Link>
          <a
            href="https://wa.me/573001234567?text=Quiero%20información%20sobre%20Primera%20Infancia%20en%20INDECAP"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-[#5cb85c] px-10 py-4 text-base font-semibold text-[#5cb85c] transition hover:bg-[#f7fdf3]"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
