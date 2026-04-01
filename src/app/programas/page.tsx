import type { Metadata } from "next";
<<<<<<< HEAD
import { programs } from "@/data/programs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programas Técnicos Laborales | INDECAP",
  description: "Conoce los 15 programas técnicos laborales de INDECAP. Formación práctica avalada por la Secretaría de Educación. Sedes en Medellín, Envigado y Caldas.",
};

const escuelas = [...new Set(programs.map((p) => p.escuela))];

export default function ProgramasPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <span className="inline-block px-5 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
            ✦ Formación técnica laboral
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
            Programas<br /><em className="italic" style={{ color: "#ffb21d" }}>Técnicos</em>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-12">
            Formación práctica avalada por la Secretaría de Educación de Antioquia. Elige el programa que transformará tu vida profesional.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            {[
              { num: "15", label: "Programas técnicos" },
              { num: "3", label: "Sedes" },
              { num: "35.000+", label: "Egresados" },
              { num: "25", label: "Municipios" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-playfair)] text-4xl font-black" style={{ color: "#ffb21d" }}>{s.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{s.label}</div>
=======
import Link from "next/link";
import { programs } from "@/data/programs";
import { ProgramImage } from "@/components/ProgramImage";

export const metadata: Metadata = {
  title: "Programas Técnicos Laborales | INDECAP — Medellín, Envigado, Caldas",
  description:
    "Conoce todos los programas técnicos laborales de INDECAP: Enfermería, Cosmetología, Veterinaria, Administración y más. Avalados por la Secretaría de Educación.",
};

const escuelas = [
  "Todas",
  "Escuela de Salud",
  "Escuela de Belleza",
  "Escuela Veterinaria",
  "Escuela de Administración",
  "Escuela de Seguridad",
  "Escuela de Deporte",
  "Escuela de Sistemas",
];

const escuelaColors: Record<string, string> = {
  "Escuela de Salud": "#1A3A6B",
  "Escuela de Belleza": "#C0394B",
  "Escuela Veterinaria": "#7B1F1F",
  "Escuela de Administración": "#6B4A1A",
  "Escuela de Seguridad": "#8A6A1A",
  "Escuela de Deporte": "#1A6B2A",
  "Escuela de Sistemas": "#312783",
};

const escuelaIcons: Record<string, string> = {
  "Escuela de Salud": "🏥",
  "Escuela de Belleza": "💄",
  "Escuela Veterinaria": "🐾",
  "Escuela de Administración": "📊",
  "Escuela de Seguridad": "🦺",
  "Escuela de Deporte": "⚽",
  "Escuela de Sistemas": "💻",
};

export default function ProgramasPage({
  searchParams,
}: {
  searchParams?: { escuela?: string };
}) {
  const escuelaActiva = searchParams?.escuela ?? "Todas";
  const filtrados =
    escuelaActiva === "Todas"
      ? programs
      : programs.filter((p) => p.escuela === escuelaActiva);

  // Agrupar por escuela para el índice lateral
  const porEscuela = escuelas.slice(1).map((e) => ({
    name: e,
    count: programs.filter((p) => p.escuela === e).length,
    color: escuelaColors[e] ?? "#312783",
    icon: escuelaIcons[e] ?? "📚",
  }));

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-24 pt-36"
        style={{
          background:
            "linear-gradient(135deg, #080F14 0%, #312783 60%, #080F14 100%)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.78rem] font-semibold text-white/80 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-[#F0A500] animate-pulse inline-block" />
            Oferta académica 2026
          </div>
          <h1
            className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-tight text-white"
          >
            Programas Técnicos{" "}
            <em className="italic text-[#FFD166]">Laborales</em>
          </h1>
          <p className="mt-4 mx-auto max-w-xl font-[family-name:var(--font-dm-sans)] text-base font-light text-white/60">
            {programs.length} programas avalados por la Secretaría de Educación.
            Formación práctica con alta empleabilidad. 25.000+ egresados nos
            respaldan.
          </p>

          {/* Stats rápidos */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { num: `${programs.length}`, label: "Programas" },
              { num: "6", label: "Escuelas" },
              { num: "3", label: "Sedes" },
              { num: "25.000+", label: "Egresados" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[#FFD166]">
                  {s.num}
                </div>
                <div className="text-[0.72rem] font-medium text-white/40">
                  {s.label}
                </div>
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* PROGRAMAS POR ESCUELA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          {escuelas.map((escuela) => {
            const progs = programs.filter((p) => p.escuela === escuela);
            return (
              <div key={escuela} className="mb-20">
                {/* Título escuela */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-[#c8c4d3]/40" />
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#1a086e] px-4 shrink-0">
                    {escuela}
                  </h2>
                  <div className="h-px flex-1 bg-[#c8c4d3]/40" />
                </div>

                <div className="grid gap-5">
                  {progs.map((program) => (
                    <a
                      key={program.id}
                      href={program.pageUrl || `/programas/${program.id}`}
                      className="group flex flex-col sm:flex-row gap-6 rounded-2xl bg-white border border-[#c8c4d3]/20 shadow-sm p-6 transition-all hover:shadow-md hover:border-[#ffb21d]/40"
                    >
                      {/* Foto */}
                      <div className="w-full sm:w-52 h-36 rounded-xl overflow-hidden shrink-0 bg-[#eaeff1]">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <span
                            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                            style={{ backgroundColor: `${program.color}15`, color: program.color }}
                          >
                            {program.badge}
                          </span>
                          <h3
                            className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2 tracking-tight group-hover:text-[#1a086e] transition-colors"
                            style={{ color: "#171c1e" }}
                          >
                            {program.name}
                          </h3>
                          <p className="text-sm text-[#474551] leading-relaxed line-clamp-2">
                            {program.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all" style={{ color: "#1a086e" }}>
                            <span>Ver programa</span>
                            <ArrowRight size={14} />
                          </div>
                          <span className="text-xs text-[#787583]">Medellín · Envigado · Caldas</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-20 text-center" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-white mb-4 tracking-tight">
              ¿No sabes cuál <em className="italic">elegir?</em>
            </h2>
            <p className="text-white/70 text-xl mb-10">Un asesor INDECAP te orienta sin costo y sin compromiso.</p>
            <a
              href="/admision"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              Solicitar orientación gratuita <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
=======
      {/* ── CONTENIDO PRINCIPAL ── */}
      <div className="container mx-auto px-6 lg:px-12 py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── SIDEBAR ESCUELAS ── */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 rounded-2xl border border-[#E4F1F6] bg-white p-6 shadow-sm">
              <h2 className="font-[family-name:var(--font-dm-sans)] text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-4">
                Escuelas
              </h2>
              <nav className="space-y-1">
                <Link
                  href="/programas"
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    escuelaActiva === "Todas"
                      ? "bg-[#312783] text-white"
                      : "text-[#374151] hover:bg-[#F3F4F6]"
                  }`}
                >
                  <span>Todas</span>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 font-bold ${
                      escuelaActiva === "Todas"
                        ? "bg-white/20 text-white"
                        : "bg-[#F3F4F6] text-[#6B7280]"
                    }`}
                  >
                    {programs.length}
                  </span>
                </Link>
                {porEscuela.map((e) => (
                  <Link
                    key={e.name}
                    href={`/programas?escuela=${encodeURIComponent(e.name)}`}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                      escuelaActiva === e.name
                        ? "text-white"
                        : "text-[#374151] hover:bg-[#F3F4F6]"
                    }`}
                    style={
                      escuelaActiva === e.name
                        ? { backgroundColor: e.color }
                        : undefined
                    }
                  >
                    <span className="flex items-center gap-2">
                      <span>{e.icon}</span>
                      <span className="leading-tight">{e.name.replace("Escuela de ", "").replace("Escuela ", "")}</span>
                    </span>
                    <span
                      className={`text-xs rounded-full px-2 py-0.5 font-bold shrink-0 ${
                        escuelaActiva === e.name
                          ? "bg-white/20 text-white"
                          : "bg-[#F3F4F6] text-[#6B7280]"
                      }`}
                    >
                      {e.count}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* CTA lateral */}
              <div
                className="mt-6 rounded-xl p-4 text-white text-center"
                style={{ background: "linear-gradient(135deg, #312783, #1A3A6B)" }}
              >
                <div className="text-xs font-bold mb-1">¿Tienes dudas?</div>
                <p className="text-[0.72rem] text-white/70 mb-3 leading-relaxed">
                  Asesórate gratis por WhatsApp
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=573022389760&text=Hola%20INDECAP%20quiero%20información%20sobre%20los%20programas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-[#F0A500] py-2 text-xs font-bold text-[#080F14] transition hover:opacity-90"
                >
                  💬 Escribir ahora
                </a>
              </div>
            </div>
          </aside>

          {/* ── GRID DE PROGRAMAS ── */}
          <div className="flex-1 min-w-0">
            {/* Header del grid */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14]">
                  {escuelaActiva === "Todas" ? "Todos los programas" : escuelaActiva}
                </h2>
                <p className="text-sm text-[#6B7280] mt-0.5">
                  {filtrados.length} {filtrados.length === 1 ? "programa" : "programas"} disponibles
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtrados.map((program) => (
                <Link
                  key={program.id}
                  href={program.pageUrl ?? program.whatsappUrl}
                  target={program.pageUrl ? undefined : "_blank"}
                  rel={program.pageUrl ? undefined : "noopener noreferrer"}
                  className="group block overflow-hidden rounded-2xl border border-[#E4F1F6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Imagen */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E4F1F6]">
                    <ProgramImage
                      src={program.image}
                      alt={program.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    {program.horas && (
                      <div className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#374151] shadow-sm backdrop-blur-sm">
                        {program.horas}
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/15">
                      <span
                        className="translate-y-3 rounded-full bg-white px-5 py-2 text-sm font-bold opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        style={{ color: program.color }}
                      >
                        Ver programa →
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-5">
                    <div
                      className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-wider"
                      style={{ color: program.color }}
                    >
                      {program.escuela}
                    </div>
                    <h3
                      className="font-[family-name:var(--font-playfair)] text-[1.05rem] font-bold leading-snug"
                      style={{ color: program.color }}
                    >
                      {program.name}
                    </h3>
                    <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#6B7280] line-clamp-2">
                      {program.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className="text-xs font-semibold transition-all duration-200 group-hover:translate-x-1"
                        style={{ color: program.color }}
                      >
                        Conoce más →
                      </span>
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full text-white text-xs transition-all duration-200 group-hover:scale-110"
                        style={{ backgroundColor: program.color }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA final */}
            <div
              className="mt-12 rounded-2xl p-8 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, #080F14 0%, #312783 100%)",
              }}
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="mt-2 text-white/60 text-sm max-w-sm mx-auto">
                Cuéntanos tu interés y te asesoramos sobre el programa ideal
                para tu perfil.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=573022389760&text=Hola%20INDECAP%20quiero%20información%20sobre%20los%20programas"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F0A500] px-8 py-3 text-sm font-bold text-[#080F14] transition hover:opacity-90 hover:-translate-y-0.5"
              >
                💬 Hablar con un asesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
