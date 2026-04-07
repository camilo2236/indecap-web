import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
  { protocol: "https", hostname: "indecap.edu.co" },
  { protocol: "https", hostname: "indecap-web.vercel.app" },
  { protocol: "https", hostname: "**.vercel.app" },
  { protocol: "https", hostname: "i.ytimg.com" },
],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Evita sniffing de MIME type
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Fuerza HTTPS por 1 año
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // Controla info del referrer
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Deshabilita features innecesarias
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Cross-Origin policies
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://indecap.edu.co https://indecap-web.vercel.app https://*.vercel.app",
              "connect-src 'self' https://api.resend.com https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-src https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      // Headers especificos para las API routes
      {
        source: "/api/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        ],
      },
    ];
  },

  async redirects() {
    return [
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
      { source: "/programas-tecnicos-en-medellin", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-medellin/", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-envigado", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-envigado/", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-caldas", destination: "/contacto", permanent: true },
      { source: "/programas-tecnicos-en-caldas/", destination: "/contacto", permanent: true },
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
      { source: "/blog", destination: "/noticias", permanent: true },
      { source: "/blog/", destination: "/noticias", permanent: true },
      { source: "/convenios", destination: "/", permanent: true },
      { source: "/convenios/", destination: "/", permanent: true },
      { source: "/q10", destination: "/", permanent: true },
      { source: "/q10/", destination: "/", permanent: true },
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