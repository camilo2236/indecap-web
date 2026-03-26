import { NextRequest, NextResponse } from "next/server";
import { noticiasIndecap } from "@/data/noticiasIndecap";

const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY;

export interface NoticiaUnificada {
  id: string;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  imagen?: string;
  url?: string;
  fuente: "indecap" | "externa";
  destacada?: boolean;
}

async function traducirTexto(texto: string): Promise<string> {
  if (!texto) return texto;
  // Detectar si tiene caracteres no latinos (puede ser inglés u otro idioma)
  const esIngles = /^[a-zA-Z\s.,!?;:'"()\-–—0-9]+$/.test(texto.slice(0, 50));
  if (!esIngles) return texto;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        messages: [
          {
            role: "user",
            content: `Traduce este texto al español colombiano de forma natural y concisa. Solo responde con la traducción, sin explicaciones:\n\n${texto}`,
          },
        ],
      }),
    });
    const data = await res.json();
    return data.content?.[0]?.text || texto;
  } catch {
    return texto;
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limite = parseInt(searchParams.get("limite") || "6");
  const categoria = searchParams.get("categoria") || "todas";

  try {
    // Noticias propias de INDECAP
    const propias: NoticiaUnificada[] = noticiasIndecap.map((n) => ({
      id: n.id,
      titulo: n.titulo,
      resumen: n.resumen,
      fecha: n.fecha,
      categoria: n.categoria,
      imagen: n.imagen,
      fuente: "indecap",
      destacada: n.destacada,
    }));

    // Noticias externas de GNews
    let externas: NoticiaUnificada[] = [];

    if (NEWSDATA_API_KEY) {
      const query = "educación técnica Colombia formación laboral";
      const newsUrl = `https://newsdata.io/api/1/news?apikey=${NEWSDATA_API_KEY}&q=${encodeURIComponent(query)}&language=es&country=co,mx,ar&category=education`;

      console.log("Fetching NewsData.io...");
      const nRes = await fetch(newsUrl, { cache: "no-store" });
      console.log("NewsData status:", nRes.status);

      if (nRes.ok) {
        const nData = await nRes.json();
        console.log("NewsData articles:", nData.results?.length || 0);
        const articulos = nData.results || [];

        externas = await Promise.all(
          articulos.slice(0, 8).map(async (art: any, i: number) => {
            const titulo = await traducirTexto(art.title || "");
            const resumen = await traducirTexto(art.description || "");
            return {
              id: `externa-${i}-${Date.now()}`,
              titulo,
              resumen,
              fecha: art.pubDate?.split(" ")[0] || new Date().toISOString().split("T")[0],
              categoria: "educacion",
              imagen: art.image_url,
              url: art.link,
              fuente: "externa" as const,
            };
          })
        );
      } else {
        const errText = await nRes.text();
        console.error("NewsData error:", errText);
      }
    } else {
      console.log("No NEWSDATA_API_KEY found");
    }

    // Mezclar: primero las propias destacadas, luego externas, luego resto propias
    const destacadas = propias.filter((n) => n.destacada);
    const noDestacadas = propias.filter((n) => !n.destacada);
    const todas = [...destacadas, ...externas, ...noDestacadas];

    // Filtrar por categoría si aplica
    const filtradas = categoria === "todas"
      ? todas
      : todas.filter((n) => n.categoria === categoria || (categoria === "indecap" && n.fuente === "indecap"));

    return NextResponse.json({
      noticias: filtradas.slice(0, limite),
      total: filtradas.length,
    });
  } catch (err) {
    console.error("Error fetching news:", err);
    // Si falla GNews, devuelve solo las propias
    return NextResponse.json({
      noticias: noticiasIndecap.slice(0, limite).map((n) => ({
        id: n.id,
        titulo: n.titulo,
        resumen: n.resumen,
        fecha: n.fecha,
        categoria: n.categoria,
        imagen: n.imagen,
        fuente: "indecap",
        destacada: n.destacada,
      })),
      total: noticiasIndecap.length,
    });
  }
}