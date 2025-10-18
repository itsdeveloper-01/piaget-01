import data from "@/content/pages/maternal.json";

export default function MaternalPage(){
  const {
    title, subtitle, heroImage, ageRange,
    worksIntro, works, achievementsTitle, achievementsText,
    valuesTitle, values, programTitle, programAltTitles,
    scheduleTitle, schedule
  } = data;

  return (
    <>
      <section className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover"/>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-700">{subtitle}</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <p className="text-gray-700 font-medium mb-4">{ageRange}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{worksIntro}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((w, i) => (
              <div key={i} className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="text-3xl mb-2">{w.icon}</div>
                <h4 className="font-semibold text-gray-800">{w.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievementsTitle}</h3>
          <p className="text-gray-700">{achievementsText}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{valuesTitle}</h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-1">
            {values.map((v,i)=> <li key={i}>✅ {v}</li>)}
          </ul>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{programTitle}</h3>
          <p className="text-gray-700">También conocido como: {programAltTitles.join(", ")}.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{scheduleTitle}</h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-1">
            {schedule.map((s,i)=><li key={i}>{s}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
