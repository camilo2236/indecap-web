"use client";

import { useState, useRef } from "react";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const PROGRAMAS = [
  "Auxiliar en Enfermería",
  "Cosmetología y Estética Integral",
  "Servicios Farmacéuticos",
  "Auxiliar en Salud Oral",
  "Auxiliar en Veterinaria",
  "Administrativo en Salud",
  "Atención al Adulto Mayor",
  "Atención a la Primera Infancia",
  "Auxiliar en Salud Pública",
  "Técnico en Marketing Digital",
  "Auxiliar en Desarrollo de Software",
  "Entrenamiento Deportivo",
  "Talento Humano",
  "Auxiliar Contable",
  "Seguridad y Salud en el Trabajo",
  "Excel / Ofimática",
  "Bachillerato para Adultos",
];

const SEDES = ["Envigado", "Medellín", "Caldas"];

const TIPOS_PAGO = [
  "Cuota inicial",
  "Cuota 1", "Cuota 2", "Cuota 3", "Cuota 4", "Cuota 5",
  "Pago total contado",
  "Uniforme",
  "Derechos de grado",
  "Certificado de estudio",
];

const BANCOS_MEDIOS = [
  // Consignaciones bancarias
  "Davivienda — Cuenta de Ahorros #036370192084",
  "Banco AV Villas — Cuenta Corriente #477007363",
  "Bancolombia — Cuenta de Ahorros ",
  // Pagos digitales / QR Davivienda
  "Davivienda — QR (Terminal 000 · #914238646)",
  // Otros métodos
  "PSE",
  "Datáfono",
  "Cesantías",
  "Fondo Nacional del Ahorro",
  "Efecty",
  "Otro",
];

const MONTOS_RAPIDOS: Record<string, number[]> = {
  "Cuota inicial":      [500000],
  "Cuota 1":            [463200, 314700, 209100, 239900, 237480],
  "Cuota 2":            [463200, 314700, 209100, 239900, 237480],
  "Cuota 3":            [463200, 314700, 209100, 239900, 237480],
  "Cuota 4":            [463200, 314700, 209100, 239900, 237480],
  "Cuota 5":            [463200, 314700, 209100, 239900, 237480],
  "Pago total contado": [2560000, 1885000, 1405000, 1543500, 1534000],
  "Uniforme":           [149000],
};

const CICLOS_POR_PROGRAMA: Record<string, number> = {
  "Auxiliar en Enfermería":          3,
  "Cosmetología y Estética Integral": 2,
  "Servicios Farmacéuticos":          3,
  "Auxiliar en Salud Oral":           3,
  "Auxiliar en Veterinaria":          2,
  "Administrativo en Salud":          3,
  "Auxiliar en Salud Pública":        3,
  "Atención al Adulto Mayor":         3,
  "Atención a la Primera Infancia":   3,
  "Técnico en Marketing Digital":     3,
  "Auxiliar en Desarrollo de Software": 3,
  "Entrenamiento Deportivo":          2,
  "Talento Humano":                   3,
  "Auxiliar Contable":                3,
};

const formatCOP = (val: string) => {
  const n = val.replace(/\D/g, "");
  if (!n) return "";
  return parseInt(n).toLocaleString("es-CO");
};

const parseMonto = (val: string) =>
  parseInt(val.replace(/\./g, "").replace(/,/g, "")) || 0;

const montoAlerta = (m: number): string | null => {
  if (m > 0 && m < 10000)  return "⚠️ El valor parece muy bajo. ¿Olvidaste algunos ceros?";
  if (m > 6000000)          return "⚠️ El valor parece muy alto. ¿Pusiste demasiados ceros?";
  return null;
};

type Estado = "idle" | "loading" | "success" | "error";

export default function RegistrarComprobante() {
  const [nombre,        setNombre]        = useState("");
  const [documento,     setDocumento]     = useState("");
  const [tipoDoc,       setTipoDoc]       = useState("CC");
  const [telefono,      setTelefono]      = useState("");
  const [correo,        setCorreo]        = useState("");
  const [ciclo,         setCiclo]         = useState("");
  const [programa,      setPrograma]      = useState("");
  const [sede,          setSede]          = useState("");
  const [tipoPago,      setTipoPago]      = useState("Cuota inicial");
  const [banco,         setBanco]         = useState("");
  const [fechaPago,     setFechaPago]     = useState("");
  const [montoStr,      setMontoStr]      = useState("");
  const [file,          setFile]          = useState<File | null>(null);
  const [preview,       setPreview]       = useState<string | null>(null);
  const [notas,         setNotas]         = useState("");
  const [estado,        setEstado]        = useState<Estado>("idle");
  const [errorMsg,      setErrorMsg]      = useState("");
  const fileInputRef                      = useRef<HTMLInputElement>(null);

  const montoNum      = parseMonto(montoStr);
  const totalCiclos   = programa ? (CICLOS_POR_PROGRAMA[programa] ?? 0) : 0;
  const alerta        = montoAlerta(montoNum);
  const montosRapidos = MONTOS_RAPIDOS[tipoPago] || [];

  const handleFile = (f: File | null) => {
    if (!f) return;
    setFile(f);
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = e => setPreview(e.target?.result as string);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file)         { setErrorMsg("Debes adjuntar el comprobante de pago"); return; }
    if (montoNum <= 0) { setErrorMsg("Por favor ingresa el valor del pago"); return; }
    if (alerta)        { setErrorMsg(alerta); return; }
    if (!banco)        { setErrorMsg("Selecciona el banco o medio de pago"); return; }
    if (!fechaPago)    { setErrorMsg("Ingresa la fecha del comprobante"); return; }

    setEstado("loading");
    setErrorMsg("");

    const data = new FormData();
    data.append("nombre",      nombre);
    data.append("documento",   documento);
    data.append("tipo_doc",    tipoDoc);
    data.append("telefono",    telefono);
    data.append("correo",      correo);
    data.append("programa",    programa);
    data.append("sede",        sede);
    data.append("tipo_pago",   tipoPago);
    data.append("banco",       banco);
    data.append("fecha_pago",  fechaPago);
    data.append("ciclo",       ciclo);
    data.append("monto",       String(montoNum));
    data.append("notas",       notas);
    data.append("comprobante", file);

    try {
      const res  = await fetch("/api/pagos/comprobante", { method: "POST", body: data });
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
        <a href="https://wa.me/573022389760"
          className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white">
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

        {/* Tipo doc + Documento */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Tipo doc.
            </label>
            <select value={tipoDoc} onChange={e => setTipoDoc(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]">
              <option>CC</option><option>TI</option><option>CE</option><option>PA</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Número de documento *
            </label>
            <input required value={documento}
              onChange={e => setDocumento(e.target.value)}
              placeholder="1234567890" inputMode="numeric"
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]" />
          </div>
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Nombre completo *
          </label>
          <input required value={nombre} onChange={e => setNombre(e.target.value)}
            placeholder="Nombre y apellidos"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]" />
        </div>

        {/* Celular */}
        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Celular WhatsApp *
          </label>
          <input required type="tel" value={telefono}
            onChange={e => setTelefono(e.target.value)}
            placeholder="300 123 4567"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]" />
        </div>

        {/* Correo */}
        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Correo electrónico <span className="text-[#9CA3AF] normal-case font-normal">(opcional)</span>
          </label>
          <input type="email" value={correo} onChange={e => setCorreo(e.target.value)}
            placeholder="tucorreo@gmail.com"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]" />
        </div>

        {/* Programa + Sede */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Programa *
            </label>
            <select required value={programa} onChange={e => { setPrograma(e.target.value); setCiclo(""); }}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]">
              <option value="">Selecciona un programa</option>
              {PROGRAMAS.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Sede *
            </label>
            <select required value={sede} onChange={e => setSede(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]">
              <option value="">Selecciona una sede</option>
              {SEDES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Ciclo */}
        {totalCiclos > 0 && (
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Ciclo que estás pagando *
            </label>
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: totalCiclos }, (_, i) => i + 1).map(c => (
                <button key={c} type="button"
                  onClick={() => setCiclo(String(c))}
                  className={`flex-1 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                    ciclo === String(c)
                      ? "bg-[#312783] text-white border-[#312783]"
                      : "border-gray-200 text-[#374151] hover:border-[#312783] hover:text-[#312783]"
                  }`}>
                  Ciclo {c}
                </button>
              ))}
            </div>
            {!ciclo && (
              <p className="text-xs text-[#9CA3AF] mt-1.5">Selecciona el ciclo que corresponde a este pago</p>
            )}
          </div>
        )}

        {/* Tipo pago + Monto */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Tipo de pago *
            </label>
            <select value={tipoPago} onChange={e => setTipoPago(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]">
              {TIPOS_PAGO.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Valor pagado (COP) *
            </label>
            {montosRapidos.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2">
                {montosRapidos.map(m => (
                  <button key={m} type="button"
                    onClick={() => setMontoStr(m.toLocaleString("es-CO"))}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      montoNum === m
                        ? "bg-[#312783] text-white border-[#312783]"
                        : "border-gray-200 text-[#374151] hover:border-[#312783] hover:text-[#312783]"
                    }`}>
                    ${m.toLocaleString("es-CO")}
                  </button>
                ))}
              </div>
            )}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#374151] font-bold text-sm pointer-events-none">$</span>
              <input required value={montoStr}
                onChange={e => setMontoStr(formatCOP(e.target.value))}
                placeholder="0" inputMode="numeric"
                className={`w-full rounded-xl border pl-7 pr-3 py-2.5 text-sm font-semibold text-[#080F14] outline-none transition-colors ${
                  alerta
                    ? "border-orange-300 bg-orange-50 focus:border-orange-400"
                    : "border-gray-200 focus:border-[#312783]"
                }`} />
            </div>
            {alerta && (
              <div className="flex items-center gap-2 mt-1.5 p-2 bg-orange-50 border border-orange-200 rounded-lg">
                <AlertCircle className="h-3.5 w-3.5 text-orange-500 flex-shrink-0" />
                <p className="text-xs text-orange-700">{alerta}</p>
              </div>
            )}
            {montoNum > 0 && !alerta && (
              <div className="flex items-center gap-2 mt-1.5 p-2 bg-[#E1F5EE] border border-[#0F6E56]/20 rounded-lg">
                <CheckCircle className="h-3.5 w-3.5 text-[#0F6E56] flex-shrink-0" />
                <p className="text-xs font-bold text-[#0F6E56]">
                  Vas a registrar: ${montoNum.toLocaleString("es-CO")} COP
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── NUEVOS: Banco + Fecha ── */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Banco o medio de pago *
            </label>
            <select required value={banco} onChange={e => setBanco(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]">
              <option value="">Selecciona el medio</option>
              {BANCOS_MEDIOS.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
              Fecha del comprobante *
            </label>
            <input required type="date" value={fechaPago}
              onChange={e => setFechaPago(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783]" />
          </div>
        </div>

        {/* Upload comprobante */}
        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Foto del comprobante *
          </label>
          {preview ? (
            <div className="relative rounded-xl overflow-hidden border-2 border-[#0F6E56] mb-2">
              <img src={preview} alt="Comprobante" className="w-full max-h-48 object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button type="button"
                  onClick={() => { setFile(null); setPreview(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                  className="bg-white text-red-500 px-3 py-1.5 rounded-full text-xs font-bold">
                  ✕ Cambiar foto
                </button>
              </div>
              <div className="absolute bottom-2 left-2 bg-[#0F6E56] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> Foto cargada
              </div>
            </div>
          ) : null}
          <label htmlFor="comprobante-input"
            className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 cursor-pointer transition-colors ${
              file && !preview
                ? "border-[#0F6E56] bg-[#E1F5EE]"
                : preview
                ? "border-[#0F6E56] bg-[#E1F5EE] p-3"
                : "border-gray-200 hover:border-[#312783] bg-gray-50"
            }`}>
            {file && !preview ? (
              <>
                <CheckCircle className="h-6 w-6 text-[#0F6E56]" />
                <p className="text-sm font-semibold text-[#0F6E56]">{file.name}</p>
              </>
            ) : preview ? (
              <p className="text-xs text-[#0F6E56] font-medium">Toca para cambiar la foto</p>
            ) : (
              <>
                <Upload className="h-6 w-6 text-[#9CA3AF]" />
                <p className="text-sm text-[#6B7280]">Toca para adjuntar el comprobante</p>
                <p className="text-xs text-[#9CA3AF]">JPG, PNG o PDF — máx 10MB</p>
              </>
            )}
          </label>
          <input id="comprobante-input" ref={fileInputRef}
            type="file" accept="image/*,.pdf" className="hidden"
            onChange={e => handleFile(e.target.files?.[0] ?? null)} />
        </div>

        {/* Observaciones */}
        <div>
          <label className="block text-xs font-bold text-[#374151] uppercase tracking-wide mb-1.5">
            Observaciones
          </label>
          <textarea value={notas} onChange={e => setNotas(e.target.value)}
            placeholder="Alguna observación sobre el pago..."
            rows={2}
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#080F14] outline-none focus:border-[#312783] resize-none" />
        </div>

        {/* Error */}
        {(estado === "error" || errorMsg) && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
            <p className="text-sm text-red-700">{errorMsg}</p>
          </div>
        )}

        {/* Botón */}
        <button type="submit" disabled={estado === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#312783] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#312783]/90 disabled:opacity-60">
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