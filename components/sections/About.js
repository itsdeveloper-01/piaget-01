import data from "@/content/pages/nosotros.json";

function Icon({ name, className = "" }) {
  const common = "w-12 h-12 mx-auto mb-4 " + className;
  switch (name) {
    case "flag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.8" className={common}>
          <path d="M4 4v16" />
          <path d="M4 6s2-1 4-1 3 1 5 1 4-1 4-1v8s-2 1-4 1-3-1-5-1-4 1-4 1" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.8" className={common}>
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.8" className={common}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function About() {
  return (
    <section id="nosotros" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{data.title}</h2>
        {data.subtitle && <p className="text-gray-600">{data.subtitle}</p>}
      </header>

      {/* Texto introductorio */}
      <div className="prose max-w-none mb-10">
        {data.body1 && <p>{data.body1}</p>}
        {data.body2 && <p>{data.body2}</p>}
      </div>

      {/* Cards: Misión / Visión / Valores */}
      {Array.isArray(data.highlights) && data.highlights.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.highlights.map(item => (
            <article key={item.key}
              className="text-center rounded-2xl p-8 border bg-white/60 backdrop-blur">
              <Icon name={item.icon} className="text-[#7A3A36]" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.text}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
