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
            <a
              key={program.id}
              href={program.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group overflow-hidden rounded-[16px] border border-[#E4F1F6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E4F1F6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.name}
                  className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-[1.07]"
                />
              </div>
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
