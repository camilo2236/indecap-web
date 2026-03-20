import React from 'react';
import { MessageCircle, X, MapPin, ArrowRight } from 'lucide-react';
import { CONTACTS } from '@/config/contacts';

interface WhatsAppSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  programaName: string;
}

export const WhatsAppSelector = ({ isOpen, onClose, programaName }: WhatsAppSelectorProps) => {
  if (!isOpen) return null;

  const sedes = [
    { name: "Sede Envigado", number: CONTACTS.ENVIGADO, tag: "Atención Principal", highlight: true },
    { name: "Sede Medellín", number: CONTACTS.MEDELLIN, tag: "Sede Centro", highlight: false },
    { name: "Sede Caldas", number: CONTACTS.CALDAS, tag: "Sede Sur", highlight: false }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-800 text-center">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors text-zinc-400">
            <X size={20} />
          </button>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-500/10 rounded-3xl">
              <MessageCircle className="text-green-500" size={32} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">Elige tu Sede</h3>
          <p className="text-zinc-400 text-sm mt-2 px-4">
            Para información sobre <span className="text-white font-medium">{programaName}</span>, selecciona la sede donde deseas estudiar:
          </p>
        </div>
        <div className="p-6 space-y-3">
          {sedes.map((sede) => (
            <a
              key={sede.name}
              href={`https://wa.me/${sede.number}?text=Hola INDECAP, quiero información para matricularme en ${programaName} en la ${sede.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-5 rounded-3xl transition-all duration-300 border ${
                sede.highlight ? 'bg-white border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)]' : 'bg-zinc-800/50 border-zinc-700 hover:border-zinc-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${sede.highlight ? 'bg-black text-white' : 'bg-zinc-700 text-zinc-400'}`}>
                  <MapPin size={22} />
                </div>
                <div>
                  <p className={`font-bold text-base ${sede.highlight ? 'text-black' : 'text-white'}`}>{sede.name}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{sede.tag}</p>
                </div>
              </div>
              <ArrowRight size={18} className={sede.highlight ? 'text-black' : 'text-zinc-600 group-hover:translate-x-1 transition-transform'} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};