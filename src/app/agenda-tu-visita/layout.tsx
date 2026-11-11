import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/agenda-tu-visita",
  title: "Agenda tu visita a la sede · Medellín, Envigado y Caldas",
  description:
    "Escoge sede, día y jornada para conocer los salones, laboratorios y docentes de INDECAP antes de decidir. Visita gratuita y sin compromiso en Medellín, Envigado o Caldas.",
});

export default function AgendaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
