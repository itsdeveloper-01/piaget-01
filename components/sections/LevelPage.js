import SectionTitle from "@/components/shared/SectionTitle";
export default function LevelPage({ data }){
  return (
    <div>
      <div className="w-full h-[40vh] sm:h-[50vh]">
        <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover"/>
      </div>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle className="!text-3xl sm:!text-4xl lg:!text-5xl">{data.title}</SectionTitle>
        <p className="mt-4 text-gray-700">{data.description}</p>
      </section>
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-12">
        <SectionTitle className="!text-2xl sm:!text-3xl mb-6">Actividades</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.activities.map((it,idx)=>(
            <article key={idx} className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition">
              <img src={it.image} alt={it.title} className="w-full h-40 object-cover" loading="lazy"/>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{it.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="contacto" className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="title-section !text-xl sm:!text-2xl mb-3">Contáctanos</h2>
          <p className="text-gray-700 mb-6">¿Tienes dudas sobre {data.title}? Escríbenos.</p>
          <a href="mailto:demo@piaget.edu.mx" className="inline-block px-5 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700">Enviar correo</a>
        </div>
      </section>
    </div>
  );
}
