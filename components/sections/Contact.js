"use client";
import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSent(true), 400);
  };

  const inputCls =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-600";

  return (
    <section id="contacto" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-6">
        <SectionTitle>Contacto</SectionTitle>
        <p className="text-gray-600">Déjanos tus datos y nos comunicamos contigo.</p>
      </header>

      {/* 2 columnas desde md: (mapa izquierda, formulario derecha) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Mapa (izquierda) */}
        <div className="card p-2 flex">
          <div className="w-full aspect-[16/10] rounded-lg overflow-hidden">
            <iframe
              title="Instituto Piaget - Reynosa"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Instituto+Piaget,+Ote.+1+715,+Las+Cumbres,+88740+Reynosa,+Tamps.&output=embed"
            />
          </div>
        </div>

        {/* Formulario (derecha) */}
        <form onSubmit={onSubmit} className="card p-6 bg-white">
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" className={inputCls} placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Correo</label>
                <input type="email" className={inputCls} placeholder="correo@ejemplo.com" required />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Teléfono (opcional)</label>
              <input type="tel" className={inputCls} placeholder="(xxx) xxx xxxx" />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                className={inputCls + " h-40 resize-none"}
                placeholder="¿En qué podemos ayudarte?"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Enviar
              </button>
              {sent && <span className="ml-3 text-sm text-green-700">¡Enviado (demo)!</span>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
