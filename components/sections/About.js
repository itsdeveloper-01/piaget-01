import data from "@/content/pages/nosotros.json";
import SectionTitle from "@/components/shared/SectionTitle";

function Icon({ name, className = "" }){
  const common = "w-12 h-12 mx-auto mb-4 " + className;
  switch(name){
    case "flag": return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M4 4v16"/><path d="M4 6s2-1 4-1 3 1 5 1 4-1 4-1v8s-2 1-4 1-3-1-5-1-4 1-4 1"/></svg>);
    case "eye": return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>);
    case "heart": return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>);
    default: return null;
  }
}

export default function About(){
  return (
    <section id="nosotros" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-6">
        <SectionTitle>{data.title}</SectionTitle>
        {data.subtitle && <p className="subtitle-section">{data.subtitle}</p>}
      </header>
      <div className="prose max-w-none mb-10">
        {data.body1 && <p>{data.body1}</p>}
        {data.body2 && <p>{data.body2}</p>}
      </div>
      {Array.isArray(data.highlights) && data.highlights.length>0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.highlights.map(item => (
            <article key={item.key} className="text-center rounded-2xl p-8 border bg-white/60 backdrop-blur">
              <Icon name={item.icon} className="text-[#7A3A36]"/>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.text}</p>
            </article>
          ))}
        </div>
      )}
          {data.montessori && (
        <div className="mt-12 rounded-2xl border bg-white/70 backdrop-blur p-8">
          <h3 className="title-section !text-xl sm:!text-2xl mb-3">{data.montessori.heading}</h3>
          <div className="space-y-3 text-gray-800">
            {data.montessori.paragraphs?.map((p,i)=>(<p key={i}>{p}</p>))}
          </div>
          <div className="mt-6">
            <a href={data.montessori.buttonHref || '/quienes-somos'} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
              {data.montessori.buttonText || "Conoce más"}
              <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* --- Sub-sección Método Montessori (debajo de tarjetas) --- */
