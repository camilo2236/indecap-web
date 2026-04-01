"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import type { Metadata } from "next";

interface Noticia {
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

const categorias = [
  { value: "todas", label: "Todas" },
  { value: "indecap", label: "INDECAP" },
  { value: "educacion", label: "Educación" },
  { value: "egresados", label: "Egresados" },
  { value: "convenios", label: "Convenios" },
];

const categoriaColor: Record<string, string> = {
  indecap: "#312783",
  educacion: "#0F6E56",
  egresados: "#F0A500",
  convenios: "#1A3A6B",
};

function formatFecha(fecha: string) {
  return new Date(fecha).toLocaleDateString("es-CO", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function NoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriaActiva, setCategoriaActiva] = useState("todas");

  useEffect(() => {
    setLoading(true);
    fetch(`/api/noticias?limite=20&categoria=${categoriaActiva}`)
      .then((r) => r.json())
      .then((data) => {
        setNoticias(data.noticias || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [categoriaActiva]);

  const destacadas = noticias.filter((n) => n.destacada);
  const resto = noticias.filter((n) => !n.destacada);

  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      {/* HERO */}
      <section className="bg-[#080F14] pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
              ✦ Actualidad educativa
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,4vw,3.5rem)] font-black text-white mb-4">
              Noticias de{" "}
              <em className="italic text-[#FFD166]">Educación</em>
            </h1>
            <p className="text-white/60 text-lg font-[family-name:var(--font-dm-sans)] font-light">
              Mantente al día con las últimas noticias de INDECAP y del mundo de la educación técnica.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <div className="sticky top-20 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            <Filter className="h-4 w-4 text-gray-400 shrink-0" />
            {categorias.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategoriaActiva(cat.value)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  categoriaActiva === cat.value
                    ? "bg-[#312783] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="rounded-[20px] bg-gray-100 animate-pulse h-72" />
              ))}
            </div>
          ) : (
            <>
              {/* Destacadas */}
              {destacadas.length > 0 && (
                <div className="mb-12">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#080F14] mb-6">
                    Destacadas
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {destacadas.map((noticia) => (
                      <article key={noticia.id} className="group rounded-[20px] border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all">
                        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#312783]/10 to-[#312783]/20">
                          {noticia.imagen ? (
                            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-5xl">📰</div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${categoriaColor[noticia.categoria] || "#312783"}18`, color: categoriaColor[noticia.categoria] || "#312783" }}>
                              {noticia.categoria}
                            </span>
                            <span className="text-xs font-bold text-[#F0A500]">⭐ Destacada</span>
                          </div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-[#080F14] mb-2 group-hover:text-[#312783] transition-colors">
                            {noticia.titulo}
                          </h3>
                          <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{noticia.resumen}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[#9CA3AF]">{formatFecha(noticia.fecha)}</span>
                            <a href={noticia.url || `/noticias/${noticia.id}`} target={noticia.url ? "_blank" : undefined} rel={noticia.url ? "noopener noreferrer" : undefined} className="flex items-center gap-1 text-sm font-semibold text-[#312783] hover:underline">
                              Leer más {noticia.url ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Resto */}
              {resto.length > 0 && (
                <div>
                  {destacadas.length > 0 && (
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-[#080F14] mb-6">
                      Más noticias
                    </h2>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resto.map((noticia) => (
                      <article key={noticia.id} className="group rounded-[20px] border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all">
                        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#312783]/10 to-[#312783]/20">
                          {noticia.imagen ? (
                            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-5xl">📰</div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${categoriaColor[noticia.categoria] || "#312783"}18`, color: categoriaColor[noticia.categoria] || "#312783" }}>
                              {noticia.categoria}
                            </span>
                            {noticia.fuente === "externa" && <span className="text-xs text-gray-400">Externo</span>}
                          </div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#080F14] mb-2 line-clamp-2 group-hover:text-[#312783] transition-colors">
                            {noticia.titulo}
                          </h3>
                          <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2 mb-4">{noticia.resumen}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[#9CA3AF]">{formatFecha(noticia.fecha)}</span>
                            <a href={noticia.url || `/noticias/${noticia.id}`} target={noticia.url ? "_blank" : undefined} rel={noticia.url ? "noopener noreferrer" : undefined} className="flex items-center gap-1 text-xs font-semibold text-[#312783] hover:underline">
                              Leer más {noticia.url ? <ExternalLink className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {noticias.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                  <p className="text-lg">No hay noticias disponibles en este momento.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
