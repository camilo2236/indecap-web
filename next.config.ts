import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Activar optimización — Next.js convierte a WebP automáticamente
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      // Permitir imágenes externas de RSS de noticias
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      // ── PROGRAMAS TÉCNICOS ─────────────────────────────────────
      { source: "/programas-tecnicos", destination: "/programas", permanent: true },
      { source: "/programas-tecnicos/", destination: "/programas", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-enfermeria", destination: "/programas/enfermeria", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-enfermeria/", destination: "/programas/enfermeria", permanent: true },
      { source: "/programas-tecnicos/auxiliar-administrativo-en-salud", destination: "/programas/administrativo-salud", permanent: true },
      { source: "/programas-tecnicos/auxiliar-administrativo-en-salud/", destination: "/programas/administrativo-salud", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-veterinaria", destination: "/programas/veterinaria", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-veterinaria/", destination: "/programas/veterinaria", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-salud-oral", destination: "/programas/salud-oral", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-salud-oral/", destination: "/programas/salud-oral", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-servicios-farmaceuticos", destination: "/programas/farmacia", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-servicios-farmaceuticos/", destination: "/programas/farmacia", permanent: true },
      { source: "/programas-tecnicos/cosmetologia-y-estetica-integral", destination: "/programas/cosmetologia", permanent: true },
      { source: "/programas-tecnicos/cosmetologia-y-estetica-integral/", destination: "/programas/cosmetologia", permanent: true },
      // ── PROGRAMAS POR SEDE ─────────────────────────────────────
      { source: "/programas-tecnicos-en-medellin", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-medellin/", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-envigado", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-envigado/", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-caldas", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-caldas/", destination: "/contacto", permanent: true },
      // ── CURSOS Y DIPLOMADOS ────────────────────────────────────
      { source: "/cursos-y-diplomados", destination: "/educacion-continua", permanent: true },
      { source: "/cursos-y-diplomados/", destination: "/educacion-continua", permanent: true },
      { source: "/cursos-y-diplomados/soporte-vital-basico-rcp", destination: "/cursos/rcp", permanent: true },
      { source: "/cursos-y-diplomados/soporte-vital-basico-rcp/", destination: "/cursos/rcp", permanent: true },
      { source: "/cursos-y-diplomados/inyectologia", destination: "/cursos/inyectologia", permanent: true },
      { source: "/cursos-y-diplomados/inyectologia/", destination: "/cursos/inyectologia", permanent: true },
      { source: "/cursos-y-diplomados/excel-basico-y-avanzado", destination: "/cursos/excel", permanent: true },
      { source: "/cursos-y-diplomados/excel-basico-y-avanzado/", destination: "/cursos/excel", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-teoria-de-toma-de-muestra-en-laboratorio-clinico", destination: "/cursos/toma-muestras", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-teoria-de-toma-de-muestra-en-laboratorio-clinico/", destination: "/cursos/toma-muestras", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-de-vacunacion", destination: "/cursos/vacunacion", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-de-vacunacion/", destination: "/cursos/vacunacion", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-atencion-integral-a-la-victima-de-la-violencia-sexual-codigo-fucsia", destination: "/cursos/codigo-fucsia", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-atencion-integral-a-la-victima-de-la-violencia-sexual-codigo-fucsia/", destination: "/cursos/codigo-fucsia", permanent: true },
      // ── SEDES ─────────────────────────────────────────────────
      { source: "/contactenos", destination: "/contacto", permanent: true },
      { source: "/contactenos/", destination: "/contacto", permanent: true },
      { source: "/sedes", destination: "/contacto", permanent: true },
      { source: "/sedes/", destination: "/contacto", permanent: true },
      { source: "/medellin", destination: "/sedes/medellin", permanent: true },
      { source: "/medellin/", destination: "/sedes/medellin", permanent: true },
      { source: "/envigado", destination: "/sedes/envigado", permanent: true },
      { source: "/envigado/", destination: "/sedes/envigado", permanent: true },
      { source: "/caldas", destination: "/sedes/caldas", permanent: true },
      { source: "/caldas/", destination: "/sedes/caldas", permanent: true },
      // ── /sedes/ciudad/ — páginas propias, sin redirect ────────
      // ── OTRAS PÁGINAS ──────────────────────────────────────────
      { source: "/blog", destination: "/noticias", permanent: true },
      { source: "/blog/", destination: "/noticias", permanent: true },
      { source: "/convenios", destination: "/", permanent: true },
      { source: "/convenios/", destination: "/", permanent: true },
      { source: "/q10", destination: "/", permanent: true },
      { source: "/q10/", destination: "/", permanent: true },
      { source: "/privacy-policy", destination: "/", permanent: true },
      { source: "/privacy-policy/", destination: "/", permanent: true },
      { source: "/quienes-somos", destination: "/", permanent: true },
      { source: "/quienes-somos/", destination: "/", permanent: true },
      { source: "/enfermeria-indecap", destination: "/programas/enfermeria", permanent: true },
      { source: "/enfermeria-indecap/", destination: "/programas/enfermeria", permanent: true },
      { source: "/programas-tecnicos/bachillerato-para-adultos", destination: "/bachillerato", permanent: true },
      { source: "/programas-tecnicos/bachillerato-para-adultos/", destination: "/bachillerato", permanent: true },
      { source: "/formulario", destination: "/admision", permanent: true },
      { source: "/formulario/", destination: "/admision", permanent: true },
    ];
  },
};

export default nextConfig;