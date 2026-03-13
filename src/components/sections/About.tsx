import { GraduationCap, Users, Award } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "+2,000",
    label: "Graduados",
  },
  {
    icon: Users,
    value: "3",
    label: "Sedes",
  },
  {
    icon: Award,
    value: "7",
    label: "Programas Técnicos",
  },
];

export function About() {
  return (
    <section id="nosotros" className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Una institución para ti
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            INDECAP — Instituto de Ciencias Aplicadas es una institución de
            educación para el trabajo y el desarrollo humano, comprometida con la
            formación integral de técnicos laborales competentes, éticos y con
            vocación de servicio. Nuestra misión es transformar vidas a través de
            la educación accesible y de calidad.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto h-8 w-8 text-primary-foreground/80" />
              <div className="mt-2 text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
