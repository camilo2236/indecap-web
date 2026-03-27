import type { Metadata } from "next";
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
              </div>
            ))}
          </div>
        </div>
      </section>

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