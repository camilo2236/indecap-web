import Link from "next/link";
import type { ShortCourse } from "@/data/shortCourses";
<<<<<<< HEAD
import { ArrowRight, Clock, MapPin, Award } from "lucide-react";

type Props = { course?: ShortCourse };

const CAMPO_LABORAL: Record<string, { icon: string; name: string; desc: string }[]> = {
  rcp: [
    { icon: "🏥", name: "Hospitales y Clínicas", desc: "Personal de apoyo en brigadas de emergencia y urgencias" },
    { icon: "🏢", name: "Empresas y Colegios", desc: "Brigadistas internos certificados exigidos por ley" },
    { icon: "🚑", name: "Cruz Roja y Defensa Civil", desc: "Voluntarios y auxiliares en atención prehospitalaria" },
    { icon: "🏋️", name: "Gimnasios y Centros Deportivos", desc: "Personal de seguridad con certificación en RCP" },
  ],
  inyectologia: [
    { icon: "🏥", name: "Consultorios y Clínicas", desc: "Apoyo en procedimientos de administración de medicamentos" },
    { icon: "💊", name: "Droguerías", desc: "Servicios de inyectología para clientes con fórmula médica" },
    { icon: "🏠", name: "Atención Domiciliaria", desc: "Administración de medicamentos a pacientes en casa" },
    { icon: "🤝", name: "Servicio Independiente", desc: "Oferta de servicios propios con certificación INDECAP" },
  ],
  vacunacion: [
    { icon: "💉", name: "Centros de Vacunación", desc: "IPS, EPS y programas de vacunación masiva" },
    { icon: "🏥", name: "Hospitales y Clínicas", desc: "Apoyo en jornadas de inmunización" },
    { icon: "🏛️", name: "Secretarías de Salud", desc: "Campañas municipales y departamentales" },
    { icon: "🤝", name: "Servicio Independiente", desc: "Vacunación domiciliaria certificada" },
  ],
  "toma-muestras": [
    { icon: "🧪", name: "Laboratorios Clínicos", desc: "Toma y procesamiento de muestras en laboratorios del Valle de Aburrá" },
    { icon: "🏥", name: "Hospitales e IPS", desc: "Apoyo en servicios de laboratorio hospitalario" },
    { icon: "💊", name: "Droguerías con Laboratorio", desc: "Servicios de toma de muestras en establecimientos farmacéuticos" },
    { icon: "🏠", name: "Servicio Domiciliario", desc: "Toma de muestras a domicilio para laboratorios" },
  ],
  "primeros-auxilios": [
    { icon: "🏢", name: "Empresas", desc: "Brigadistas certificados — exigido por el SG-SST" },
    { icon: "🏫", name: "Colegios e Instituciones", desc: "Personal de atención a emergencias en entornos educativos" },
    { icon: "🏋️", name: "Centros Deportivos", desc: "Asistencia en eventos y actividades físicas" },
    { icon: "🚑", name: "Organizaciones de Emergencia", desc: "Cruz Roja, Defensa Civil, bomberos voluntarios" },
  ],
  "codigo-fucsia": [
    { icon: "🏥", name: "Hospitales y Clínicas", desc: "Apoyo en protocolos de atención a víctimas de violencia sexual" },
    { icon: "🏛️", name: "Comisarías de Familia", desc: "Apoyo institucional en procesos de atención integral" },
    { icon: "🤝", name: "ONG y Fundaciones", desc: "Organizaciones de atención a víctimas en Antioquia" },
    { icon: "🏢", name: "EPS e IPS", desc: "Equipos de atención psicosocial en entidades de salud" },
  ],
  excel: [
    { icon: "🏢", name: "Empresas de Todos los Sectores", desc: "Análisis de datos, reportes y automatización de procesos" },
    { icon: "📊", name: "Áreas Contables y Financieras", desc: "Gestión de información financiera con herramientas avanzadas" },
    { icon: "📋", name: "Recursos Humanos", desc: "Manejo de nóminas, bases de datos y reportes de personal" },
    { icon: "🚀", name: "Freelance y Consultoría", desc: "Servicios de análisis de datos y automatización para pymes" },
  ],
  word: [
    { icon: "🏢", name: "Áreas Administrativas", desc: "Elaboración de informes, contratos y documentos corporativos" },
    { icon: "📋", name: "Secretariado", desc: "Gestión documental profesional en empresas" },
    { icon: "🏫", name: "Instituciones Educativas", desc: "Creación de material académico y documentación institucional" },
    { icon: "🚀", name: "Freelance", desc: "Servicios de redacción y diseño de documentos" },
  ],
  "calidad-humanizacion": [
    { icon: "🏥", name: "Hospitales y Clínicas", desc: "Equipos de calidad y humanización del servicio" },
    { icon: "🏢", name: "EPS e IPS", desc: "Programas de mejoramiento de la experiencia del usuario" },
    { icon: "👥", name: "Atención al Usuario", desc: "Procesos de servicio humanizado en entidades de salud" },
    { icon: "📋", name: "Gestión de Calidad", desc: "Apoyo en procesos de acreditación y mejora continua" },
  ],
  "peluqueria-canina": [
    { icon: "✂️", name: "Peluquerías Caninas", desc: "Pet shops y centros de estética animal" },
    { icon: "🐶", name: "Clínicas Veterinarias", desc: "Servicio de grooming integrado" },
    { icon: "🏠", name: "Servicio a Domicilio", desc: "Atención en el hogar del propietario" },
    { icon: "🚀", name: "Negocio Propio", desc: "Tu propio centro de estética canina" },
  ],
  "peluqueria-estetica-canina": [
    { icon: "✂️", name: "Peluquerías Caninas", desc: "Pet shops y centros de estética animal" },
    { icon: "🐶", name: "Clínicas Veterinarias", desc: "Servicio de grooming integrado" },
    { icon: "🏠", name: "Servicio a Domicilio", desc: "Atención en el hogar del propietario" },
    { icon: "🚀", name: "Negocio Propio", desc: "Tu propio centro de estética canina" },
  ],
=======

type Props = {
  course?: ShortCourse;
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
};

export function ShortCoursePage({ course }: Props) {
  if (!course) {
    return (
<<<<<<< HEAD
      <main className="min-h-screen bg-[#f5fafc] flex items-center justify-center px-6">
        <div className="rounded-3xl bg-white p-12 text-center shadow-sm border border-[#c8c4d3]/20 max-w-md">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-[#1a086e] mb-4">Curso no encontrado</h1>
          <p className="text-[#474551] mb-8">Puedes volver al catálogo y revisar los cursos disponibles.</p>
          <Link href="/educacion-continua" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white bg-[#1a086e]">
            Ver todos los cursos <ArrowRight size={16} />
          </Link>
=======
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0B323]">
            INDECAP
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0E1B63]">
            Curso no encontrado
          </h1>
          <p className="mt-4 text-[#4B5563]">
            No encontramos la información de este curso. Puedes volver al catálogo y revisar los cursos disponibles.
          </p>
          <div className="mt-8">
            <Link
              href="/#cursos"
              className="rounded-full bg-[#0E1B63] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Volver a cursos
            </Link>
          </div>
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
        </div>
      </main>
    );
  }

<<<<<<< HEAD
  const whatsappUrl = `https://wa.me/573022389760?text=${encodeURIComponent(course.ctaMessage)}`;
  const campoLaboral = CAMPO_LABORAL[course.slug] || [];

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* ── HERO ───────────────────────────────────────────── */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-[#f5fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-7 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest bg-[#ffb21d20] border-[#ffb21d40] text-[#805600]">
              ✦ Inscripciones Abiertas
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl text-[#1a086e] leading-[0.9] tracking-tight">
              <em className="italic">{course.title}</em>
            </h1>
            <p className="text-lg text-[#474551] max-w-xl leading-relaxed">{course.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base hover:scale-105 transition-transform shadow-lg bg-[#ffb21d] text-[#281800]">
                Inscríbete Ya <ArrowRight size={18} />
              </a>
              <Link href="/educacion-continua" className="flex items-center gap-2 px-8 py-4 font-bold text-[#1a086e] hover:bg-[#1a086e]/5 transition-colors rounded-xl">
                Ver todos los cursos
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-[#eaeff1]">
              {course.image ? (
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1a086e]/10 to-[#312783]/20" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a086e]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl border-4 border-[#f5fafc] bg-[#ffb21d]">
              <span className="font-[family-name:var(--font-playfair)] text-3xl font-black leading-none text-[#281800]">40</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-[#281800]">Años</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── QUICK INFO BAR ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c8c4d3]/20 rounded-2xl shadow-xl border border-[#c8c4d3]/20">
          {[
            { icon: Clock,  label: "Duración",       value: course.duration },
            { icon: MapPin, label: "Modalidad",      value: course.modality },
            { icon: Award,  label: "Certificación",  value: course.certification },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-7 flex items-center gap-5">
              <div className="w-11 h-11 rounded-full bg-[#1a086e10] flex items-center justify-center">
                <Icon size={20} color="#1a086e" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583] mb-0.5">{label}</span>
                <span className="block font-black text-[#1a086e] text-xl tracking-tight">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAMPO LABORAL — igual que programas técnicos ─────── */}
      {campoLaboral.length > 0 && (
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">¿Para qué sirve este curso?</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black tracking-tight text-[#1a086e]">
              Campo Laboral
            </h2>
            <p className="text-[#474551] text-lg mt-3 max-w-xl">Este certificado abre puertas concretas en el mercado laboral de Antioquia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:row-span-2 rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all shadow-sm border border-black/5 bg-white min-h-[200px]">
              <span className="text-5xl">{campoLaboral[0].icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black mb-2 tracking-tight text-[#1a086e]">{campoLaboral[0].name}</h3>
                <p className="text-[#474551] text-sm leading-relaxed">{campoLaboral[0].desc}</p>
              </div>
            </div>
            {campoLaboral.slice(1, 3).map((s, i) => (
              <div key={i} className="rounded-2xl p-7 flex flex-col justify-between hover:scale-[1.02] transition-all bg-[#eff4f6]">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black mb-1 tracking-tight text-[#1a086e]">{s.name}</h3>
                  <p className="text-sm text-[#474551] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
            {campoLaboral[3] && (
              <div className="md:col-span-2 rounded-2xl p-8 flex items-center gap-8 hover:scale-[1.01] transition-all bg-[#1a086e]">
                <div className="flex-1">
                  <span className="text-4xl mb-3 block">{campoLaboral[3].icon}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-white mb-2 tracking-tight">{campoLaboral[3].name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{campoLaboral[3].desc}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── DESCRIPCIÓN ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">El programa</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] mb-6 leading-tight tracking-tight">
            Una formación pensada para <em className="italic">avanzar</em>
          </h2>
          <p className="text-[#474551] text-lg leading-relaxed">{course.description}</p>
        </div>
      </section>

      {/* ── MÓDULOS BENTO ───────────────────────────────────── */}
      <section className="py-20 bg-[#eff4f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">Currículo académico</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] tracking-tight">Contenido del curso</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-8 bg-white p-10 rounded-2xl hover:shadow-xl transition-all relative overflow-hidden border border-[#c8c4d3]/20">
              <span className="text-6xl font-[family-name:var(--font-playfair)] absolute top-4 right-8 select-none text-[#1a086e]/5">01</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] mb-5 tracking-tight">Beneficios del programa</h3>
              <ul className="space-y-3">
                {course.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-[#474551] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#ffb21d] shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 p-10 rounded-2xl relative bg-[#1a086e] border border-[#312783]">
              <span className="text-6xl font-[family-name:var(--font-playfair)] absolute top-4 right-8 select-none text-white/10">02</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-5 tracking-tight">Habilidades</h3>
              <ul className="space-y-3">
                {course.learn.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffb21d] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-12 bg-white p-10 rounded-2xl hover:shadow-xl transition-all border border-[#c8c4d3]/20">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] mb-6 tracking-tight">Información general</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {course.info.map((row: { label: string; value: string }) => (
                      <div key={row.label} className="p-4 rounded-xl bg-[#eff4f6]">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#787583] mb-1">{row.label}</p>
                        <p className="font-semibold text-[#1a086e]">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-72 shrink-0 space-y-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-8 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl bg-[#ffb21d] text-[#281800]">
                    💬 Inscribirme Ya
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-2xl font-bold text-white bg-[#25D366]">
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-square bg-[#eaeff1] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden">
            {course.image
              ? <img src={course.image} alt="" className="w-full h-full object-cover" />
              : <span className="text-9xl">🎓</span>
            }
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest block mb-3 text-[#805600]">Perfil del estudiante</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] mb-10 tracking-tight">
              ¿Para quién es <em className="italic">este curso?</em>
            </h2>
            <div className="space-y-8">
              {[
                { num: "1", title: "Profesionales de la salud", desc: "Estudiantes y trabajadores del sector que requieren certificación o actualización en su perfil." },
                { num: "2", title: "Brigadistas y líderes", desc: "Responsables de la seguridad y respuesta ante emergencias en empresas e instituciones." },
                { num: "3", title: "Comunidad en general", desc: "Cualquier persona interesada en adquirir habilidades prácticas y certificadas para mejorar su perfil." },
              ].map((item) => (
                <div key={item.num} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-[family-name:var(--font-playfair)] text-xl font-black bg-[#ffb21d] text-[#281800]">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1a086e] mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-[#474551]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-12 md:p-20 text-center" style={{ background: "linear-gradient(135deg, #1a086e 0%, #312783 100%)" }}>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-black text-white mb-4 tracking-tight">
              Comienza tu <em className="italic">futuro hoy</em>
            </h2>
            <p className="text-white/70 text-xl mb-10">Cupos limitados. Inscríbete ahora y asegura tu lugar.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl bg-[#ffb21d] text-[#281800]">
                Solicitar información
              </a>
              <Link href="/admision"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white/10 transition-colors">
                Formulario de admisión
              </Link>
            </div>
          </div>
        </div>
=======
  const whatsappUrl = `https://wa.me/573008948517?text=${encodeURIComponent(course.ctaMessage)}`;

  return (
    <main className="bg-white">
      <section className="bg-[#0E1B63] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#F0B323]">
            Educación continua INDECAP
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight md:text-6xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{course.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              {course.modality}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              {course.duration}
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              Validez {course.validity}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F0B323] px-6 py-3 font-semibold text-[#111827] transition hover:opacity-90"
            >
              Solicitar información
            </a>
            <Link
              href="/#cursos"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_0.9fr] lg:px-12">
        <div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#0E1B63]">
            Una formación pensada para avanzar
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4B5563]">
            {course.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {course.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-5"
              >
                <p className="font-semibold text-[#111827]">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#0E1B63]">¿Qué aprenderás?</h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {course.learn.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#E5E7EB] px-4 py-3 text-[#374151]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-6">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0E1B63]">
            Información general
          </h3>

          <div className="mt-6 space-y-5">
            {course.info.map((row) => (
              <div key={row.label}>
                <p className="font-semibold text-[#111827]">{row.label}</p>
                <p className="text-[#4B5563]">{row.value}</p>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-[#25D366] px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
          >
            Hablar por WhatsApp
          </a>
        </aside>
>>>>>>> 8c340632f1d786cf278dc34e50140825b9db181b
      </section>
    </main>
  );
}