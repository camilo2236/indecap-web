import type { Metadata } from "next";
import { NOINDEX } from "@/lib/seo";

export const metadata: Metadata = NOINDEX;

export default function PlataformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
