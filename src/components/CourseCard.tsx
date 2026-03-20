import React from 'react';
import { MessageCircle, Clock, Award, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  titulo: string;
  duracion: string;
  categoria: string;
  color: string;
  descripcion: string;
  slug: string;
}

export const CourseCard = ({ titulo, duracion, categoria, color, descripcion, slug }: CourseCardProps) => {
  return (
    <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300">
      {/* Glow Effect on Hover */}
      <div 
        className="absolute -inset-px opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      />
      
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span 
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
            style={{ color: color, borderColor: `${color}44`, backgroundColor: `${color}11` }}
          >
            {categoria}
          </span>
          <div className="bg-zinc-800 p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Award size={18} className="text-zinc-400" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">
          {titulo}
        </h3>
        
        <p className="text-zinc-400 text-sm line-clamp-2 mb-6 flex-grow">
          {descripcion}
        </p>

        <div className="flex items-center gap-4 mb-6 text-zinc-500 text-xs">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{duracion}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award size={14} />
            <span>Certificado</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a 
            href={`/cursos/${slug}`}
            className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-medium text-sm transition-colors"
          >
            Ver más
            <ArrowRight size={16} />
          </a>
          <a 
            href={`https://wa.me/573022389760?text=Hola INDECAP, quiero información sobre el curso de ${titulo}`}
            target="_blank"
            className="bg-green-600 hover:bg-green-500 text-white p-3 rounded-xl transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};