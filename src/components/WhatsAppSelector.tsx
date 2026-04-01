"use client";
import React from 'react';
import { MessageCircle, X, MapPin, ArrowRight } from 'lucide-react';
<<<<<<< HEAD
import { CONTACTS, WA_MESSAGES, waUrl } from '@/config/contacts';
=======
import { CONTACTS } from '@/config/contacts';
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b

interface WhatsAppSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  programaName: string;
}

export const WhatsAppSelector = ({ isOpen, onClose, programaName }: WhatsAppSelectorProps) => {
  if (!isOpen) return null;

  const sedes = [
<<<<<<< HEAD
    {
      name: "Sede Envigado",
      number: CONTACTS.ENVIGADO,
      tag: "Atención Principal",
      highlight: true,
      href: waUrl(CONTACTS.ENVIGADO, WA_MESSAGES.selectorSede(programaName, "Sede Envigado")),
    },
    {
      name: "Sede Medellín",
      number: CONTACTS.MEDELLIN,
      tag: "Sede Centro",
      highlight: false,
      href: waUrl(CONTACTS.MEDELLIN, WA_MESSAGES.selectorSede(programaName, "Sede Medellín")),
    },
    {
      name: "Sede Caldas",
      number: CONTACTS.CALDAS,
      tag: "Sede Sur",
      highlight: false,
      href: waUrl(CONTACTS.CALDAS, WA_MESSAGES.selectorSede(programaName, "Sede Caldas")),
    },
=======
    { name: "Sede Envigado", number: CONTACTS.ENVIGADO, tag: "Atención Principal", highlight: true },
    { name: "Sede Medellín", number: CONTACTS.MEDELLIN, tag: "Sede Centro", highlight: false },
    { name: "Sede Caldas", number: CONTACTS.CALDAS, tag: "Sede Sur", highlight: false }
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="relative p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-zinc-800 text-center">
<<<<<<< HEAD
          <button
            onClick={onClose}
            aria-label="Cerrar selector de sede"
            className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full text-zinc-400"
          >
=======
          <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full text-zinc-400">
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
            <X size={20} />
          </button>
          <h3 className="text-2xl font-bold text-white">Elige tu Sede</h3>
          <p className="text-zinc-400 text-sm mt-2 px-4">
<<<<<<< HEAD
            ¿En qué sede quieres estudiar{" "}
            <span className="text-white font-medium">{programaName}</span>?
          </p>
        </div>

=======
            ¿En qué sede quieres estudiar <span className="text-white font-medium">{programaName}</span>?
          </p>
        </div>
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
        <div className="p-6 space-y-3">
          {sedes.map((sede) => (
            <a
              key={sede.name}
<<<<<<< HEAD
              href={sede.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contactar ${sede.name} por WhatsApp para información sobre ${programaName}`}
              className={`group flex items-center justify-between p-5 rounded-3xl transition-all border ${
                sede.highlight
                  ? "bg-white border-white"
                  : "bg-zinc-800/50 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${sede.highlight ? "bg-black text-white" : "bg-zinc-700 text-zinc-400"}`}>
                  <MapPin size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className={`font-bold ${sede.highlight ? "text-black" : "text-white"}`}>{sede.name}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{sede.tag}</p>
                </div>
              </div>
              <ArrowRight size={18} className={sede.highlight ? "text-black" : "text-zinc-600"} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-zinc-600">
            Te responderemos en minutos por WhatsApp
          </p>
        </div>
=======
              href={`https://wa.me/${sede.number}?text=Hola INDECAP, quiero información para matricularme en ${programaName} en la ${sede.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-5 rounded-3xl transition-all border ${
                sede.highlight ? 'bg-white border-white' : 'bg-zinc-800/50 border-zinc-700 hover:border-zinc-500'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${sede.highlight ? 'bg-black text-white' : 'bg-zinc-700 text-zinc-400'}`}>
                  <MapPin size={22} />
                </div>
                <div>
                  <p className={`font-bold ${sede.highlight ? 'text-black' : 'text-white'}`}>{sede.name}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-zinc-500">{sede.tag}</p>
                </div>
              </div>
              <ArrowRight size={18} className={sede.highlight ? 'text-black' : 'text-zinc-600'} />
            </a>
          ))}
        </div>
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      </div>
    </div>
  );
};