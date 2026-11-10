import { MetadataRoute } from "next";

// Usar siempre el dominio canónico para el sitemap
const BASE_URL = "https://indecap.edu.co";

// Zonas privadas que Google no necesita leer.
// /login, /pagos y /comprobantes ya NO se bloquean aquí: llevan la orden "noindex"
// en la página, y Google necesita poder leerla para sacarlas de los resultados.
const DISALLOW = ["/api/", "/admin", "/plataforma", "/secretaria", "/academia", "/profesores", "/estudiantes"];

// Buscadores y asistentes de IA permitidos explícitamente, con las mismas reglas
const BOTS_IA = [
  "Googlebot",
  "Google-Extended", // Gemini
  "Bingbot", // también alimenta Copilot y ChatGPT Search
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: BOTS_IA, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
