import type { Metadata } from "next";
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
              </div>
            ))}
          </div>
        </div>
      </section>

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
