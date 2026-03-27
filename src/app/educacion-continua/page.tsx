import type { Metadata } from "next";
import { courses } from "@/data/courses";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos y Diplomados | INDECAP — Educación Continua",
  description: "Cursos cortos y diplomados certificados en INDECAP. RCP, Inyectología, Excel, Peluquería Canina y más. Sedes en Medellín, Envigado y Caldas.",
};

const tipos = ["paquete", "diplomado", "curso"];
const tipoLabel: Record<string, string> = {
  paquete: "Paquetes especiales",
  diplomado: "Diplomados",
  curso: "Cursos certificados",
};

export default function EducacionContinuaPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc]">

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: "linear-gradient(135deg, #805600 0%, #6b4800 100%)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <span className="inline-block px-5 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "#ffb21d", color: "#281800" }}>
            ✦ Educación Continua
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
            Cursos y<br /><em className="italic" style={{ color: "#ffb21d" }}>Diplomados</em>
          </h1>
          <p className="text-white/70 text-xl max-w-xl leading-relaxed">
            Capacítate en poco tiempo con cursos prácticos y certificados. Disponibles en Medellín, Envigado y Caldas.
          </p>
        </div>
      </section>

      {/* CURSOS POR TIPO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          {tipos.map((tipo) => {
            const items = courses.filter((c) => c.tipo === tipo);
            if (!items.length) return null;
            return (
              <div key={tipo} className="mb-20">
                {/* Título tipo */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-[#c8c4d3]/40" />
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#805600] px-4 shrink-0">
                    {tipoLabel[tipo]}
                  </h2>
                  <div className="h-px flex-1 bg-[#c8c4d3]/40" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((course) => (
                    <a
                      key={course.id}
                      href={`/cursos/${course.id}`}
                      className="group rounded-2xl bg-white border border-[#c8c4d3]/20 shadow-sm overflow-hidden hover:shadow-md hover:border-[#ffb21d]/40 transition-all"
                    >
                      {/* Imagen */}
                      <div className="aspect-[16/9] overflow-hidden bg-[#eaeff1]">
                        {course.image ? (
                          <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #805600/10, #805600/20)" }}>
                            <span className="text-5xl">📚</span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: "#ffb21d20", color: "#805600" }}>
                            {course.tipo}
                          </span>
                          {course.badge && (
                            <span className="text-xs font-semibold" style={{ color: "#805600" }}>· {course.badge}</span>
                          )}
                        </div>

                        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-[#171c1e] mb-2 tracking-tight group-hover:text-[#805600] transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-sm text-[#474551] leading-relaxed mb-4 line-clamp-2">
                          {course.description}
                        </p>

                        <div className="text-xs text-[#787583] mb-5">
                          🕐 {course.duration} · 📍 {course.sedes}
                        </div>

                        <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all" style={{ color: "#805600" }}>
                          <span>Ver curso</span>
                          <ArrowRight size={14} />
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
          <div className="rounded-3xl p-12 md:p-20 text-center" style={{ background: "linear-gradient(135deg, #805600 0%, #6b4800 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-white mb-4 tracking-tight">
              ¿Tienes dudas sobre <em className="italic">algún curso?</em>
            </h2>
            <p className="text-white/70 text-xl mb-10">Escríbenos y te orientamos sin costo.</p>
            <a
              href="https://api.whatsapp.com/send?phone=573022389760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
              style={{ backgroundColor: "#ffb21d", color: "#281800" }}
            >
              💬 Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}