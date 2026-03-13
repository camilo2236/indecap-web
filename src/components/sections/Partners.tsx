const partners = [
  "Secretaría de Educación",
  "Ministerio de Educación Nacional",
  "SENA",
  "Hospital Universitario",
  "Red Hospitalaria de Cundinamarca",
  "Cámara de Comercio",
];

export function Partners() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Aprendamos con los mejores
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trabajamos de la mano con instituciones líderes para garantizar la
            calidad de tu formación.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-24 items-center justify-center rounded-lg border bg-card p-4 text-center text-sm font-medium text-muted-foreground"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
