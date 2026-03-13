import { GraduationCap, Users, Award } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "5.000+",
    label: "Egresados",
  },
  {
    icon: Users,
    value: "6",
    label: "Sedes",
  },
  {
    icon: Award,
    value: "5",
    label: "Programas Técnicos",
  },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="py-16 text-white lg:py-24"
      style={{
        background: "linear-gradient(135deg, #080F14 55%, #312783 100%)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="mb-3 font-[family-name:var(--font-dm-sans)] text-[0.73rem] font-bold uppercase tracking-widest text-[#FFD166]">
            Sobre Nosotros
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold !text-white">
            Una institución para ti
          </h2>
          <p className="mt-5 font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-white/75">
            Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas ® es
            una institución de educación para el trabajo y el desarrollo humano,
            comprometida con la formación integral de técnicos laborales
            competentes, éticos y con vocación de servicio. Nuestra misión es
            transformar vidas a través de la educación accesible y de calidad en
            Antioquia.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto h-8 w-8 text-white/60" />
              <div className="mt-3 font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold text-[#FFD166]">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
