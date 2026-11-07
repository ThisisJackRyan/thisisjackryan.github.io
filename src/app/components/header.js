"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  { href: "/#work", label: "Work with me" },
  { href: "/#project", label: "Selected work" },
  { href: "/#outdoor", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header onKeyDown={handleKeyDown} className="fixed inset-x-0 top-0 z-50 border-b border-stone-800 bg-[#0a0a0a]/95">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-16">
        <Link href="/#home" onClick={() => setMenuOpen(false)} className="text-sm">Thisisjackryan</Link>
        <button ref={toggleRef} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)} className="min-h-11 px-3 text-sm md:hidden">
          {menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "+"}</span>
        </button>
        <ul id="main-navigation" className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-2 border-t border-stone-800 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:border-0 md:pt-0`}>
          {links.map((link) => (
            <li key={link.href}><Link href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-stone-300 hover:text-white md:py-1">{link.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
