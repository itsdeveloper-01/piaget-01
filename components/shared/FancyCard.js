// components/shared/FancyCard.js
export default function FancyCard({
  title,
  text,
  buttonText,
  buttonHref = "#",
  mediaSide = "top", // "top" | "left" | "right"
  imageUrl,         // opcional
}) {
  const isSide = mediaSide === "left" || mediaSide === "right";
  const mediaOrder = mediaSide === "right" ? "md:order-2" : "md:order-1";
  const contentOrder = mediaSide === "right" ? "md:order-1" : "md:order-2";

  // Altura consistente para que siempre se vea la imagen o el fallback
  const mediaBoxClasses = isSide
    ? `w-full md:w-1/3 h-48 md:h-56 ${mediaOrder} mx-4 my-4`
    : `h-40 mx-4 -mt-6`;

  return (
    <div
      className={`relative w-full rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isSide ? "md:flex md:flex-row" : "flex flex-col"}`}
    >
      {/* Media */}
      <div className={`relative overflow-hidden rounded-xl bg-clip-border shadow-lg group ${mediaBoxClasses}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title || "Imagen"}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 opacity-90" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-white/90 transform transition-transform group-hover:scale-110 duration-300">
                <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83zM11 16h2v2h-2zm0-6h2v4h-2z" />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${isSide ? `md:w-2/3 ${contentOrder}` : ""}`}>
        <h5 className="mb-2 text-xl font-semibold tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h5>
        <p className="text-base font-light leading-relaxed text-gray-700 antialiased whitespace-pre-line">
          {text}
        </p>
        {buttonText && (
          <div className="pt-6">
            <a
              href={buttonHref}
              className="group inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                {buttonText}
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
