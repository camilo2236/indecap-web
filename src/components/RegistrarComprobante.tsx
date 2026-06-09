"use client";

import { useState } from "react";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const PROGRAMAS = [
  "Cosmetología y Estética Integral",
  "Auxiliar en Enfermería",
  "Servicios Farmacéuticos",
  "Salud Oral",
  "Veterinaria",
  "Marketing Digital",
  "Desarrollo de Software",
  "Administrativo en Salud",
  "Seguridad y Salud en el Trabajo",
  "Atención al Adulto Mayor",
  "Atención a la Primera Infancia",
  "Entrenamiento Deportivo",
  "Talento Humano",
  "Auxiliar Contable",
  "Excel / Ofimática",
  "Bachillerato para Adultos",
];

const SEDES = ["Envigado", "Medellín", "Caldas"];

const TIPOS_PAGO = [
  "Cuota inicial",
  "Cuota 1",
  "Cuota 2",
  "Cuota 3",
  "Cuota 4",
  "Cuota 5",
  "Pago total contado",
  "Uniforme",
  "Derechos de grado",
  "Certificado de estudio",
];

type Estado = "idle" | "loading" | "success" | "error";

export default function RegistrarComprobante() {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [tipoDoc, setTipoDoc] = useState("CC");
  const [telefono, setTelefono] = useState("");
  const [programa, setPrograma] = useState("");
  const [sede, setSede] = useState("");
  const [tipoPago, setTipoPago] = useState("Cuota inicial");
  const [monto, setMonto] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [notas, setNotas] = useState("");
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { setErrorMsg("Debes adjuntar el comprobante de pago"); return; }
    setEstado("loading");
    setErrorMsg("");

    const data = new FormData();
    data.append("nombre", nombre);
    data.append("documento", documento);
    data.append("tipo_doc", tipoDoc);
    data.append("telefono", telefono);
    data.append("programa", programa);
    data.append("sede", sede);
    data.append("tipo_pago", tipoPago);
    data.append("monto", monto);
    data.append("notas", notas);
    data.append("comprobante", file);

    try {
      const res = await fetch("/api/pagos/comprobante", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Error al enviar");
      setEstado("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
      setEstado("error");
    }
  };

  if (estado === "success") {
    return (
      <div className="rounded-[24px] bg-white border border-gray-100 shadow-sm p-10 text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#E1F5EE] mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-[#0F6E56]" />
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-3">
          ¡Comprobante recibido!
        </h3>
        <p className="text-[#6B7280] text-sm max-w-sm mx-auto leading-relaxed mb-2">
          Hemos recibido tu pago. Nuestro equipo lo verificará y te confirmaremos
          por WhatsApp en menos de 24 horas hábiles.
        </p>
        <p className="text-[#312783] font-semibold text-sm">
          {nombre} — {programa}
        </p>
        <a
          href="https://wa.me/573022389760"
          className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white"
        >
          💬 Escribirnos por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] bg-white border border-gray-100 shadow-sm p-10">
      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#080F14] mb-2">
        Registra tu comprobante
      </h3>
      <p className="text-[#6B7280] text-sm mb-8 max-w-md">
        ¿Pagaste por consignación o transferencia? Adjunta aquí tu comprobante
        y nuestro equipo lo verificará en menos de 24 horas.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Datos personales */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Tipo doc.
            </label>
            <select
              value={tipoDoc}
              onChange={e => setTipoDoc(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
            >
              <option>CC</option>
              <option>TI</option>
              <option>CE</option>
              <option>PA</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Número de documento *
            </label>
            <input
              required
              value={documento}
              onChange={e => setDocumento(e.target.value)}
              placeholder="1234567890"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Nombre completo *
          </label>
          <input
            required
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre y apellidos"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Celular WhatsApp *
          </label>
          <input
            required
            type="tel"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            placeholder="300 123 4567"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Programa *
            </label>
            <select
              required
              value={programa}
              onChange={e => setPrograma(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
            >
              <option value="">Selecciona un programa</option>
              {PROGRAMAS.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Sede *
            </label>
            <select
              required
              value={sede}
              onChange={e => setSede(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
            >
              <option value="">Selecciona una sede</option>
              {SEDES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Tipo de pago *
            </label>
            <select
              value={tipoPago}
              onChange={e => setTipoPago(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
            >
              {TIPOS_PAGO.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Valor pagado (COP) *
            </label>
            <input
              required
              type="number"
              value={monto}
              onChange={e => setMonto(e.target.value)}
              placeholder="500000"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]"
            />
          </div>
        </div>

        {/* Upload comprobante */}
        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Foto del comprobante *
          </label>
          <label
            htmlFor="comprobante-input"
            className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 cursor-pointer transition-colors
              ${file ? "border-[#0F6E56] bg-[#E1F5EE]" : "border-gray-200 hover:border-[#312783] bg-gray-50"}`}
          >
            {file ? (
              <>
                <CheckCircle className="h-6 w-6 text-[#0F6E56]" />
                <p className="text-sm font-semibold text-[#0F6E56]">{file.name}</p>
              </>
            ) : (
              <>
                <Upload className="h-6 w-6 text-[#9CA3AF]" />
                <p className="text-sm text-[#6B7280]">Toca para adjuntar el comprobante</p>
                <p className="text-xs text-[#9CA3AF]">JPG, PNG o PDF — máx 10MB</p>
              </>
            )}
          </label>
          <input
            id="comprobante-input"
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={e => setFile(e.target.files?.[0] ?? null)}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Observaciones
          </label>
          <textarea
            value={notas}
            onChange={e => setNotas(e.target.value)}
            placeholder="Alguna observación sobre el pago..."
            rows={2}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783] resize-none"
          />
        </div>

        {(estado === "error" || errorMsg) && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
            <p className="text-sm text-red-700">{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={estado === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#312783] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#312783]/90 disabled:opacity-60"
        >
          {estado === "loading" ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
          ) : (
            "Registrar comprobante"
          )}
        </button>

      </form>
    </div>
  );
}
