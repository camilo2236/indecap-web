"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, ChevronLeft, Loader2, User, Users, GraduationCap, CreditCard } from "lucide-react";
import type { Metadata } from "next";

const programasTecnicos = [
  "Auxiliar en Enfermería",
  "Cosmetología y Estética Integral",
  "Auxiliar en Veterinaria",
  "Auxiliar Administrativo en Salud",
  "Auxiliar en Farmacia",
  "Auxiliar en Salud Oral",
  "Salud Pública",
  "Atención al Adulto Mayor",
  "Talento Humano",
  "Contabilidad y Finanzas",
  "Mercadeo y Ventas",
  "SST - Seguridad y Salud en el Trabajo",
  "Entrenamiento Deportivo",
  "Sistemas e Informática",
  "Excel + IA",
  "Peluquería Canina",
];

const cursos = [
  "RCP — Reanimación Cardiopulmonar",
  "Inyectología",
  "Vacunación",
  "Toma de Muestras de Laboratorio Clínico",
  "Primeros Auxilios",
  "Código Fucsia",
  "Diplomado en Peluquería y Estética Canina",
  "Excel Básico, Intermedio y Avanzado",
  "Word Básico y Avanzado",
];

const sedes = ["Medellín", "Envigado", "Caldas"];

const horarios = [
  "Lunes a viernes — Mañana (7:00 a.m. – 12:00 m.)",
  "Lunes a viernes — Tarde (1:00 p.m. – 6:00 p.m.)",
  "Lunes a viernes — Noche (6:00 p.m. – 10:00 p.m.)",
  "Sábados (8:00 a.m. – 5:00 p.m.)",
];

const comoSeEnteroOpciones = [
  "Estudiante o egresado INDECAP",
  "Volante",
  "Periódico",
  "Radio",
  "Carro valla",
  "Colegio",
  "Feria o evento",
  "Internet / Redes sociales",
  "Otro",
];

const gradosBachillerato = [
  "6°", "7°", "8°", "9°", "10°", "11° (Bachiller)",
  "Bachiller graduado", "Técnico o tecnólogo", "Universitario",
];

type Estado = "idle" | "loading" | "success" | "error";

const inputClass = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#312783] focus:outline-none focus:ring-2 focus:ring-[#312783]/20 transition-all";
const selectClass = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-[#312783] focus:outline-none focus:ring-2 focus:ring-[#312783]/20 transition-all appearance-none";
const labelClass = "block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide";

const pasos = [
  { icon: User, label: "Aspirante" },
  { icon: Users, label: "Familia" },
  { icon: GraduationCap, label: "Académico" },
  { icon: CreditCard, label: "Confirmación" },
];

export default function AdmisionPage() {
  const [paso, setPaso] = useState(0);
  const [estado, setEstado] = useState<Estado>("idle");
  const [tipoBeca, setTipoBeca] = useState<"tecnico" | "curso">("tecnico");

  const [form, setForm] = useState({
    // Paso 1
    nombres: "", apellidos: "", cedula: "", fechaNacimiento: "",
    direccion: "", barrio: "", municipio: "", telefono: "", celular: "", correo: "",
    // Paso 2
    nombreMadre: "", telefonoMadre: "", ocupacionMadre: "",
    nombrePadre: "", telefonoPadre: "", ocupacionPadre: "",
    nombreAcudiente: "", telefonoAcudiente: "", ocupacionAcudiente: "",
    // Paso 3
    programa: "", sede: "", horario: "", ultimoGrado: "", comoSeEntero: "",
  });

  const set = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = async () => {
    setEstado("loading");
    try {
      const res = await fetch("/api/admision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, esCurso: tipoBeca === "curso" }),
      });
      if (res.ok) {
        setEstado("success");
        setPaso(3);
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const esCurso = tipoBeca === "curso";

  return (
    <main className="min-h-screen bg-[#F3F8FA]">

      {/* HERO */}
      <section className="bg-[#080F14] pt-32 pb-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] font-black text-white mb-3">
            Solicitud de Admisión
          </h1>
          <p className="text-white/60 text-base max-w-lg mx-auto font-[family-name:var(--font-dm-sans)] font-light">
            Completa el formulario en 3 pasos. Recibirás confirmación en tu correo.
          </p>

          {/* Toggle tipo */}
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
            <button
              onClick={() => setTipoBeca("tecnico")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${tipoBeca === "tecnico" ? "bg-[#312783] text-white shadow" : "text-white/60 hover:text-white"}`}
            >
              Programa Técnico
            </button>
            <button
              onClick={() => setTipoBeca("curso")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${tipoBeca === "curso" ? "bg-[#312783] text-white shadow" : "text-white/60 hover:text-white"}`}
            >
              Curso / Diplomado
            </button>
          </div>
        </div>
      </section>

      {/* STEPPER */}
      <div className="sticky top-16 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center py-4 gap-2 overflow-x-auto">
            {pasos.map((p, i) => {
              const Icon = p.icon;
              const activo = i === paso;
              const completado = i < paso || estado === "success";
              return (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${activo ? "bg-[#312783] text-white" : completado ? "bg-[#E8E6F8] text-[#312783]" : "bg-gray-100 text-gray-400"}`}>
                    {completado && i < paso ? <CheckCircle className="h-3.5 w-3.5" /> : <Icon className="h-3.5 w-3.5" />}
                    {p.label}
                  </div>
                  {i < pasos.length - 1 && <ChevronRight className="h-4 w-4 text-gray-300 shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FORMULARIO */}
      <div className="container mx-auto px-6 lg:px-12 py-12 max-w-3xl">

        {/* PASO 1 — Aspirante */}
        {paso === 0 && (
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-8">
              Identificación del Aspirante
            </h2>
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Nombres *</label>
                  <input type="text" value={form.nombres} onChange={e => set("nombres", e.target.value)} placeholder="Ej: María Camila" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Apellidos *</label>
                  <input type="text" value={form.apellidos} onChange={e => set("apellidos", e.target.value)} placeholder="Ej: García López" className={inputClass} required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Cédula o TI *</label>
                  <input type="text" value={form.cedula} onChange={e => set("cedula", e.target.value)} placeholder="Número de documento" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Fecha de nacimiento</label>
                  <input type="date" value={form.fechaNacimiento} onChange={e => set("fechaNacimiento", e.target.value)} className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Dirección</label>
                  <input type="text" value={form.direccion} onChange={e => set("direccion", e.target.value)} placeholder="Calle, Carrera, etc." className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Barrio</label>
                  <input type="text" value={form.barrio} onChange={e => set("barrio", e.target.value)} placeholder="Ej: El Poblado" className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Municipio</label>
                  <input type="text" value={form.municipio} onChange={e => set("municipio", e.target.value)} placeholder="Ej: Medellín" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Teléfono fijo</label>
                  <input type="tel" value={form.telefono} onChange={e => set("telefono", e.target.value)} placeholder="Ej: 604 448 4794" className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Celular *</label>
                  <input type="tel" value={form.celular} onChange={e => set("celular", e.target.value)} placeholder="Ej: 300 999 8514" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Correo electrónico</label>
                  <input type="email" value={form.correo} onChange={e => set("correo", e.target.value)} placeholder="correo@ejemplo.com" className={inputClass} />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => { if (form.nombres && form.apellidos && form.cedula && form.celular) setPaso(1); }}
                disabled={!form.nombres || !form.apellidos || !form.cedula || !form.celular}
                className="flex items-center gap-2 rounded-full bg-[#312783] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#312783]/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Siguiente <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 2 — Familia */}
        {paso === 1 && (
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-2">
              Identificación Familiar
            </h2>
            <p className="text-sm text-gray-500 mb-8">Todos los campos son opcionales.</p>
            <div className="grid gap-6">
              {[
                { label: "Madre", nameField: "nombreMadre", telField: "telefonoMadre", ocuField: "ocupacionMadre" },
                { label: "Padre", nameField: "nombrePadre", telField: "telefonoPadre", ocuField: "ocupacionPadre" },
                { label: "Acudiente", nameField: "nombreAcudiente", telField: "telefonoAcudiente", ocuField: "ocupacionAcudiente" },
              ].map((familiar) => (
                <div key={familiar.label} className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#312783] mb-4">{familiar.label}</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className={labelClass}>Nombre completo</label>
                      <input type="text" value={(form as any)[familiar.nameField]} onChange={e => set(familiar.nameField, e.target.value)} placeholder="Nombre" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Ocupación</label>
                      <input type="text" value={(form as any)[familiar.ocuField]} onChange={e => set(familiar.ocuField, e.target.value)} placeholder="Ej: Comerciante" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Teléfono</label>
                      <input type="tel" value={(form as any)[familiar.telField]} onChange={e => set(familiar.telField, e.target.value)} placeholder="Número" className={inputClass} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={() => setPaso(0)} className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
                <ChevronLeft className="h-4 w-4" /> Atrás
              </button>
              <button onClick={() => setPaso(2)} className="flex items-center gap-2 rounded-full bg-[#312783] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#312783]/90 transition-all">
                Siguiente <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* PASO 3 — Académico */}
        {paso === 2 && (
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-8">
              Información Académica
            </h2>
            <div className="grid gap-5">
              <div>
                <label className={labelClass}>Programa al que aspira *</label>
                <select value={form.programa} onChange={e => set("programa", e.target.value)} className={selectClass} required>
                  <option value="" disabled>Selecciona un programa</option>
                  <optgroup label="Programas Técnicos">
                    {programasTecnicos.map(p => <option key={p} value={p}>{p}</option>)}
                  </optgroup>
                  <optgroup label="Cursos y Diplomados">
                    {cursos.map(c => <option key={c} value={c}>{c}</option>)}
                  </optgroup>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Sede *</label>
                  <select value={form.sede} onChange={e => set("sede", e.target.value)} className={selectClass} required>
                    <option value="" disabled>Selecciona una sede</option>
                    {sedes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Horario preferido</label>
                  <select value={form.horario} onChange={e => set("horario", e.target.value)} className={selectClass}>
                    <option value="" disabled>Selecciona un horario</option>
                    {horarios.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Último grado de bachillerato aprobado</label>
                <select value={form.ultimoGrado} onChange={e => set("ultimoGrado", e.target.value)} className={selectClass}>
                  <option value="" disabled>Selecciona el grado</option>
                  {gradosBachillerato.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>¿Cómo se enteró de INDECAP?</label>
                <select value={form.comoSeEntero} onChange={e => set("comoSeEntero", e.target.value)} className={selectClass}>
                  <option value="" disabled>Selecciona una opción</option>
                  {comoSeEnteroOpciones.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {estado === "error" && (
              <p className="mt-4 text-red-500 text-sm text-center">Hubo un error. Por favor intenta de nuevo.</p>
            )}

            <div className="mt-8 flex justify-between">
              <button onClick={() => setPaso(1)} className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
                <ChevronLeft className="h-4 w-4" /> Atrás
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.programa || !form.sede || estado === "loading"}
                className="flex items-center gap-2 rounded-full bg-[#F0A500] px-8 py-3.5 text-sm font-black text-[#080F14] hover:bg-[#FFD166] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {estado === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
                ) : (
                  <><CheckCircle className="h-4 w-4" /> Enviar solicitud</>
                )}
              </button>
            </div>
          </div>
        )}

        {/* PASO 4 — Confirmación */}
        {paso === 3 && estado === "success" && (
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8 text-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#E8F5E9] mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-[#0F6E56]" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#080F14] mb-3">
              ¡Solicitud enviada!
            </h2>
            <p className="text-gray-500 text-base mb-2">
              <strong className="text-[#080F14]">{form.nombres} {form.apellidos}</strong>
            </p>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Hemos recibido tu solicitud para <strong>{form.programa}</strong> en la sede <strong>{form.sede}</strong>.
              {form.correo && " Te enviamos una confirmación a tu correo."}
            </p>

            {!esCurso && (
              <div className="rounded-2xl border-2 border-[#F0A500] bg-[#FEF9E7] p-6 mb-8 max-w-sm mx-auto">
                <p className="text-sm font-bold text-[#92400E] mb-4">
                  💳 Pago de matrícula: $50.000 COP
                </p>
                <img
                  src="/images/qr-davivienda.png"
                  alt="QR Davivienda INDECAP"
                  className="w-48 h-48 mx-auto rounded-xl mb-4 object-contain"
                />
                <p className="text-xs text-[#92400E] leading-relaxed">
                  Escanea el QR con cualquier app bancaria o billetera digital. También puedes pagar en{" "}
                  <a href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00003179&origen=buscar"
                    target="_blank" rel="noopener noreferrer" className="font-bold underline">
                    Aval Pay
                  </a>.
                </p>
              </div>
            )}

            {esCurso && (
              <div className="rounded-2xl border border-[#0F6E56] bg-[#E1F2EE] p-5 mb-8 max-w-sm mx-auto">
                <p className="text-sm font-semibold text-[#0F6E56]">
                  ✅ Este curso no tiene costo de matrícula
                </p>
              </div>
            )}

            <p className="text-sm text-gray-500 mb-6">
              Un asesor INDECAP te contactará pronto al{" "}
              <strong>{form.celular}</strong> para confirmar tu cupo.
            </p>

            <a
              href={`https://wa.me/573022389760?text=${encodeURIComponent(`Hola INDECAP, soy ${form.nombres} ${form.apellidos} y acabo de enviar mi solicitud de admisión para ${form.programa} en la sede ${form.sede}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white hover:opacity-90 transition-all"
            >
              💬 Confirmar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
