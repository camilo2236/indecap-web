import { MetadataRoute } from "next";

// Dominio oficial (canónico). Nunca usar el dominio de Vercel aquí.
const BASE_URL = "https://indecap.edu.co";

// Páginas generales
const general = [
  { path: "", priority: 1.0, freq: "weekly" as const },
  { path: "/programas", priority: 0.9, freq: "weekly" as const },
  { path: "/cursos", priority: 0.8, freq: "weekly" as const },
  { path: "/educacion-continua", priority: 0.7, freq: "monthly" as const },
  { path: "/admision", priority: 0.9, freq: "weekly" as const },
  { path: "/contacto", priority: 0.8, freq: "monthly" as const },
  { path: "/noticias", priority: 0.6, freq: "weekly" as const },
  { path: "/sedes/medellin", priority: 0.8, freq: "monthly" as const },
  { path: "/sedes/envigado", priority: 0.8, freq: "monthly" as const },
  { path: "/sedes/caldas", priority: 0.8, freq: "monthly" as const },
];

// Programas técnicos (rutas que existen en src/app/programas)
const programas = [
  "/programas/enfermeria",
  "/programas/cosmetologia",
  "/programas/veterinaria",
  "/programas/administrativo-salud",
  "/programas/farmacia",
  "/programas/salud-oral",
  "/programas/salud-publica",
  "/programas/adulto-mayor",
  "/programas/talento-humano",
  "/programas/contable",
  "/programas/mercadeo",
  "/programas/sst",
  "/programas/entrenamiento-deportivo",
  "/programas/sistemas",
  "/programas/software",
  "/programas/excel-ia",
  "/programas/primera-infancia",
  "/programas/peluqueria-canina",
];

// Cursos (rutas que existen en src/app/cursos)
const cursos = [
  "/cursos/rcp",
  "/cursos/inyectologia",
  "/cursos/primeros-auxilios",
  "/cursos/codigo-fucsia",
  "/cursos/vacunacion",
  "/cursos/toma-muestras",
  "/cursos/excel",
  "/cursos/word",
  "/cursos/calidad-humanizacion",
  "/cursos/peluqueria-estetica-canina",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const generalRoutes: MetadataRoute.Sitemap = general.map((g) => ({
    url: `${BASE_URL}${g.path}`,
    lastModified: ahora,
    changeFrequency: g.freq,
    priority: g.priority,
  }));

  const programaRoutes: MetadataRoute.Sitemap = programas.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cursoRoutes: MetadataRoute.Sitemap = cursos.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...generalRoutes, ...programaRoutes, ...cursoRoutes];
}
