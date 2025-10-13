"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroVideo(){
  const vidRef=useRef(null);
  useEffect(()=>{const v=vidRef.current; if(v) v.play().catch(()=>{});},[]);
  return (
    <section aria-label="Video principal" className="relative bg-black">
      <video ref={vidRef} className="w-full h-[70vh] sm:h-[80vh] object-cover" poster="/assets/hero-poster.jpg" playsInline muted loop preload="metadata">
        <source src="/assets/hero.mp4" type="video/mp4"/>
      </video>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 sm:p-6">
        <div className="flex gap-3 mb-2 mr-1 sm:mr-2 pointer-events-auto">
          <Link href="/#contacto" className="backdrop-blur-md bg-white/60 border border-black/10 text-black px-4 py-2 rounded-xl shadow-lg hover:bg-white/70 transition">Contacto</Link>
          <a href="/#nosotros" className="backdrop-blur-md bg-white/60 border border-black/10 text-black px-4 py-2 rounded-xl shadow-lg hover:bg-white/70 transition">Quiénes somos</a>
        </div>
      </div>
    </section>
  );
}
