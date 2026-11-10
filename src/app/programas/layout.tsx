import type { Metadata } from "next";

import { pageMeta } from "@/lib/seo";

// Aplica a /programas. Cada programa define su propio título y su dirección oficial.
export const metadata: Metadata = pageMeta({
  path: "/programas",
  esSeccion: true,
  title: "16 programas técnicos laborales · Medellín, Envigado y Caldas",
  description:
    "Conoce los 16 programas técnicos laborales de INDECAP: enfermería, cosmetología, salud oral, veterinaria, farmacia, mercadeo digital y más. Formación práctica con registro de la Secretaría de Educación. Inscripciones 2027.",
});

export default function ProgramasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
