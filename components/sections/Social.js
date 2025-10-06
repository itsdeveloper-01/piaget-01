import socialConfig from "@/content/social/social.json";
export default function Social(){
  return (
    <section id="social" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Redes sociales</h2>
        <p className="text-gray-600">Se actualizan agregando las cuentas en el CMS. Demo con últimas imágenes/estados.</p>
      </header>
      <div className="flex flex-wrap gap-3 mb-6">
        {socialConfig.accounts.map(a=> (
          <a key={a.platform} href={a.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded-full text-sm hover:bg-gray-50">
            {a.platform}: @{a.handle}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {socialConfig.recent.map((p,idx)=> (
          <article key={idx} className="rounded-2xl overflow-hidden border shadow-sm">
            {p.image&&(<img src={p.image} alt="post" className="w-full h-56 object-cover" loading="lazy"/>)}
            <div className="p-4">
              <p className="text-sm text-gray-800">{p.text}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-700 hover:underline">Ver publicación</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
