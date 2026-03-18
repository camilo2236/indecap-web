import { GraduationCap, Award, Briefcase, Users } from "lucide-react";

const differentiators = [
  {
    icon: GraduationCap,
    title: "Práctica desde el día 1",
    description:
      "Nuestros estudiantes trabajan con equipos reales, pacientes reales y escenarios laborales auténticos desde el primer semestre.",
    color: "#1A5CA8",
  },
  {
    icon: Award,
    title: "Avalados oficialmente",
    description:
      "Todos nuestros programas cuentan con resolución de la Secretaría de Educación. Tu título tiene validez nacional.",
    color: "#312783",
  },
  {
    icon: Briefcase,
    title: "Convenios reales",
    description:
      "Alianzas con hospitales, clínicas, farmacias y empresas de Antioquia donde nuestros estudiantes hacen prácticas formativas.",
    color: "#0E7C7B",
  },
  {
    icon: Users,
    title: "25.000+ egresados",
    description:
      "40 años formando técnicos que hoy trabajan en el sector salud, belleza, veterinaria y administración en todo Antioquia.",
    color: "#F0A500",
  },
];

export function Partners() {
  return (
    <section className="bg-[#E4F1F6] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="section-label mb-3">¿Por qué INDECAP?</div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
            Lo que nos hace diferentes
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] font-light text-[#6B7280]">
            40 años perfeccionando un modelo educativo que realmente funciona.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group rounded-[16px] border border-white bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[14px] text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${item.color}cc, ${item.color})` }}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-base font-bold text-[#080F14]">
                {item.title}
              </h3>
              <p className="mt-2 font-[family-name:var(--font-dm-sans)] text-sm font-light leading-relaxed text-[#6B7280]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
