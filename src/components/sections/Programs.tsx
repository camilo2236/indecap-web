import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programas" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Oferta Académica</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Programas Técnicos Laborales
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Programas avalados por la Secretaría de Educación con enfoque
            práctico y alta empleabilidad.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="reveal group overflow-hidden rounded-[16px] border border-[#E4F1F6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E4F1F6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.name}
                  className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-[1.07]"
                />
                {/* Badge nuevo */}
                {program.id === "excel-ia" && (
                  <div className="absolute top-3 left-3 rounded-full bg-[#312783] px-3 py-1 text-xs font-bold text-white">
                    🆕 Nuevo 2026
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3
                  className="font-[family-name:var(--font-playfair)] text-lg font-bold"
                  style={{ color: program.color }}
                >
                  {program.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                  {program.description}
                </p>
                <div className="mt-3 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  {program.badge}
                </div>

                {/* Botones */}
                <div className="mt-5 flex gap-3">
                  {program.pageUrl && (
                    <a
                      href={program.pageUrl}
                      className="flex-1 rounded-full border-2 py-2 text-center text-xs font-semibold transition-all hover:opacity-80"
                      style={{ borderColor: program.color, color: program.color }}
                    >
                      Ver programa →
                    </a>
                  )}
                  <a
                    href={program.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full py-2 text-center text-xs font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: program.color }}
                  >
                    💬 Inscribirme
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
