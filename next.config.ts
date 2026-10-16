import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "indecap.edu.co" },
      { protocol: "https", hostname: "indecap-web.vercel.app" },
      { protocol: "https", hostname: "**.vercel.app" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "www.facebook.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "unsafe-none" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",

              // Eliminado cdn.tailwindcss.com: Tailwind debe compilarse en build
              // unsafe-inline necesario para GTM/Meta Pixel (trade-off aceptado)
              // unsafe-eval solo necesario si alguna librería lo requiere; revisar si se puede eliminar
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://fonts.googleapis.com https://connect.facebook.net https://www.facebook.com",

              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",

              "img-src 'self' data: blob: https://indecap.edu.co https://indecap-web.vercel.app https://*.vercel.app https://www.facebook.com https://i.ytimg.com",

              // Eliminados api.anthropic.com y generativelanguage.googleapis.com
              // Esas APIs NUNCA deben llamarse desde el frontend, solo desde /api/...
              // La URL de Supabase es pública por diseño: el riesgo real está en RLS
              "connect-src 'self' https://api.resend.com https://www.google-analytics.com https://vitals.vercel-insights.com https://cjjkdeqbntplofgzfgma.supabase.co https://www.facebook.com https://www.googletagmanager.com",

              "frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
          // Rate limiting hint para Vercel Edge
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },

  // Next.js usa 308 cuando permanent es true. Google trata 308 igual que 301.
  // Regla: las específicas van primero; los comodines van al final.
  // Todos los destinos de esta lista existen en src/app (verificado).
  async redirects() {
    return [
      // ── Dominio antiguo de Vercel: todo se envía al dominio oficial ──
      {
        source: "/:path*",
        has: [{ type: "host", value: "indecap-web.vercel.app" }],
        destination: "https://indecap.edu.co/:path*",
        permanent: true,
      },

      // ── Programas ──
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
      { source: "/programas-tecnicos/atencion-a-la-primera-infancia", destination: "/programas/primera-infancia", permanent: true },
      { source: "/programas-tecnicos/atencion-a-la-primera-infancia/", destination: "/programas/primera-infancia", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-salud-publica", destination: "/programas/salud-publica", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-salud-publica/", destination: "/programas/salud-publica", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-desarrollo-de-software", destination: "/programas/software", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-desarrollo-de-software/", destination: "/programas/software", permanent: true },
      { source: "/programas-tecnicos/auxiliar-contable", destination: "/programas/contable", permanent: true },
      { source: "/programas-tecnicos/auxiliar-contable/", destination: "/programas/contable", permanent: true },
      { source: "/programas-tecnicos/seguridad-y-salud-en-el-trabajo", destination: "/programas/sst", permanent: true },
      { source: "/programas-tecnicos/seguridad-y-salud-en-el-trabajo/", destination: "/programas/sst", permanent: true },
      { source: "/programas-tecnicos/entrenamiento-deportivo-2", destination: "/programas/entrenamiento-deportivo", permanent: true },
      { source: "/programas-tecnicos/entrenamiento-deportivo-2/", destination: "/programas/entrenamiento-deportivo", permanent: true },
      { source: "/programas-tecnicos/atencion-integral-al-adulto-mayor-2", destination: "/programas/adulto-mayor", permanent: true },
      { source: "/programas-tecnicos/atencion-integral-al-adulto-mayor-2/", destination: "/programas/adulto-mayor", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-mercadeo", destination: "/programas/mercadeo", permanent: true },
      { source: "/programas-tecnicos/auxiliar-en-mercadeo/", destination: "/programas/mercadeo", permanent: true },
      { source: "/programas-tecnicos/auxiliar-sistemas", destination: "/programas/sistemas", permanent: true },
      { source: "/programas-tecnicos/auxiliar-sistemas/", destination: "/programas/sistemas", permanent: true },
      { source: "/programas-tecnicos/asistente-en-talento-humano-2", destination: "/programas/talento-humano", permanent: true },
      { source: "/programas-tecnicos/asistente-en-talento-humano-2/", destination: "/programas/talento-humano", permanent: true },
      // Bachillerato no tiene página en src/app: va a la lista de programas
      { source: "/programas-tecnicos/bachillerato-para-adultos", destination: "/programas", permanent: true },
      { source: "/programas-tecnicos/bachillerato-para-adultos/", destination: "/programas", permanent: true },
      { source: "/tecnico-cosmetologia-y-estetica-integral", destination: "/programas/cosmetologia", permanent: true },
      { source: "/tecnico-cosmetologia-y-estetica-integral/", destination: "/programas/cosmetologia", permanent: true },
      { source: "/pagina-principal/veterinaria", destination: "/programas/veterinaria", permanent: true },
      { source: "/pagina-principal/veterinaria/", destination: "/programas/veterinaria", permanent: true },
      { source: "/pagina-principal/salud-publica", destination: "/programas/salud-publica", permanent: true },
      { source: "/pagina-principal/salud-publica/", destination: "/programas/salud-publica", permanent: true },
      { source: "/mejores-programas-tecnicos", destination: "/programas", permanent: true },
      { source: "/mejores-programas-tecnicos/", destination: "/programas", permanent: true },
      { source: "/enfermeria-indecap", destination: "/programas/enfermeria", permanent: true },
      { source: "/enfermeria-indecap/", destination: "/programas/enfermeria", permanent: true },

      // ── Sedes y contacto ──
      { source: "/programas-tecnicos-en-medellin", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-medellin/", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-envigado", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-envigado/", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-caldas", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-caldas/", destination: "/contacto", permanent: true },
      { source: "/contactenos", destination: "/contacto", permanent: true },
      { source: "/contactenos/", destination: "/contacto", permanent: true },
      { source: "/contactenos.html", destination: "/contacto", permanent: true },
      { source: "/sedes", destination: "/contacto", permanent: true },
      { source: "/sedes/", destination: "/contacto", permanent: true },
      { source: "/medellin", destination: "/sedes/medellin", permanent: true },
      { source: "/medellin/", destination: "/sedes/medellin", permanent: true },
      { source: "/envigado", destination: "/sedes/envigado", permanent: true },
      { source: "/envigado/", destination: "/sedes/envigado", permanent: true },
      { source: "/caldas", destination: "/sedes/caldas", permanent: true },
      { source: "/caldas/", destination: "/sedes/caldas", permanent: true },

      // ── Cursos ──
      { source: "/cursos-y-diplomados", destination: "/educacion-continua", permanent: true },
      { source: "/cursos-y-diplomados/", destination: "/educacion-continua", permanent: true },
      { source: "/cursos-y-diplomados/soporte-vital-basico-rcp", destination: "/cursos/rcp", permanent: true },
      { source: "/cursos-y-diplomados/soporte-vital-basico-rcp/", destination: "/cursos/rcp", permanent: true },
      { source: "/cursos-y-diplomados/inyectologia", destination: "/cursos/inyectologia", permanent: true },
      { source: "/cursos-y-diplomados/inyectologia/", destination: "/cursos/inyectologia", permanent: true },
      { source: "/cursos-y-diplomados/excel-basico-y-avanzado", destination: "/cursos/excel", permanent: true },
      { source: "/cursos-y-diplomados/excel-basico-y-avanzado/", destination: "/cursos/excel", permanent: true },
      { source: "/cursos-y-diplomados/word-basico-y-avanzado", destination: "/cursos/word", permanent: true },
      { source: "/cursos-y-diplomados/word-basico-y-avanzado/", destination: "/cursos/word", permanent: true },
      { source: "/cursos-y-diplomados/primeros-auxilios", destination: "/cursos/primeros-auxilios", permanent: true },
      { source: "/cursos-y-diplomados/primeros-auxilios/", destination: "/cursos/primeros-auxilios", permanent: true },
      { source: "/cursos-y-diplomados/peluqueria-y-estetica-canina", destination: "/cursos/peluqueria-estetica-canina", permanent: true },
      { source: "/cursos-y-diplomados/peluqueria-y-estetica-canina/", destination: "/cursos/peluqueria-estetica-canina", permanent: true },
      { source: "/cursos-y-diplomados/calidad-en-los-servicios", destination: "/cursos/calidad-humanizacion", permanent: true },
      { source: "/cursos-y-diplomados/calidad-en-los-servicios/", destination: "/cursos/calidad-humanizacion", permanent: true },
      { source: "/cursos-y-diplomados/humanizacion-en-los-servicios", destination: "/cursos/calidad-humanizacion", permanent: true },
      { source: "/cursos-y-diplomados/humanizacion-en-los-servicios/", destination: "/cursos/calidad-humanizacion", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-teoria-de-toma-de-muestra-en-laboratorio-clinico", destination: "/cursos/toma-muestras", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-teoria-de-toma-de-muestra-en-laboratorio-clinico/", destination: "/cursos/toma-muestras", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-de-vacunacion", destination: "/cursos/vacunacion", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-de-vacunacion/", destination: "/cursos/vacunacion", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-atencion-integral-a-la-victima-de-la-violencia-sexual-codigo-fucsia", destination: "/cursos/codigo-fucsia", permanent: true },
      { source: "/cursos-y-diplomados/diplomado-atencion-integral-a-la-victima-de-la-violencia-sexual-codigo-fucsia/", destination: "/cursos/codigo-fucsia", permanent: true },

      // ── Otras páginas ──
      { source: "/formulario", destination: "/admision", permanent: true },
      { source: "/formulario/", destination: "/admision", permanent: true },
      { source: "/matriculas-abiertas.html", destination: "/admision", permanent: true },
      { source: "/convenios", destination: "/", permanent: true },
      { source: "/convenios/", destination: "/", permanent: true },
      { source: "/q10", destination: "/", permanent: true },
      { source: "/q10/", destination: "/", permanent: true },
      { source: "/quienes-somos", destination: "/", permanent: true },
      { source: "/quienes-somos/", destination: "/", permanent: true },

      // ── Comodines (al final: solo atrapan lo que no cayó en una regla específica) ──
      // Blog con fecha: /2019/09/05/inscripciones-abiertas/ , /2024/..., /2026/...
      { source: "/:ano(20\\d{2})/:resto*", destination: "/noticias", permanent: true },
      { source: "/blog/:resto*", destination: "/noticias", permanent: true },
      { source: "/category/:resto*", destination: "/noticias", permanent: true },
      { source: "/author/:resto*", destination: "/noticias", permanent: true },
      { source: "/programas-tecnicos/:resto*", destination: "/programas", permanent: true },
      { source: "/pagina-principal/:resto*", destination: "/programas", permanent: true },
      { source: "/cursos-y-diplomados/:resto*", destination: "/educacion-continua", permanent: true },
    ];
  },
};

export default nextConfig;
