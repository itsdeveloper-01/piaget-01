import data from "@/content/activities/activities.json";
export default function Activities(){
  return (
    <section id="actividades" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Otras actividades</h2>
        <p className="text-gray-600">Idiomas, talleres y actividades extracurriculares.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.activities.map((it)=>(
          <article key={it.slug} className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition">
            <img src={it.image} alt={it.title} className="w-full h-40 object-cover" loading="lazy"/>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{it.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
