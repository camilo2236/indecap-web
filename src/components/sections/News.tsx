"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

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

const categoriaLabel: Record<string, string> = {
  indecap: "INDECAP",
  educacion: "Educación",
  egresados: "Egresados",
  convenios: "Convenios",
};

const categoriaColor: Record<string, string> = {
  indecap: "#312783",
  educacion: "#0F6E56",
  egresados: "#F0A500",
  convenios: "#1A3A6B",
};

function formatFecha(fecha: string) {
  return new Date(fecha).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function News() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/noticias?limite=3")
      .then((r) => r.json())
      .then((data) => {
        setNoticias(data.noticias || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="noticias" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#312783]">
              Actualidad
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,3vw,3rem)] font-black text-[#080F14]">
              Noticias de{" "}
              <em className="italic text-[#312783]">educación</em>
            </h2>
          </div>
          <a
            href="/noticias"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#312783] hover:underline underline-offset-4"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-[20px] bg-gray-100 animate-pulse h-72" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia) => (
              <article
                key={noticia.id}
                className="group rounded-[20px] border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                {/* Imagen */}
                <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#312783]/10 to-[#312783]/20">
                  {noticia.imagen ? (
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-5xl">📰</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${categoriaColor[noticia.categoria] || "#312783"}18`,
                        color: categoriaColor[noticia.categoria] || "#312783",
                      }}
                    >
                      {categoriaLabel[noticia.categoria] || noticia.categoria}
                    </span>
                    {noticia.fuente === "externa" && (
                      <span className="text-xs text-gray-400">Externo</span>
                    )}
                  </div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-black text-[#080F14] mb-2 line-clamp-2 group-hover:text-[#312783] transition-colors">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2 mb-4">
                    {noticia.resumen}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF]">
                      {formatFecha(noticia.fecha)}
                    </span>
                    {noticia.url ? (
                      <a
                        href={noticia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#312783] hover:underline"
                      >
                        Leer más <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <a
                        href={`/noticias/${noticia.id}`}
                        className="flex items-center gap-1 text-xs font-semibold text-[#312783] hover:underline"
                      >
                        Leer más <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <a
            href="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#312783] hover:underline underline-offset-4"
          >
            Ver todas las noticias <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
