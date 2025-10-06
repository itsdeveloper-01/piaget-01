export default function InfoPage({ data }){
  return (
    <div>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">{data.title}</h1>
      </section>
      {data.sections.map((s,idx)=>(
        <section key={idx} className="w-full px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-semibold tracking-tight">{s.heading}</h2>
          <p className="mt-3 text-gray-700">{s.body}</p>
        </section>
      ))}
      <section id="contacto" className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border p-6 bg-white">
          <h2 className="text-xl font-semibold tracking-tight mb-3">Contáctanos</h2>
          <p className="text-gray-700 mb-6">¿Interesado en {data.title}? Escríbenos.</p>
          <a href="mailto:demo@piaget.edu.mx" className="inline-block px-5 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700">Enviar correo</a>
        </div>
      </section>
    </div>
  );
}
