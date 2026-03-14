import { RegistrationForm } from "@/components/RegistrationForm";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-[#F3F8FA] pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <div className="reveal">
            <div className="section-label mb-4">
              Corporación Educativa INDECAP
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-tight text-[#080F14]">
              Tu futuro profesional{" "}
              <em className="font-bold text-[#312783]">comienza aquí</em>
            </h1>
            <p className="mt-5 max-w-lg font-[family-name:var(--font-dm-sans)] text-lg font-light leading-relaxed text-[#374151]">
              Formación técnica laboral avalada por la Secretaría de Educación.
              Programas prácticos con alta demanda en el mercado laboral. Sedes
              en Medellín, Envigado y Caldas.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[#080F14]">
                  5.000+
                </div>
                <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Egresados
                </div>
              </div>
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[#080F14]">
                  3
                </div>
                <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Sedes
                </div>
              </div>
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-[#080F14]">
                  7
                </div>
                <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Programas Técnicos
                </div>
              </div>
            </div>
          </div>

          <div className="reveal rounded-[20px] border border-[#E4F1F6] bg-white p-7 shadow-xl">
            <h2 className="mb-5 font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14]">
              Inscríbete ahora
            </h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
