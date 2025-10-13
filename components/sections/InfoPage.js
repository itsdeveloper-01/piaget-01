import SectionTitle from "@/components/shared/SectionTitle";
import FancyCard from "@/components/shared/FancyCard";
export default function InfoPage({ data }){
  return (
  <div>
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle className="!text-3xl sm:!text-4xl lg:!text-5xl">{data?.title ?? "Página"}</SectionTitle>
    </section>

    {(data?.style === 'fancy' || (data?.cards?.length ?? 0) > 0) && (
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-12 space-y-10">
        {(data?.cards || []).map((c, idx) => (
          <FancyCard key={idx} title={c.title} text={c.text} buttonText={c.buttonText} buttonHref={c.buttonHref} mediaSide={c.mediaSide || 'top'} imageUrl={c.imageUrl} />
        ))}
      </section>
    )}

    {(!data?.style || data?.style !== 'fancy') && (!data?.cards || (data?.cards?.length ?? 0) == 0) && (
      (data?.sections || []).map((s, idx) => (
        <section key={idx} className="w-full px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="title-section !text-xl sm:!text-2xl">{s.heading}</h2>
          <p className="mt-3 text-gray-700">{s.body}</p>
        </section>
      ))
    )}

    <section id="contacto" className="w-full px-4 sm:px-6 lg:px-8 pb-16">
      <div className="rounded-2xl border p-6 bg-white">
        <h2 className="title-section !text-xl sm:!text-2xl mb-3">Contáctanos</h2>
        <p className="text-gray-700 mb-6">¿Interesado en {data?.title ?? "esta página"}? Escríbenos.</p>
        <a href="mailto:demo@piaget.edu.mx" className="inline-block px-5 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700">Enviar correo</a>
      </div>
    </section>
  </div>
);


}
