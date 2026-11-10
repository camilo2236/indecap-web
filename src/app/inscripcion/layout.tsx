import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/inscripcion",
  title: "Solicitud de admisión · Inscripciones 2027",
  description:
    "Completa tu solicitud de admisión a INDECAP en 3 pasos y recibe la confirmación en tu correo. Programas técnicos laborales en Medellín, Envigado y Caldas.",
});

export default function InscripcionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
