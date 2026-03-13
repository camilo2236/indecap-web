import { news } from "@/data/news";

export function News() {
  return (
    <section id="noticias" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">Actualidad INDECAP</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Noticias
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            Mantente al día con las novedades de INDECAP.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <article
              key={item.id}
              className="reveal group overflow-hidden rounded-[16px] border border-[#E4F1F6] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-[#E4F1F6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-[1.07]"
                />
              </div>
              <div className="p-5">
                <p className="font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[#F0A500]">
                  {new Date(item.date).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-base font-bold leading-snug text-[#080F14]">
                  {item.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#374151]">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
