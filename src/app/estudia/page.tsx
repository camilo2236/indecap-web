import type { Metadata } from "next";
import { EstudiaLanding } from "@/components/sections/EstudiaLanding";

export const metadata: Metadata = {
  title: "Estudia GRATIS: Auxiliar en Sistemas Informáticos | ESTUD-IA",
  description:
    "Técnico Laboral en Auxiliar en Sistemas Informáticos, 100% gratis con beca de la Alcaldía de Medellín y Sapiencia. INDECAP, 40 años formando Antioquia. Cupos limitados, inscríbete.",
  openGraph: {
    title: "Estudia GRATIS: Auxiliar en Sistemas Informáticos | INDECAP",
    description:
      "Técnico Laboral gratuito con beca de la Alcaldía de Medellín y Sapiencia. Cupos limitados. Inscríbete con INDECAP.",
  },
  alternates: { canonical: "/estudia" },
};

export default function EstudiaPage() {
  return <EstudiaLanding />;
}
