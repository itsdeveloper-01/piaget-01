// components/Navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "/maternal", label: "Maternal" },
  { href: "/kinder", label: "Kinder" },
  { href: "/primaria", label: "Primaria" },
  { href: "/secundaria", label: "Secundaria" },
  { href: "/preparatoria", label: "Preparatoria" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/admision", label: "Admisión" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setOnTop(window.scrollY < 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${onTop ? "bg-[#EBEBEB]" : "bg-[#EBEBEB]/90 backdrop-blur"} `}>
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            width={160}
            height={44}
            alt="Instituto Piaget"
            className="h-10 w-auto"
            priority
          />
          <span className="sr-only">Inicio</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline underline-offset-4">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Burger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-lucide-menu" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t bg-[#EBEBEB]">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
