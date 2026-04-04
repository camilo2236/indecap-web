import { GraduationCap, MapPin, Award, CalendarDays } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "35.000+", label: "Egresados" },
  { icon: CalendarDays, value: "40", label: "Años de experiencia" },
  { icon: MapPin, value: "6", label: "Sedes en Antioquia" },
  { icon: Award, value: "16", label: "Programas técnicos" },
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
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal">
            <div className="mb-3 font-[family-name:var(--font-dm-sans)] text-[0.73rem] font-bold uppercase tracking-widest text-[#FFD166]">
              Sobre Nosotros
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold !text-white">
              Una institución que transforma vidas desde 1986
            </h2>
            <p className="mt-5 font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-white/70">
              Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas es
              una institución de educación para el trabajo y el desarrollo humano,
              comprometida con la formación integral de técnicos laborales
              competentes, éticos y con vocación de servicio.
            </p>
            <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-base font-light leading-relaxed text-white/70">
              Nuestra misión es transformar vidas a través de la educación accesible
              y de calidad en Antioquia. Contamos con sedes en Medellín, Envigado,
              Caldas, Segovia, Amalfi y Betulia.
            </p>
            <div className="mt-6 rounded-[12px] border-l-[3px] border-[#F0A500] bg-white/5 px-5 py-4">
              <p className="font-[family-name:var(--font-dm-sans)] text-sm italic text-white/80">
                &ldquo;Calidad Educativa Certificada — Formación real, no simulación.
                Cuando llegues al trabajo, ya sabes.&rdquo;
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[16px] border border-white/8 bg-white/5 p-7 text-center transition-all duration-300 hover:bg-white/8"
              >
                <stat.icon className="mx-auto h-7 w-7 text-white/50" />
                <div className="mt-3 font-[family-name:var(--font-playfair)] text-[2.2rem] font-bold leading-none text-[#FFD166]">
                  {stat.value}
                </div>
                <div className="mt-2 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

