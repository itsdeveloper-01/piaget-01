import data from "@/content/levels/levels.json";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Levels() {
  return (
    <section id="niveles" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      {/* Encabezado */}
      <header className="mb-8 text-center lg:text-left">
        <SectionTitle>Niveles escolares</SectionTitle>
        <p className="subtitle-section text-gray-700">
          Modelo educativo Montessori desde Maternal hasta Preparatoria.
        </p>
      </header>

      {/* Cards — organizadas de 3 en 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.levels.map((lvl) => (
          <article
            key={lvl.slug}
            className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            {/* Imagen */}
            <div className="w-full h-56 md:h-60 overflow-hidden">
              <img
                src={lvl.image}
                alt={lvl.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Contenido */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {lvl.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{lvl.summary}</p>
              <Link
                href={lvl.href}
                className="inline-block mt-4 text-blue-700 hover:underline text-sm font-medium"
              >
                Ver más
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
