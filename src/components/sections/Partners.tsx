const partners = [
  { name: "Teresa de Calcuta", image: "/images/partners/partner-1.png" },
  { name: "Canalizar", image: "/images/partners/partner-2.png" },
  { name: "Gabriel García Márquez", image: "/images/partners/partner-3.png" },
  { name: "San Agustín", image: "/images/partners/partner-4.png" },
  { name: "Bill Gates", image: "/images/partners/partner-5.png" },
  { name: "Buda", image: "/images/partners/partner-6.png" },
];

export function Partners() {
  return (
    <section className="bg-[#E4F1F6] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Inspiración</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Aprendamos con los mejores
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Grandes pensadores y líderes que inspiran nuestra labor educativa.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center overflow-hidden rounded-[14px] border border-[#E4F1F6] bg-white p-4 transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.image}
                alt={partner.name}
                className="h-20 w-20 rounded-full object-cover"
              />
              <span className="mt-3 text-center font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#374151]">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
