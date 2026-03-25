import type { Metadata } from "next";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Cursos y Diplomados | INDECAP — Educación Continua",
  description:
    "Cursos cortos y diplomados certificados en INDECAP. RCP, Inyectología, Vacunación, Excel, Peluquería Canina y más. Sedes en Medellín, Envigado y Caldas.",
};

const tipos = ["paquete", "diplomado", "curso"];
const tipoLabel: Record<string, string> = {
  paquete: "Paquetes especiales",
  diplomado: "Diplomados",
  curso: "Cursos certificados",
};

export default function EducacionContinuaPage() {
  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      {/* HERO */}
      <section className="bg-[#080F14] pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
              ✦ Educación Continua
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4vw,3.5rem)] font-black text-white mb-4">
              Cursos y{" "}
              <em className="italic text-[#FFD166]">Diplomados</em>
            </h1>
            <p className="text-white/60 text-lg font-[family-name:var(--font-dm-sans)] font-light">
              Capacítate en poco tiempo con cursos prácticos y certificados. Disponibles en Medellín, Envigado y Caldas.
            </p>
          </div>
        </div>
      </section>

      {/* CURSOS POR TIPO */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {tipos.map((tipo) => {
            const items = courses.filter((c) => c.tipo === tipo);
            if (!items.length) return null;
            return (
              <div key={tipo} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-gray-200" />
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#080F14] px-4">
                    {tipoLabel[tipo]}
                  </h2>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((course) => (
                    <div
                      key={course.id}
                      className="group rounded-[20px] bg-white border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
                    >
                      {/* Imagen */}
                      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                        {course.image ? (
                          <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#312783]/10 to-[#312783]/20">
                            <span className="text-4xl">📚</span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#312783]/10 text-[#312783]">
                            {course.tipo}
                          </span>
                          {course.badge && (
                            <span className="text-xs font-semibold text-[#F0A500]">
                              {course.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#080F14] mb-2">
                          {course.name}
                        </h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed mb-4 line-clamp-3">
                          {course.description}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-5">
                          <span>🕐 {course.duration}</span>
                          <span>·</span>
                          <span>📍 {course.sedes}</span>
                        </div>

                        <a
                          href={course.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#312783] py-3 text-sm font-bold text-white hover:bg-[#312783]/90 transition-all"
                        >
                          💬 Inscribirme
                        </a>
                      </div>
                    </div>
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
            ¿Tienes dudas sobre algún curso?
          </h2>
          <p className="text-white/60 mb-8 font-[family-name:var(--font-dm-sans)]">
            Escríbenos y te orientamos sin costo.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=573022389760"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-black text-white hover:opacity-90 transition-all"
          >
            💬 Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}