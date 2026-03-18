import { RegistrationForm } from "@/components/RegistrationForm";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-[#F3F8FA] pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[-120px] right-[-200px] w-[500px] h-[500px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(49,39,131,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-80px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(240,165,0,0.06) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%]">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#312783]/12 bg-[#312783]/5 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-[0.78rem] font-semibold text-[#312783]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F0A500] animate-pulse" />
              Inscripciones abiertas 2026
            </div>
            <h1 className="mt-5 font-[family-name:var(--font-playfair)] text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-[1.06] text-[#080F14]">
              40 años formando el talento de{" "}
              <em className="font-bold text-[#312783]">Antioquia</em>
            </h1>
            <p className="mt-5 max-w-lg font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-[#374151]">
              Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas.
              Formación técnica laboral avalada por la Secretaría de Educación
              con más de 25.000 egresados transformando el sector salud y
              productivo de la región.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="text-left">
                <div className="font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold text-[#080F14] leading-none">
                  25.000+
                </div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Egresados
                </div>
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold text-[#080F14] leading-none">
                  40
                </div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Años de experiencia
                </div>
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold text-[#080F14] leading-none">
                  16
                </div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Programas técnicos
                </div>
              </div>
              <div className="text-left">
                <div className="font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold text-[#080F14] leading-none">
                  6
                </div>
                <div className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#6B7280]">
                  Sedes en Antioquia
                </div>
              </div>
            </div>
          </div>

          <div className="reveal rounded-[20px] border border-[#E4F1F6] bg-white p-7 shadow-xl">
            <h2 className="mb-1 font-[family-name:var(--font-playfair)] text-xl font-bold text-[#080F14]">
              Inscríbete ahora
            </h2>
            <p className="mb-5 font-[family-name:var(--font-dm-sans)] text-xs text-[#6B7280]">
              Déjanos tus datos y te contactamos en minutos.
            </p>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
