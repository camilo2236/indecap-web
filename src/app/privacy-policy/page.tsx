import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Política de Tratamiento de Datos Personales",
  description:
    "Política de tratamiento de datos personales de INDECAP — Instituto de Ciencias Aplicadas S.A.S., conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
};

// ── Datos del responsable: se cambian SOLO aquí ─────────────────────────
const RESPONSABLE = {
  nombre: "Instituto de Ciencias Aplicadas S.A.S. – INDECAP (Corporación Educativa INDECAP)",
  nit: "900.342.773-7",
  domicilio: "Cl. 37 Sur # 43A-84, Envigado, Antioquia",
  correo: "indecap@indecap.edu.co",
  telefono: "(604) 448 4794",
  vigencia: "26 de noviembre de 2026",
};

const Seccion = ({ titulo, children }: { titulo: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-4 tracking-tight">{titulo}</h2>
    <div className="space-y-3 text-[#474551] leading-relaxed">{children}</div>
  </div>
);

const Lista = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="w-2 h-2 rounded-full mt-2 shrink-0 bg-[#ffb21d]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5fafc] text-[#171c1e]">
      {/* HERO */}
      <section className="bg-[#1a086e] pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-5 py-2 mb-6 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ffb21d] text-[#281800]">
            Información Legal
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Política de Tratamiento de <em className="italic text-[#ffb21d]">Datos Personales</em>
          </h1>
          <p className="mt-4 text-white/60 text-lg">Ley 1581 de 2012 · Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015)</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <Seccion titulo="1. Responsable del tratamiento">
            <div className="bg-white rounded-2xl p-6 border border-[#c8c4d3]/20 shadow-sm space-y-1">
              <p><strong>{RESPONSABLE.nombre}</strong></p>
              <p>NIT: {RESPONSABLE.nit}</p>
              <p>Domicilio: {RESPONSABLE.domicilio}</p>
              <p>
                Correo: <a href={`mailto:${RESPONSABLE.correo}`} className="text-[#1a086e] font-semibold hover:underline">{RESPONSABLE.correo}</a>
                {" · "}Teléfono: {RESPONSABLE.telefono}
              </p>
              <p>Sitio web: https://indecap.edu.co</p>
            </div>
          </Seccion>

          <Seccion titulo="2. Qué datos recolectamos">
            <Lista
              items={[
                "Formularios de información e inscripción: nombres, apellidos, celular, correo electrónico, programa o curso de interés y sede.",
                "Formulario de admisión: además, documento de identidad, fecha de nacimiento, dirección, barrio, municipio, último grado aprobado y datos de contacto de padre, madre o acudiente.",
                "Convocatorias con becas de terceros (por ejemplo, ESTUD-IA con Sapiencia y la Alcaldía de Medellín): los datos que exige la entidad que otorga la beca, como comuna, estrato, tiempo de residencia y régimen de salud.",
                "Datos de navegación: cookies y herramientas de medición, como el Píxel de Meta, que registran de forma general cómo se usa el sitio.",
              ]}
            />
            <p>
              Algunos datos, como el régimen de salud, pueden ser <strong>datos sensibles</strong>. Responder las preguntas sobre datos sensibles es
              facultativo: no estás obligado a darlos, salvo que la entidad que otorga una beca los exija para participar en su convocatoria.
            </p>
          </Seccion>

          <Seccion titulo="3. Para qué usamos tus datos">
            <Lista
              items={[
                "Contactarte y orientarte sobre los programas técnicos laborales, cursos y diplomados que solicitaste.",
                "Adelantar tu proceso de inscripción, admisión, matrícula y la gestión académica y administrativa.",
                "Enviarte información sobre programas, cursos, fechas de inicio y beneficios. Puedes pedir en cualquier momento que no te enviemos más esta información.",
                "Tramitar becas o convenios ante las entidades que los otorgan, cuando tú lo solicites.",
                "Atender peticiones, quejas y reclamos.",
                "Elaborar estadísticas y mejorar nuestro sitio web y nuestros servicios.",
                "Cumplir las obligaciones legales y los requerimientos de las autoridades educativas y de control.",
              ]}
            />
          </Seccion>

          <Seccion titulo="4. Niños, niñas y adolescentes">
            <p>
              Los datos de menores de edad solo se tratan con la autorización de su padre, madre o acudiente, respetando el interés superior del menor y
              sus derechos fundamentales, y únicamente para las finalidades de este documento.
            </p>
          </Seccion>

          <Seccion titulo="5. Tus derechos">
            <p>Como titular de los datos puedes:</p>
            <Lista
              items={[
                "Conocer, actualizar y rectificar tus datos personales.",
                "Pedir prueba de la autorización que nos diste.",
                "Ser informado sobre el uso que les hemos dado a tus datos.",
                "Revocar la autorización y pedir que eliminemos tus datos, salvo cuando exista un deber legal o contractual de conservarlos.",
                "Acceder de forma gratuita a tus datos personales.",
                "Presentar quejas ante la Superintendencia de Industria y Comercio, después de haber agotado el trámite de consulta o reclamo ante INDECAP.",
              ]}
            />
          </Seccion>

          <Seccion titulo="6. Cómo ejercer tus derechos">
            <p>
              Escríbenos a <a href={`mailto:${RESPONSABLE.correo}`} className="text-[#1a086e] font-semibold hover:underline">{RESPONSABLE.correo}</a>,
              llama al {RESPONSABLE.telefono} o acércate a cualquiera de nuestras sedes. El área administrativa de INDECAP atiende estas solicitudes.
            </p>
            <Lista
              items={[
                "Consultas: se responden en un máximo de 10 días hábiles desde que las recibimos. Si no es posible en ese plazo, te informamos el motivo y te respondemos en máximo 5 días hábiles más.",
                "Reclamos (corrección, actualización, supresión o revocatoria): se responden en un máximo de 15 días hábiles. Si no es posible en ese plazo, te informamos el motivo y te respondemos en máximo 8 días hábiles más.",
                "Tu solicitud debe incluir tu nombre, tu documento de identidad, la descripción de lo que pides y un medio para responderte.",
              ]}
            />
          </Seccion>

          <Seccion titulo="7. Con quién compartimos tus datos">
            <p>
              <strong>No vendemos tus datos.</strong> Para operar usamos proveedores tecnológicos que los procesan por cuenta nuestra (alojamiento del sitio,
              base de datos, correo electrónico y mensajería como WhatsApp), algunos con servidores fuera de Colombia, siempre con medidas de seguridad y
              solo para las finalidades de esta política. También compartimos datos con las autoridades educativas cuando la ley lo exige y con las
              entidades que otorgan becas o convenios cuando tú lo solicitas.
            </p>
          </Seccion>

          <Seccion titulo="8. Seguridad y conservación">
            <p>
              Aplicamos medidas técnicas, humanas y administrativas razonables para proteger tus datos. La información de los formularios viaja cifrada
              (HTTPS) y el acceso a nuestras bases de datos está restringido al personal autorizado.
            </p>
            <p>
              Conservamos los datos mientras sean necesarios para las finalidades descritas, para la relación académica y para cumplir los plazos que
              exige la ley. Después los eliminamos o los dejamos anónimos.
            </p>
          </Seccion>

          <Seccion titulo="9. Cookies y contenido de otros sitios">
            <p>
              El sitio usa cookies y herramientas de medición para funcionar y para entender de forma general cómo se usa. Puedes desactivarlas desde la
              configuración de tu navegador. El contenido incrustado de otros sitios (por ejemplo, videos o mapas) se comporta como si visitaras ese
              sitio directamente y se rige por sus propias políticas.
            </p>
          </Seccion>

          <Seccion titulo="10. Vigencia">
            <p>
              Esta política rige desde el {RESPONSABLE.vigencia}. Cualquier cambio importante se publicará en esta misma página. Las bases de datos se
              conservarán mientras INDECAP desarrolle su objeto social y durante el tiempo que exija la ley.
            </p>
          </Seccion>
        </div>
      </section>
    </main>
  );
}
