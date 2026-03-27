import Link from "next/link";
import type { ShortCourse } from "@/data/shortCourses";
import { ArrowRight, Clock, MapPin, Award } from "lucide-react";

type Props = { course?: ShortCourse };

export function ShortCoursePage({ course }: Props) {
  if (!course) {
    return (
      <main className="min-h-screen bg-[#f5fafc] flex items-center justify-center px-6">
        <div className="rounded-3xl bg-white p-12 text-center shadow-sm border border-[#c8c4d3]/20 max-w-md">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-[#1a086e] mb-4">Curso no encontrado</h1>
          <p className="text-[#474551] mb-8">Puedes volver al catálogo y revisar los cursos disponibles.</p>
          <Link href="/educacion-continua" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white bg-[#1a086e]">
            Ver todos los cursos <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/573022389760?text=${encodeURIComponent(course.ctaMessage)}`;

  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">

      {/* HERO */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-[#f5fafc]">
        <div className="max-w-7xl mx-auto px-8 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest bg-[#ffb21d20] border-[#ffb21d40] text-[#805600]">
              Inscripciones Abiertas
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

      {/* QUICK INFO BAR */}
      <section className="max-w-7xl mx-auto px-8 -mt-6 relative z-20 mb-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c8c4d3]/20 rounded-2xl shadow-xl border border-[#c8c4d3]/20">
          {[
            { icon: Clock, label: "Duración", value: course.duration },
            { icon: MapPin, label: "Modalidad", value: course.modality },
            { icon: Award, label: "Certificación", value: course.certification },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-8 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-[#1a086e10] flex items-center justify-center">
                <Icon size={22} color="#1a086e" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#787583] mb-1">{label}</span>
                <span className="block font-black text-[#1a086e] text-xl tracking-tight">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 max-w-3xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] mb-8 leading-tight tracking-tight">
            Una formación pensada para <em className="italic">avanzar</em>
          </h2>
          <p className="text-[#474551] text-lg leading-relaxed">{course.description}</p>
        </div>
      </section>

      {/* MÓDULOS BENTO */}
      <section className="py-24 bg-[#eff4f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-bold text-sm uppercase tracking-widest block mb-4 text-[#805600]">Lo que aprenderás</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] tracking-tight">Contenido del curso</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white p-10 rounded-2xl hover:shadow-xl transition-all relative overflow-hidden border border-[#c8c4d3]/20">
              <span className="text-6xl font-[family-name:var(--font-playfair)] absolute top-4 right-8 select-none text-[#1a086e]/5">01</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1a086e] mb-6 tracking-tight">Beneficios del programa</h3>
              <ul className="space-y-3">
                {course.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#474551] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#ffb21d] shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 p-10 rounded-2xl relative bg-[#1a086e] border border-[#312783]">
              <span className="text-6xl font-[family-name:var(--font-playfair)] absolute top-4 right-8 select-none text-white/10">02</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-6 tracking-tight">Habilidades</h3>
              <ul className="space-y-3">
                {course.learn.map((item, i) => (
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
                    {course.info.map((row) => (
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

      {/* PARA QUIÉN ES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-square bg-[#eaeff1] rounded-3xl flex items-center justify-center text-9xl shadow-inner">🎓</div>
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#1a086e] mb-12 tracking-tight">
              ¿Para quién es <em className="italic">este curso?</em>
            </h2>
            <div className="space-y-8">
              {[
                { num: "1", title: "Profesionales de la salud", desc: "Estudiantes y trabajadores del sector que requieren certificación o actualización." },
                { num: "2", title: "Brigadistas y líderes", desc: "Responsables de la seguridad y respuesta ante emergencias en empresas e instituciones." },
                { num: "3", title: "Comunidad en general", desc: "Cualquier persona interesada en adquirir habilidades prácticas y certificadas." },
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

      {/* CTA FINAL */}
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
      </section>
    </main>
  );
}