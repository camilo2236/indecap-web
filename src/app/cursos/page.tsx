import Link from "next/link";
import { shortCourses } from "@/data/shortCourses";

const order = [
  "rcp",
  "inyectologia",
  "vacunacion",
  "toma-muestras",
  "primeros-auxilios",
  "codigo-fucsia",
  "peluqueria-estetica-canina",
] as const;

export default function CursosPage() {
  return (
    <main className="bg-[#F6FAFC]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F0B323]">
            Educación continua INDECAP
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0E1B63] md:text-6xl">
            Cursos y diplomados
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#4B5563]">
            Explora nuestra oferta de cursos intensivos y diplomados con enfoque práctico,
            certificación y formación pensada para fortalecer tu perfil.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {order.map((slug) => {
            const course = shortCourses.find((item) => item.slug === slug);
            if (!course) return null;

            return (
              <article
                key={slug}
                className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#0E1B63]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0E1B63]">
                    {slug === "peluqueria-estetica-canina" ? "Diplomado" : "Curso"}
                  </span>
                  <span className="text-xs font-medium text-[#6B7280]">
                    {course.validity}
                  </span>
                </div>

                <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#0E1B63]">
                  {course.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#4B5563]">
                  {course.subtitle}
                </p>

                <div className="mt-5 space-y-2 text-sm text-[#374151]">
                  <p>
                    <span className="font-semibold">Duración:</span> {course.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Certificación:</span> {course.certification}
                  </p>
                  <p>
                    <span className="font-semibold">Modalidad:</span> {course.modality}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`/cursos/${course.slug}`}
                    className="rounded-full border border-[#0E1B63] px-5 py-3 text-center font-semibold text-[#0E1B63] transition hover:bg-[#0E1B63] hover:text-white"
                  >
                    Ver curso
                  </Link>

                  <a
                    href={`https://wa.me/573008948517?text=${encodeURIComponent(course.ctaMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#25D366] px-5 py-3 text-center font-semibold text-white transition hover:opacity-90"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}