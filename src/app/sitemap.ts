import { MetadataRoute } from "next";

const BASE_URL = "https://indecap-web.vercel.app";

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
  "/programas/excel-ia",
  "/programas/peluqueria-canina",
];

const cursos = [
  "/cursos/rcp",
  "/cursos/inyectologia",
  "/cursos/primeros-auxilios",
  "/cursos/codigo-fucsia",
  "/cursos/vacunacion",
  "/cursos/toma-muestras",
  "/cursos/peluqueria-estetica-canina",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/#programas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#cursos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const programaRoutes: MetadataRoute.Sitemap = programas.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cursoRoutes: MetadataRoute.Sitemap = cursos.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...programaRoutes, ...cursoRoutes];
}
