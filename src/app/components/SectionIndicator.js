'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useActiveSection from '../hooks/useActiveSection';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'project', label: 'Projects' },
  { id: 'outdoor', label: 'Outdoors' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionIndicator() {
  const pathname = usePathname();
  const active = useActiveSection(SECTIONS.map((s) => s.id));

  // Only show on the home page — the indicator is tied to the snap-scroll
  // sections that only exist there.
  if (pathname !== '/') return null;

  return (
    <nav
      aria-label="Section navigation"
      className="hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
    >
      {SECTIONS.map((s, i) => {
        const isActive = active === s.id;
        return (
          <Link
            key={s.id}
            href={`#${s.id}`}
            aria-label={`Go to ${s.label}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span
              className={`text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                isActive ? 'opacity-70 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0'
              }`}
            >
              {String(i + 1).padStart(2, '0')} {s.label}
            </span>
            <span
              className={`relative block transition-all duration-300 ${
                isActive ? 'w-6 h-px bg-foreground' : 'w-3 h-px bg-foreground/30 group-hover:bg-foreground/60'
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
