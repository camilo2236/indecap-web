import type { Metadata } from "next";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programas Técnicos Laborales | INDECAP",
  description:
    "Conoce los 15 programas técnicos laborales de INDECAP. Formación práctica avalada por la Secretaría de Educación. Sedes en Medellín, Envigado y Caldas.",
};

const escuelas = [...new Set(programs.map((p) => p.escuela))];

export default function ProgramasPage() {
  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      {/* HERO */}
      <section className="bg-[#080F14] pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
              ✦ Formación técnica laboral
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4vw,3.5rem)] font-black text-white mb-4">
              Programas Técnicos{" "}
              <em className="italic text-[#FFD166]">Laborales</em>
            </h1>
            <p className="text-white/60 text-lg font-[family-name:var(--font-dm-sans)] font-light">
              Formación práctica avalada por la Secretaría de Educación de Antioquia. Elige el programa que transformará tu vida profesional.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10">
            {[
              { num: "15", label: "Programas técnicos" },
              { num: "3", label: "Sedes" },
              { num: "35.000+", label: "Egresados" },
              { num: "40", label: "Años de experiencia" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#FFD166]">{s.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAS POR ESCUELA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {escuelas.map((escuela) => {
            const progs = programs.filter((p) => p.escuela === escuela);
            return (
              <div key={escuela} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-gray-200" />
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#080F14] px-4">
                    {escuela}
                  </h2>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid gap-6">
                  {progs.map((program) => (
                    <a
                      key={program.id}
                      href={program.pageUrl || `/#programas`}
                      className="group flex flex-col sm:flex-row gap-6 rounded-[20px] bg-white border border-gray-100 shadow-sm p-6 transition-all hover:shadow-md hover:border-gray-200"
                    >
                      {/* Foto */}
                      <div className="w-full sm:w-48 h-36 rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                              style={{ backgroundColor: `${program.color}18`, color: program.color }}
                            >
                              {program.badge}
                            </span>
                          </div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-[#080F14] mb-2 group-hover:text-[#312783] transition-colors">
                            {program.name}
                          </h3>
                          <p className="text-sm text-[#6B7280] font-[family-name:var(--font-dm-sans)] leading-relaxed line-clamp-2">
                            {program.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                          <span className="text-sm font-semibold text-[#312783] group-hover:underline underline-offset-2">
                            Ver programa →
                          </span>
                          <span className="text-xs text-[#9CA3AF]">Medellín · Envigado · Caldas</span>
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
      <section className="bg-[#080F14] py-16 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white mb-4">
            ¿No sabes cuál elegir?
          </h2>
          <p className="text-white/60 mb-8 font-[family-name:var(--font-dm-sans)]">
            Un asesor INDECAP te orienta sin costo y sin compromiso.
          </p>
          <a
            href="/admision"
            className="inline-flex items-center gap-2 rounded-full bg-[#F0A500] px-8 py-4 font-black text-[#080F14] hover:bg-[#FFD166] transition-all"
          >
            Solicitar orientación gratuita
          </a>
        </div>
      </section>
    </main>
  );
}