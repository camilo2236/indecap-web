import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section id="programas" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Programas Técnicos Laborales
          </h2>
          <p className="mt-3 text-muted-foreground">
            Programas avalados por la Secretaría de Educación con enfoque
            práctico y alta empleabilidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 text-3xl">{program.icon}</div>
                <CardTitle className="text-lg">{program.name}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
