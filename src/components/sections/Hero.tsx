import { RegistrationForm } from "@/components/RegistrationForm";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-primary/5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Tu futuro profesional{" "}
              <span className="text-primary">comienza aquí</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Formación técnica laboral avalada por la Secretaría de Educación.
              Programas prácticos con alta demanda en el mercado laboral
              colombiano.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="rounded-full bg-secondary/10 px-3 py-1 font-medium text-secondary">
                +2,000 graduados
              </span>
              <span className="rounded-full bg-secondary/10 px-3 py-1 font-medium text-secondary">
                3 sedes
              </span>
              <span className="rounded-full bg-secondary/10 px-3 py-1 font-medium text-secondary">
                7 programas
              </span>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-card-foreground">
              Inscríbete ahora
            </h2>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
