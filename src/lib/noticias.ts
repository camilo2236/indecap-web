import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NoticiaIndecap {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  fecha: string;
  categoria: "indecap" | "educacion" | "egresados" | "convenios";
  imagen?: string;
  imagenes?: string[];
video?: string;        // ← agrega esta línea
destacada?: boolean;
}

const noticiasDir = path.join(process.cwd(), "src/content/noticias");

export function getAllNoticias(): NoticiaIndecap[] {
  if (!fs.existsSync(noticiasDir)) return [];

  const files = fs.readdirSync(noticiasDir).filter((f) => f.endsWith(".md"));

  const noticias = files.map((file) => {
    const raw = fs.readFileSync(path.join(noticiasDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      id: data.id || file.replace(".md", ""),
      titulo: data.titulo || "",
      resumen: data.resumen || "",
      contenido: content.trim(),
      fecha: data.fecha || "",
      categoria: data.categoria || "indecap",
      imagen: data.imagen || undefined,
      imagenes: data.imagenes
  ? String(data.imagenes).split(",").map((s: string) => s.trim())
  : undefined,
video: data.video || undefined,    // ← agrega esta línea
destacada: data.destacada || false,
    } as NoticiaIndecap;
  });

  return noticias.sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

export function getNoticiaById(id: string): NoticiaIndecap | null {
  const all = getAllNoticias();
  return all.find((n) => n.id === id) || null;
}
