import data from "@/content/pages/maternal.json";

export default function ComunidadInfantil() {
  const {
    title, subtitle, ageRange, worksIntro, works = [],
    achievementsTitle, achievementsText, valuesTitle, values = [],
    programTitle, programAltTitles = [], scheduleTitle, schedule = [],
    heroImage = "/images/hero-maternal.svg"
  } = data || {};

  return (
    <main className="min-h-screen">
      {/* Hero / Título */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">{title}</h1>
          <p className="text-gray-700">{subtitle}</p>
        </div>
      </section>

      {/* Edad + Intro */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">{ageRange}</h2>
            <p className="text-gray-700 leading-relaxed">
              En esta etapa los niños desarrollan su autonomía y descubren el mundo a través de la experiencia,
              la curiosidad y el juego guiado con materiales Montessori.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-4/5 h-56 sm:h-64 rounded-2xl shadow-md bg-gradient-to-br from-amber-50 via-blue-50 to-pink-50 border border-gray-200 flex items-center justify-center text-gray-500">
              Materiales sensoriales · vida práctica · arte
            </div>
          </div>
        </div>
      </section>

      {/* Trabajan (cards) */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">{worksIntro}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((w, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{w.icon || "✨"}</div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{w.title}</h3>
                <p className="text-gray-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">{achievementsTitle}</h2>
          <p className="text-gray-700 leading-relaxed">{achievementsText}</p>
        </div>
      </section>

      {/* Valores + Programa */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{valuesTitle}</h2>
            <ul className="space-y-3 text-gray-700">
              {values.map((v, i) => <li key={i}>✅ {v}</li>)}
            </ul>
          </div>

          <div className="bg-yellow-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{programTitle}</h3>
            {programAltTitles?.length > 0 && (
              <p className="text-gray-700 mb-4">{programAltTitles.join(" — ")}</p>
            )}
            <h4 className="font-semibold mb-2 text-gray-800">{scheduleTitle}</h4>
            <ul className="text-gray-700 space-y-1">
              {schedule.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
