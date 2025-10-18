import levels from "@/content/levels.json";

export default function LevelsSection() {
  return (
    <section id="niveles" className="w-full py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Niveles escolares</h2>
          <p className="text-gray-600">Modelo educativo Montessori desde Comunidad Infantil hasta Preparatoria.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((lvl, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <figure className="relative w-full aspect-[4/3] overflow-hidden">
                <img src={lvl.image} alt={lvl.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </figure>
              <div className="p-5 flex flex-col gap-2 grow">
                <h3 className="text-lg font-semibold text-gray-800">{lvl.title}</h3>
                <p className="text-sm text-gray-600 grow">{lvl.excerpt}</p>
                <div>
                  <a href={`/${lvl.slug}`} className="inline-block text-blue-600 font-medium hover:underline">Ver más</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
