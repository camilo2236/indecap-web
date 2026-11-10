import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/admision",
  title: "Solicita información e inscríbete · Inscripciones 2027",
  description:
    "Cuéntanos qué programa te interesa y en qué sede: un asesor te escribe por WhatsApp con fechas, horarios y financiación. Inscripciones 2027 abiertas en Medellín, Envigado y Caldas.",
});

export default function AdmisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
