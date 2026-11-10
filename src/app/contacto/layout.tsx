import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/contacto",
  title: "Contacto y sedes · Medellín, Envigado y Caldas",
  description:
    "Escríbenos por WhatsApp o visítanos: sede Medellín a una cuadra del Metro Prado, sede Envigado cerca al parque principal y sede Caldas. Teléfono (604) 448 4794. Te orientamos para elegir tu programa.",
});

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
