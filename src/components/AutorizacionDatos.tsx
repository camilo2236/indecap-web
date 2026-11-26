"use client";

import Link from "next/link";

// Autorización de tratamiento de datos personales (Ley 1581 de 2012, Decreto 1377 de 2013).
// La casilla es obligatoria: el formulario no se envía sin ella.
type Props = {
  checked: boolean;
  onChange: (valor: boolean) => void;
  oscuro?: boolean; // texto claro para fondos oscuros
  menores?: boolean; // agrega la nota para menores de edad
};

export function AutorizacionDatos({ checked, onChange, oscuro = false, menores = false }: Props) {
  const texto = oscuro ? "text-white/50" : "text-gray-500";
  const enlace = oscuro ? "text-white/75 underline" : "text-[#312783] underline";
  return (
    <label className={`flex items-start gap-2 text-[11px] leading-snug ${texto} cursor-pointer select-none`}>
      <input
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#F0A500]"
      />
      <span>
        Autorizo a INDECAP (Instituto de Ciencias Aplicadas S.A.S., NIT 900.342.773-7) a tratar mis datos personales
        para contactarme e informarme sobre programas, cursos y el proceso de admisión, conforme a la Ley 1581 de 2012
        y a su{" "}
        <Link href="/privacy-policy" target="_blank" className={enlace}>
          Política de Tratamiento de Datos
        </Link>
        . Puedo consultar, actualizar o pedir que se eliminen mis datos escribiendo a indecap@indecap.edu.co. Tus datos
        viajan cifrados y no los vendemos.
        {menores && " Si eres menor de edad, esta autorización la debe dar tu padre, madre o acudiente."}
      </span>
    </label>
  );
}
