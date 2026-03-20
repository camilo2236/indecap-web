import React from 'react';
import { MessageCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { CONTACTS } from '@/config/contacts';

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
      <div className="absolute -inset-px opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" style={{ backgroundColor: color }} />
      
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border" style={{ color: color, borderColor: `${color}44`, backgroundColor: `${color}11` }}>
            {categoria}
          </span>
          <div className="bg-zinc-800 p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Award size={18} className="text-zinc-400" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{titulo}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-6 flex-grow">{descripcion}</p>

        {/* Botón WhatsApp Persuasivo */}
        <a 
          href={`https://wa.me/${CONTACTS.CURSOS}?text=Hola INDECAP, quiero asegurar mi cupo para el curso de ${titulo}.`}
          target="_blank"
          className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-4 rounded-2xl transition-all duration-300 group/wa shadow-lg shadow-green-950/20 mb-3"
        >
          <div className="relative">
            <MessageCircle size={20} className="group-hover/wa:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          </div>
          <span className="font-black text-xs uppercase tracking-widest">¡Inscribirme ahora!</span>
        </a>

        <a href={`/cursos/${slug}`} className="flex items-center justify-center gap-2 text-zinc-500 hover:text-white text-xs font-bold transition-colors py-2">
          Ver detalles del curso
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};