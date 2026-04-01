import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACTS } from '@/config/contacts';

export const CourseCard = ({ titulo, color, descripcion, slug }: any) => {
  // Forzamos el mensaje para que sea específico del curso
  const mensaje = `Hola INDECAP, quiero información para inscribirme en el curso de ${titulo}.`;
  
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col h-full hover:border-zinc-600 transition-all">
      <h3 className="text-xl font-bold text-white mb-2">{titulo}</h3>
      <p className="text-zinc-500 text-sm mb-6 flex-grow">{descripcion}</p>
      
      {/* AQUÍ ESTÁ EL CAMBIO: Usamos CONTACTS.CURSOS (316 740 5680) */}
      <a 
        href={`https://wa.me/${CONTACTS.CURSOS}?text=${encodeURIComponent(mensaje)}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-4 py-4 rounded-2xl font-black text-xs uppercase mb-3 hover:bg-[#20ba5a] transition-colors"
      >
        <MessageCircle size={20} /> ¡Asegurar mi cupo!
      </a>
      
      <a href={`/cursos/${slug}`} className="text-center text-zinc-600 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
        Ver detalles
      </a>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
