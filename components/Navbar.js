"use client";
import { useState } from "react";
import Logo from "@/components/shared/Logo";
import Link from "next/link";

export default function Navbar(){
  const [open,setOpen]=useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#EBEBEB] backdrop-blur border-b border-gray-200 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-[var(--navbar-h)] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="w-9 h-9"/><span className="font-semibold tracking-tight">Instituto Piaget</span>
        </Link>
        <nav aria-label="Principal" className="hidden md:block w-auto">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link href="/maternal" className="hover:text-brand-700">Maternal</Link></li>
            <li><Link href="/kinder" className="hover:text-brand-700">Kinder</Link></li>
            <li><Link href="/primaria" className="hover:text-brand-700">Primaria</Link></li>
            <li><Link href="/secundaria" className="hover:text-brand-700">Secundaria</Link></li>
            <li><Link href="/preparatoria" className="hover:text-brand-700">Preparatoria</Link></li>
            <li><Link href="/menu1" className="hover:text-brand-700">Menú 1</Link></li>
            <li><Link href="/menu2" className="hover:text-brand-700">Menú 2</Link></li>
            <li><a href="/#contacto" className="hover:text-brand-700">Contacto</a></li>
          </ul>
        </nav>
        <button aria-label="Abrir menú" onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
      {open&&(
        <div className="md:hidden border-t bg-white shadow-sm w-full">
          <nav className="w-full px-4 py-3">
            <ul className="grid gap-3 text-sm">
              <li><Link href="/maternal" onClick={()=>setOpen(false)}>Maternal</Link></li>
              <li><Link href="/kinder" onClick={()=>setOpen(false)}>Kinder</Link></li>
              <li><Link href="/primaria" onClick={()=>setOpen(false)}>Primaria</Link></li>
              <li><Link href="/secundaria" onClick={()=>setOpen(false)}>Secundaria</Link></li>
              <li><Link href="/preparatoria" onClick={()=>setOpen(false)}>Preparatoria</Link></li>
              <li><Link href="/menu1" onClick={()=>setOpen(false)}>Menú 1</Link></li>
              <li><Link href="/menu2" onClick={()=>setOpen(false)}>Menú 2</Link></li>
              <li><a href="/#contacto" onClick={()=>setOpen(false)}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
