"use client";
import data from "@/content/pages/admision.json";

export default function AdmissionSteps() {
  const { title = "Proceso de Admisión", steps = [] } = data || {};
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-10">
        {title}
      </h1>
      <div className="space-y-8">
        {steps.map((s, idx) => (
          <div key={idx} className="space-y-6">
            <div className={`flex ${s.reverse ? "flex-row-reverse" : "flex-row"} items-stretch`}>
              <div className={`hidden md:flex flex-col items-center ${s.reverse ? "ml-4" : "mr-4"}`}>
                <div className="w-32 py-5 border border-gray-300 rounded uppercase flex flex-col items-center justify-center bg-white">
                  <div className="text-3xl font-black text-gray-500">Step {s.num}</div>
                  <div className="text-gray-500 text-sm">{s.subtitle}</div>
                </div>
                <div className={`h-full ${s.reverse ? "border-r-4" : "border-l-4"} border-transparent`}>
                  <div className={`${s.reverse ? "border-l-4 ml-4" : "border-l-4 mr-4"} h-full border-gray-300 border-dashed`} />
                </div>
              </div>
              <div className="flex-auto border rounded border-gray-300 bg-white">
                <div className={`flex ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col items-center`}>
                  <div className="flex-auto">
                    <div className="md:hidden text-xs sm:text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                      <span className="font-black">Step {s.num}</span> — {s.title}
                    </div>
                    <div className="p-3 text-2xl sm:text-3xl text-gray-800 font-semibold">{s.title}</div>
                    <div className="px-3 pb-6 text-gray-700 leading-relaxed">{s.text}</div>
                  </div>
                  <div className="md:w-96 w-full p-6">
                    <img src={s.img || "/icons/register.svg"} alt={`step ${s.num}`} className="object-contain w-full h-40 sm:h-48" />
                  </div>
                </div>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className={`flex items-start ${s.reverse ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`${s.reverse ? "border-t-4 border-l-4" : "border-t-4 border-r-4"} border-transparent`}>
                  <div className={`w-16 ${s.reverse ? "mr-16" : "ml-16"} h-16 ${s.reverse ? "border-r-4" : "border-l-4"} border-gray-300 border-dashed border-b-4 ${s.reverse ? "rounded-br-full" : "rounded-bl-full"}`} />
                </div>
                <div className="border-t-4 border-transparent flex-auto">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className={`w-16 mt-16 ${s.reverse ? "ml-16" : "mr-16"} h-16 ${s.reverse ? "border-l-4" : "border-r-4"} border-gray-300 border-dashed border-t-4 ${s.reverse ? "rounded-tl-full" : "rounded-tr-full"}`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
