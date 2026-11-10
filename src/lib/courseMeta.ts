// src/lib/courseMeta.ts
// Metadatos de los cursos cortos y diplomados, armados con los datos de shortCourses.

import type { Metadata } from "next";
import { getShortCourseBySlug } from "@/data/shortCourses";
import { pageMeta } from "@/lib/seo";

export function courseMeta(slug: string, title: string): Metadata {
  const c = getShortCourseBySlug(slug);
  if (!c) return pageMeta({ path: `/cursos/${slug}`, title, description: title });
  const sedes = c.info.find((i) => i.label === "Sedes")?.value.replace(/ · | \/ /g, ", ");
  const description = [
    c.subtitle,
    `${c.certification} · ${c.duration} · ${c.modality}.`,
    sedes ? `Sedes: ${sedes}.` : "INDECAP Medellín, Envigado y Caldas.",
  ].join(" ");
  return pageMeta({
    path: `/cursos/${slug}`,
    title,
    description,
    image: c.image,
  });
}
