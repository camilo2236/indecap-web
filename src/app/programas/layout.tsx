import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programas Técnicos Laborales | INDECAP",
  description: "Conoce los 17 programas técnicos laborales de INDECAP. Formación práctica avalada por la Secretaría de Educación. Sedes en Medellín, Envigado y Caldas.",
};

export default function ProgramasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
