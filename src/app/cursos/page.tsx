import Link from "next/link";
import { shortCourses } from "@/data/shortCourses";

const order = [
  "inyectologia",
  "rcp",
  "primeros-auxilios",
  "codigo-fucsia",
  "peluqueria-estetica-canina",
] as const;

export default function CursosPage() {
  return (
    <main className="bg-[#F8FBFD]">
      <section className="bg-[#0E1B4D] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4C95D]">
            Educación Continua INDECAP
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold md:text-5xl">
            Cursos y diplomados para avanzar más rápido
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
            Formación intensiva, práctica y certificada para fortalecer tu perfil,
            actualizar tus conocimientos o abrir nuevas oportunidades.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {order.map((slug) => {
            const course = shortCourses[slug];
            return (
              <article
                key={slug}
                className="rounded-3xl border border-[#E5EDF5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1A5CA8]">
                  {course.modalidad}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14]">
                  {course.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                  {course.subtitle}
                </p>

                <div className="mt-5 space-y-2 text-sm text-[#374151]">
                  <p><span className="font-semibold">Duración:</span> {course.duracion}</p>
                  <p><span className="font-semibold">Horario:</span> {course.horario}</p>
                  <p><span className="font-semibold">Certificación:</span> {course.certificacion}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`/cursos/${course.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-[#0E1B4D] px-5 py-3 text-sm font-bold text-[#0E1B4D] transition hover:bg-[#0E1B4D] hover:text-white"
                  >
                    Ver curso
                  </Link>
                  <a
                    href={`https://wa.me/573008948517?text=${encodeURIComponent(course.ctaMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white"
                  >
                    Solicitar información
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
