import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";

// Página de trámite o privada: no debe salir en Google
export const metadata: Metadata = NOINDEX;

export default function PagosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
