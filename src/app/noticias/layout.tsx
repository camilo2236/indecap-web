import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/noticias",
  esSeccion: true,
  title: "Noticias · Graduaciones, prácticas y vida estudiantil",
  description:
    "Graduaciones, prácticas en clínicas, reconocimientos y novedades de los estudiantes y egresados de INDECAP en Medellín, Envigado y Caldas.",
});

export default function NoticiasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
