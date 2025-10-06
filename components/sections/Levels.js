import data from "@/content/levels/levels.json";
import Link from "next/link";

export default function Levels(){
  return (
    <section id="niveles" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Niveles escolares</h2>
        <p className="text-gray-600">Modelo educativo Montessori desde Maternal hasta Preparatoria.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.levels.map((lvl)=>(
          <article key={lvl.slug} className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition">
            <img src={lvl.image} alt={lvl.title} className="w-full h-44 md:h-48 object-cover" loading="lazy"/>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{lvl.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{lvl.summary}</p>
              <Link href={lvl.href} className="inline-block mt-4 text-brand-700 hover:underline text-sm">Ver más</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
