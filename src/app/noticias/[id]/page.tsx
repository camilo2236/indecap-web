import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getAllNoticias, getNoticiaById } from "@/lib/noticias";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const noticia = getNoticiaById(id);
  if (!noticia) return { title: "Noticia no encontrada | INDECAP" };
  return {
    title: `${noticia.titulo} | INDECAP`,
    description: noticia.resumen,
    openGraph: {
      title: noticia.titulo,
      description: noticia.resumen,
      images: noticia.imagen ? [{ url: noticia.imagen }] : [],
    },
  };
}

export async function generateStaticParams() {
  const noticias = getAllNoticias();
  return noticias.map((n) => ({ id: n.id }));
}

const categoriaColor: Record<string, { bg: string; text: string; label: string }> = {
  indecap:   { bg: "#312783", text: "#fff", label: "INDECAP" },
  educacion: { bg: "#0F6E56", text: "#fff", label: "Educacion" },
  egresados: { bg: "#F0A500", text: "#281800", label: "Egresados" },
  convenios: { bg: "#1A3A6B", text: "#fff", label: "Convenios" },
};

function formatFecha(fecha: string) {
  return new Date(fecha).toLocaleDateString("es-CO", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default async function NoticiaPage({ params }: Props) {
  const { id } = await params;
  const noticia = getNoticiaById(id);
  if (!noticia) notFound();

  const cat = categoriaColor[noticia.categoria] || categoriaColor.indecap;
  const parrafos = noticia.contenido.split("\n\n").filter(Boolean);
  const otras = getAllNoticias().filter((n) => n.id !== noticia.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      <section className="bg-[#080F14] pt-32 pb-0">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Volver a noticias
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ backgroundColor: cat.bg, color: cat.text }}>
              {cat.label}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <Calendar className="h-3.5 w-3.5" />
              {formatFecha(noticia.fecha)}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white leading-tight mb-6">
            {noticia.titulo}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed pb-10 max-w-2xl">
            {noticia.resumen}
          </p>
        </div>
      </section>

      {noticia.imagen && (
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="rounded-[20px] overflow-hidden shadow-xl aspect-[16/9] relative">
            <Image src={noticia.imagen} alt={noticia.titulo} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 900px" />
          </div>
        </div>
      )}

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2">
              <div className="space-y-6">
                {parrafos.map((p, i) => (
                  <p key={i} className="text-[#374151] leading-relaxed text-lg">{p}</p>
                ))}
              </div>
              {noticia.imagenes && noticia.imagenes.length > 1 && (
                <div className="mt-12">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#080F14] mb-6">Galeria de fotos</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {noticia.imagenes.slice(1).map((img, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden aspect-[16/9] relative">
                        <Image src={img} alt={`${noticia.titulo} - foto ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 400px" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <aside className="space-y-6">
              <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#080F14] mb-4">Informacion</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <Calendar className="h-4 w-4 text-[#312783] shrink-0" />
                    <span>{formatFecha(noticia.fecha)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <Tag className="h-4 w-4 text-[#312783] shrink-0" />
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: `${cat.bg}18`, color: cat.bg }}>
                      {cat.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#312783] rounded-[20px] p-6 text-white">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black mb-2">Quieres ser parte de INDECAP?</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">Inscripciones abiertas para el 2026. Cupos limitados.</p>
                <Link href="/admision" className="block text-center bg-[#FFD166] text-[#281800] font-black text-sm py-3 rounded-full hover:scale-105 transition-transform">
                  Solicitar informacion
                </Link>
              </div>

              {otras.length > 0 && (
                <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#080F14] mb-4">Otras noticias</h3>
                  <div className="space-y-4">
                    {otras.map((n) => (
                      <Link key={n.id} href={`/noticias/${n.id}`} className="block group">
                        <p className="text-sm font-semibold text-[#374151] group-hover:text-[#312783] transition-colors leading-snug">{n.titulo}</p>
                        <p className="text-xs text-[#9CA3AF] mt-1">{formatFecha(n.fecha)}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
              Tu futuro empieza <em className="italic">aqui</em>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">40 anos formando tecnicos laborales en Antioquia. Inscripciones abiertas.</p>
            <Link href="/admision" className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black text-base hover:scale-105 transition-transform shadow-xl bg-[#ffb21d] text-[#281800]">
              Formulario de admision
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
