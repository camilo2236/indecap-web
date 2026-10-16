import { MetadataRoute } from "next";

// Usar siempre el dominio canónico para el sitemap
const BASE_URL = "https://indecap.edu.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/login", "/plataforma", "/secretaria", "/comprobantes", "/pagos"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
