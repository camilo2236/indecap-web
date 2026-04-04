import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | INDECAP",
  description: "Política de privacidad y aviso de tratamiento de datos personales de la Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas.",
};

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
            Política de <em className="italic text-[#ffb21d]">Privacidad</em>
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Corporación Educativa INDECAP — Instituto de Ciencias Aplicadas S.A.S.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Quiénes somos */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-4 tracking-tight">
              ¿Quiénes somos?
            </h2>
            <p className="text-[#474551] leading-relaxed">
              La dirección de nuestro sitio web es <strong>https://www.indecap.edu.co</strong> y todos los subdominios relacionados con ella. Para los cuales esta política de privacidad es válida e incluyente.
            </p>
          </div>

          {/* Qué datos recopilamos */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-6 tracking-tight">
              ¿Qué datos personales recopilamos y por qué?
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#c8c4d3]/20 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-[#1a086e] mb-3">Formularios de contacto e inscripción</h3>
                <p className="text-[#474551] leading-relaxed">
                  Cuando los visitantes diligencian formularios en el sitio, recopilamos los datos que se muestran en dichos formularios — nombre, apellidos, número de celular, correo electrónico, programa de interés y sede — para contactarlos y orientarlos sobre nuestros programas académicos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#c8c4d3]/20 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-[#1a086e] mb-3">Cookies</h3>
                <p className="text-[#474551] leading-relaxed">
                  Nuestro sitio puede usar cookies para mejorar la experiencia del usuario. Estas cookies no contienen datos personales sensibles y pueden ser desactivadas desde la configuración de su navegador.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#c8c4d3]/20 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-[#1a086e] mb-3">Contenido incrustado de otros sitios</h3>
                <p className="text-[#474551] leading-relaxed">
                  Los artículos y páginas en este sitio pueden incluir contenido incrustado (videos, imágenes, etc.). El contenido incrustado de otros sitios web se comporta exactamente de la misma manera que si el visitante hubiera visitado el otro sitio web directamente, y pueden recopilar datos sobre usted según sus propias políticas.
                </p>
              </div>
            </div>
          </div>

          {/* Cómo usamos la información */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-4 tracking-tight">
              ¿Cómo utilizamos la información recopilada?
            </h2>
            <ul className="space-y-3">
              {[
                "Proporcionar, operar y mantener nuestro sitio web",
                "Mejorar, personalizar y expandir nuestro sitio web",
                "Comprender y analizar cómo usa nuestro sitio web",
                "Desarrollar nuevos productos, servicios, características y funcionalidades",
                "Comunicarnos con usted para el servicio al cliente, actualizaciones e información relacionada",
                "Enviarle información sobre nuestros programas académicos y cursos",
                "Prevenir fraude y garantizar la seguridad del sitio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#474551]">
                  <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-[#ffb21d]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Conservación de datos */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-4 tracking-tight">
              ¿Cuánto tiempo conservamos sus datos?
            </h2>
            <p className="text-[#474551] leading-relaxed">
              Los datos de contacto e inscripción se conservan durante el tiempo necesario para cumplir con la relación académica y comercial, y de acuerdo con los requisitos legales aplicables. Para los usuarios registrados, almacenamos la información personal que proporcionan en su perfil, la cual puede ser editada o eliminada en cualquier momento.
            </p>
          </div>

          {/* Derechos */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-4 tracking-tight">
              ¿Qué derechos tienes sobre tus datos?
            </h2>
            <p className="text-[#474551] leading-relaxed">
              Puede solicitar que borremos cualquier información personal que tengamos sobre usted, excepto la que estemos obligados a conservar con fines administrativos, legales o de seguridad. Para ejercer este derecho, escríbenos a <a href="mailto:indecap@indecap.edu.co" className="text-[#1a086e] font-semibold hover:underline">indecap@indecap.edu.co</a>.
            </p>
          </div>

          {/* Aviso Habeas Data */}
          <div className="bg-[#1a086e] rounded-2xl p-8 text-white">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-4 tracking-tight">
              Aviso de Privacidad — Ley Habeas Data
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed text-sm">
              <p>
                Con el fin de cumplir con nuestro objeto social y el cumplimiento de los requisitos legales aplicables en lo referente a la <strong className="text-white">Ley del Habeas Data</strong>, en el Instituto de Ciencias Aplicadas S.A.S. deseamos continuar con la opción de comunicarnos directamente con usted de forma efectiva, mediante el uso de correo físico, electrónico, dispositivos móviles, mensajes de texto o a través de cualquier medio análogo y/o digital de comunicación.
              </p>
              <p>
                Dando cumplimiento a la reglamentación de protección de datos personales (<strong className="text-white">Ley 1581 de 2012 y Decreto 1377 de 2013</strong>), le manifestamos que la información previamente brindada por usted a nuestra compañía se encuentra en nuestras bases de datos de usuarios de manera física y digital.
              </p>
              <p>
                Los datos registrados en nuestras bases incluyen, entre otros, los correspondientes a identificación, dirección, teléfonos y correos electrónicos, así como datos sensibles recopilados en función de nuestra labor educativa.
              </p>
              <p>
                Si desea que sus datos sean suprimidos de nuestras bases de datos, le solicitamos informarlo de manera expresa enviando un correo a <strong className="text-white">indecap@indecap.edu.co</strong> indicando el motivo. En caso contrario, pasados 30 días calendario sin recibir su indicación, consideraremos que nos autoriza de manera libre, previa, voluntaria y debidamente informada para que los mismos sean utilizados con el propósito de lograr una comunicación eficiente relacionada con nuestros servicios.
              </p>
              <p>
                Usted tiene la posibilidad de acceder en cualquier momento a sus datos personales y el derecho a solicitar su corrección, actualización o supresión, en los términos establecidos por la Ley 1581 de 2012, dirigiendo una comunicación al correo <strong className="text-white">indecap@indecap.edu.co</strong> o al PBX: (604) 448 47 94.
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-white rounded-2xl p-8 border border-[#c8c4d3]/20 shadow-sm">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#1a086e] mb-4 tracking-tight">
              Información de contacto
            </h2>
            <p className="text-[#474551] leading-relaxed mb-4">
              Cualquier inquietud o tema legal puede ser comunicado a través de los siguientes canales:
            </p>
            <div className="space-y-2 text-[#474551]">
              <p>📧 Asuntos generales: <a href="mailto:indecap@indecap.edu.co" className="text-[#1a086e] font-semibold hover:underline">indecap@indecap.edu.co</a></p>
              <p>📧 Contenido web: <a href="mailto:camilo.rico@indecap.edu.co" className="text-[#1a086e] font-semibold hover:underline">camilo.rico@indecap.edu.co</a></p>
              <p>📞 PBX: <a href="tel:6044484794" className="text-[#1a086e] font-semibold hover:underline">(604) 448 47 94</a></p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
