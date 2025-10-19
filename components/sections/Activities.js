// components/sections/Activities.js
"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import data from "@/content/activities/activities.json";

/**
 * Carrusel (marquee) para talleres usando el contenido de content/activities/activities.json.
 * - Título: "Talleres"
 * - Subtítulo: "Ven y desarrolla tus talentos."
 * - Marquee con degradado en orillas y pausa al pasar el mouse.
 * - Contenedor transparente (usa el fondo global #F2F2F2).
 * - Cards con fondo #EDE8E4 para sensación de “flotan”.
 */

export default function Activities() {
  const items = data?.items ?? data?.activities ?? [];
  if (!items.length) return null;

  return (
    <section id="talleres" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <SectionTitle>Talleres</SectionTitle>
        <p className="subtitle-section">Ven y desarrolla tus talentos.</p>
      </header>

      {/* Carrusel: contenedor transparente (sin fondo ni borde) */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Degradados laterales adaptados al fondo global (#F2F2F2) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F2F2F2] via-[#F2F2F2]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F2F2F2] via-[#F2F2F2]/80 to-transparent z-10" />

        <div className="marquee-track flex gap-6 py-6 animate-[marquee_30s_linear_infinite]">
          {/* Duplicamos para bucle continuo */}
          {[...items, ...items].map((item, idx) => (
            <article
              key={`${item.title ?? item.name}-${idx}`}
              className="min-w-[520px] max-w-[600px] flex items-center gap-5 rounded-2xl border border-black/5 bg-[#EDE8E4] shadow-sm px-7 py-6"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200">
                <img
                  src={item.image || item.icon}
                  alt={item.title || item.name || "taller"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {item.title || item.name}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {item.text || item.description || item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Animación y pausa on hover */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
