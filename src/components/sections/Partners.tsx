const partners = [
  "Secretaría de Educación",
  "Ministerio de Educación Nacional",
  "Red Hospitalaria de Antioquia",
  "Cámara de Comercio de Medellín",
  "Clínicas y Consultorios Aliados",
  "Laboratorios Farmacéuticos",
];

export function Partners() {
  return (
    <section className="bg-[#E4F1F6] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Aliados Estratégicos</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Aprendamos con los mejores
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Trabajamos de la mano con instituciones líderes para garantizar la
            calidad de tu formación.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-24 items-center justify-center rounded-[14px] border border-[#E4F1F6] bg-white p-5 text-center font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#374151] transition-shadow hover:shadow-md"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
