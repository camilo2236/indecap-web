import { MetadataRoute } from "next";
import { getAllNoticias } from "@/lib/noticias";

// Dominio oficial (canónico). Nunca usar el dominio de Vercel aquí.
const BASE_URL = "https://indecap.edu.co";

// Fecha de la última revisión de contenido del sitio.
// Se cambia a mano cuando se actualizan textos: si cambiara en cada
// compilación, Google dejaría de confiar en ella.
const ACTUALIZADO = new Date("2026-11-10");

// Páginas generales
const general = [
  { path: "", priority: 1.0, freq: "weekly" as const },
  { path: "/programas", priority: 0.9, freq: "weekly" as const },
  { path: "/cursos", priority: 0.8, freq: "weekly" as const },
  { path: "/educacion-continua", priority: 0.7, freq: "monthly" as const },
  { path: "/admision", priority: 0.9, freq: "weekly" as const },
  { path: "/inscripcion", priority: 0.6, freq: "monthly" as const },
  { path: "/contacto", priority: 0.8, freq: "monthly" as const },
  { path: "/noticias", priority: 0.6, freq: "weekly" as const },
  { path: "/sedes/medellin", priority: 0.8, freq: "monthly" as const },
  { path: "/sedes/envigado", priority: 0.8, freq: "monthly" as const },
  { path: "/sedes/caldas", priority: 0.8, freq: "monthly" as const },
  { path: "/estudia", priority: 0.6, freq: "monthly" as const },
  { path: "/privacy-policy", priority: 0.2, freq: "yearly" as const },
];

// Programas técnicos (rutas que existen en src/app/programas).
// Peluquería canina no va aquí: su página oficial es /cursos/peluqueria-canina.
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
  "/cursos/peluqueria-canina",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const generalRoutes: MetadataRoute.Sitemap = general.map((g) => ({
    url: `${BASE_URL}${g.path}`,
    lastModified: ACTUALIZADO,
    changeFrequency: g.freq,
    priority: g.priority,
  }));

  const programaRoutes: MetadataRoute.Sitemap = programas.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: ACTUALIZADO,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cursoRoutes: MetadataRoute.Sitemap = cursos.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: ACTUALIZADO,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Cada noticia con su propia fecha
  const noticiaRoutes: MetadataRoute.Sitemap = getAllNoticias().map((n) => {
    const fecha = new Date(n.fecha);
    return {
      url: `${BASE_URL}/noticias/${n.id}`,
      lastModified: isNaN(fecha.getTime()) ? ACTUALIZADO : fecha,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    };
  });

  return [...generalRoutes, ...programaRoutes, ...cursoRoutes, ...noticiaRoutes];
}
