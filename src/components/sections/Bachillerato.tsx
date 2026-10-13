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
    <section id="bachillerato" className="bg-[#E4F1F6] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal">
            <div className="section-label mb-3">Educación para Adultos</div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,2.6vw,2.5rem)] font-bold text-[#080F14]">
              Bachillerato Semi Escolarizado
            </h2>
            <p className="mt-4 font-[family-name:var(--font-dm-sans)] font-light leading-relaxed text-[#374151]">
              Termina tu bachillerato con horarios flexibles diseñados para
              adultos que trabajan. Obtén tu título de Bachiller Académico
              avalado por el Ministerio de Educación Nacional. Disponible
              en nuestra Sede Caldas.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#2A7A4B]" />
                  <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#080F14]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#F0A500]/10 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#92400E]">
              &#x1F4CD; Disponible en Sede Caldas — Calle 130 sur # 51-65
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+573022389760&text=Hola%20INDECAP%20estoy%20interesado%20en%20el%20Bachillerato%20Semi%20Escolarizado%2C%20mi%20nombre%20es%20"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                className:
                  "mt-6 rounded-full bg-[#312783] px-8 py-3 font-[family-name:var(--font-dm-sans)] font-semibold text-white hover:bg-[#312783]/90",
              })}
            >
              Más información
            </a>
          </div>

          <div className="reveal overflow-hidden rounded-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bachillerato/bachillerato.png"
              alt="Bachillerato Semi Escolarizado INDECAP"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
