import { NextRequest, NextResponse } from "next/server";
import { noticiasIndecap } from "@/data/noticiasIndecap";

export interface NoticiaUnificada {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  imagen?: string;
  url?: string;
  fuente: "indecap" | "externa";
  fuenteNombre?: string;
  destacada?: boolean;
}

const RSS_FEEDS = [
  { url: "https://www.eltiempo.com/rss/vida_educacion.xml", nombre: "El Tiempo", categoria: "educacion" },
  { url: "https://www.elcolombiano.com/rss/feeds.xml", nombre: "El Colombiano", categoria: "educacion" },
  { url: "https://teleantioquia.co/noticias/feed", nombre: "Teleantioquia", categoria: "educacion" },
  { url: "https://www.mineducacion.gov.co/cvn/1665/channel-rss.xml", nombre: "Ministerio de Educación", categoria: "educacion" },
  { url: "https://www.semana.com/rss/educacion.xml", nombre: "Semana Educación", categoria: "educacion" },
  { url: "https://www.portafolio.co/rss/economia.xml", nombre: "Portafolio", categoria: "educacion" },
  { url: "https://feeds.bbci.co.uk/mundo/rss.xml", nombre: "BBC Mundo", categoria: "educacion" },
  { url: "https://es.wired.com/feed/rss", nombre: "Wired España", categoria: "educacion" },
];

const KEYWORDS_EDUCACION = [
  "educaci", "estudi", "aprendi", "escuel", "colegio", "universidad",
  "técnic", "formaci", "sena", "icfes", "becas", "docente", "laboral",
  "carrera", "programa", "instituto", "capacitaci", "egresad", "cursos",
];

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?<\\/${tag}>`, "si");
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

function extractEnclosure(xml: string): string | undefined {
  const match = xml.match(/<enclosure[^>]+url="([^"]+)"/i);
  return match ? match[1] : undefined;
}

function extractMediaThumbnail(xml: string): string | undefined {
  const match = xml.match(/<media:thumbnail[^>]+url="([^"]+)"/i);
  if (match) return match[1];
  const match2 = xml.match(/<media:content[^>]+url="([^"]+)"/i);
  return match2 ? match2[1] : undefined;
}

function cleanText(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .trim();
}

function parseRSS(xml: string, fuente: typeof RSS_FEEDS[0], maxItems = 5): NoticiaUnificada[] {
  const items: NoticiaUnificada[] = [];
  try {
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    const matches = [...xml.matchAll(itemRegex)];
    let count = 0;

    for (const match of matches) {
      if (count >= maxItems) break;
      const item = match[1];
      const titulo = extractTag(item, "title");
      const link = extractTag(item, "link") || extractTag(item, "guid");
      const descripcion = extractTag(item, "description");
      const pubDate = extractTag(item, "pubDate") || extractTag(item, "dc:date");
      const imagen = extractEnclosure(item) || extractMediaThumbnail(item);

      if (!titulo) continue;

      if (fuente.nombre !== "Ministerio de Educación") {
        const texto = `${titulo} ${descripcion}`.toLowerCase();
        const esEducacion = KEYWORDS_EDUCACION.some((kw) => texto.includes(kw));
        if (!esEducacion) continue;
      }

      let fecha = new Date().toISOString().split("T")[0];
      if (pubDate) {
        try { fecha = new Date(pubDate).toISOString().split("T")[0]; } catch {}
      }

      items.push({
        id: `rss-${fuente.nombre.replace(/\s/g, "-")}-${count}`,
        titulo: cleanText(titulo).slice(0, 120),
        resumen: cleanText(descripcion).slice(0, 250),
        fecha,
        categoria: fuente.categoria,
        imagen,
        url: link?.trim(),
        fuente: "externa",
        fuenteNombre: fuente.nombre,
      });
      count++;
    }
  } catch (e) {
    console.error(`Parse error ${fuente.nombre}:`, e);
  }
  return items;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // ── Límite máximo — previene abuso ───────────────────────────────────────────
  const limiteRaw = parseInt(searchParams.get("limite") || "6");
  const limite = Math.min(Math.max(1, limiteRaw), 24); // entre 1 y 24

  const categoria = searchParams.get("categoria") || "todas";

  // Noticias propias
  const propias: NoticiaUnificada[] = noticiasIndecap.map((n) => ({
    id: n.id, titulo: n.titulo, resumen: n.resumen,
    fecha: n.fecha, categoria: n.categoria, imagen: n.imagen,
    fuente: "indecap", fuenteNombre: "INDECAP", destacada: n.destacada,
  }));

  // Noticias RSS
  const rssFetches = RSS_FEEDS.map(async (feed) => {
    try {
      const res = await fetch(feed.url, {
        next: { revalidate: 1800 },
        headers: { "User-Agent": "Mozilla/5.0 (compatible; INDECAPBot/1.0)" },
        signal: AbortSignal.timeout(6000),
      });
      if (!res.ok) { console.log(`RSS ${feed.nombre}: ${res.status}`); return []; }
      const xml = await res.text();
      const parsed = parseRSS(xml, feed, 5);
      console.log(`RSS ${feed.nombre}: ${parsed.length} noticias`);
      return parsed;
    } catch {
      console.log(`RSS ${feed.nombre}: falló`);
      return [];
    }
  });

  const results = await Promise.allSettled(rssFetches);
  const externas: NoticiaUnificada[] = results
    .filter((r): r is PromiseFulfilledResult<NoticiaUnificada[]> => r.status === "fulfilled")
    .flatMap((r) => r.value);

  const destacadas = propias.filter((n) => n.destacada);
  const noDestacadas = propias.filter((n) => !n.destacada);
  let todas = [...destacadas, ...externas, ...noDestacadas];

  const urlsSeen = new Set<string>();
  todas = todas.filter((n) => {
    if (!n.url) return true;
    if (urlsSeen.has(n.url)) return false;
    urlsSeen.add(n.url);
    return true;
  });

  const filtradas = categoria === "todas"
    ? todas
    : todas.filter((n) => n.categoria === categoria || (categoria === "indecap" && n.fuente === "indecap"));

  return NextResponse.json({
    noticias: filtradas.slice(0, limite),
    total: filtradas.length,
  });
}