"use client";
import { useState } from "react";
export default function Contact(){
  const [sent,setSent]=useState(false);
  const onSubmit=(e)=>{e.preventDefault(); setTimeout(()=>setSent(true),500)};
  return (
    <section id="contacto" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
        <p className="text-gray-600">Déjanos tus datos y nos comunicamos contigo.</p>
      </header>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input className="border rounded-lg p-3" placeholder="Nombre" required/>
        <input className="border rounded-lg p-3" placeholder="Correo" type="email" required/>
        <input className="border rounded-lg p-3 md:col-span-2" placeholder="Teléfono (opcional)"/>
        <textarea className="border rounded-lg p-3 md:col-span-2" rows="5" placeholder="Mensaje" required></textarea>
        <div className="md:col-span-2">
          <button type="submit" className="px-5 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700">Enviar</button>
          {sent&&(<span className="ml-3 text-sm text-green-700">¡Enviado (demo)!</span>)}
        </div>
      </form>
    </section>
  );
}
