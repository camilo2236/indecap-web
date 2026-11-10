import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/educacion-continua",
  title: "Cursos cortos y diplomados certificados · Educación continua",
  description:
    "Cursos de RCP, inyectología, primeros auxilios, vacunación, toma de muestras, Excel y Word con 20 horas certificadas, y el diplomado en Peluquería Canina. INDECAP Medellín, Envigado y Caldas.",
});

export default function EducacionContinuaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
