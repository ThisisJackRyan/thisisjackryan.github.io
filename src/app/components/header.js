'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import useActiveSection from '../hooks/useActiveSection';

const NAV = [
  { id: 'project', label: 'Projects' },
  { id: 'outdoor', label: 'Outdoors' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(['home', 'project', 'outdoor', 'contact']);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="flex justify-between items-center px-6 sm:px-8 py-4 backdrop-blur-md bg-background/60 border-b border-border-soft">
          <Link
            href="#home"
            className="flex items-center gap-2 text-sm group"
          >
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-dot" />
              <span className="relative w-2 h-2 rounded-full bg-green-400" />
            </span>
            <span className="tracking-tight">
              thisisjackryan
              <span className="text-muted">.com</span>
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-1 text-sm">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3 py-1.5 transition-colors duration-200 ${
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-foreground" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={toggleMenu}
            className="sm:hidden text-xl p-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 backdrop-blur-xl bg-background/95 flex items-center justify-center sm:hidden transition-all duration-300 ease-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-start gap-8 px-10">
          {NAV.map((item, i) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="group text-2xl flex items-baseline gap-4"
            >
              <span className="text-xs text-muted">0{i + 2}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
