"use client";

import { buttonVariants } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Modalidad semi escolarizada",
  "Horarios flexibles para adultos",
  "Válido ante el Ministerio de Educación",
  "Ciclos académicos acelerados",
  "Acompañamiento personalizado",
  "Título de Bachiller Académico",
];

export function Bachillerato() {
  return (
    <section id="bachillerato" className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Bachillerato Semi Escolarizado
            </h2>
            <p className="mt-4 text-muted-foreground">
              Termina tu bachillerato con horarios flexibles diseñados para
              adultos que trabajan. Obtén tu título de Bachiller Académico
              avalado por el Ministerio de Educación Nacional.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#inicio" className={buttonVariants({ size: "lg", className: "mt-8" })}>
              Más información
            </a>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-primary/10 p-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary">11°</div>
              <p className="mt-2 text-lg font-medium text-foreground">
                Completa tu bachillerato
              </p>
              <p className="text-muted-foreground">en ciclos acelerados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
