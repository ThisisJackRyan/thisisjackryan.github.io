import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Reveal from '../components/Reveal';

const LINKS = [
  {
    href: 'https://github.com/thisisjackryan',
    icon: faGithub,
    label: 'GitHub',
    handle: '@thisisjackryan',
    external: true,
  },
  {
    href: 'https://linkedin.com/in/jack-ryan-3b8481262',
    icon: faLinkedin,
    label: 'LinkedIn',
    handle: 'jack-ryan',
    external: true,
  },
  {
    href: 'mailto:thisisjackryan1@gmail.com',
    icon: faEnvelope,
    label: 'Email',
    handle: 'thisisjackryan1@gmail.com',
    external: false,
  },
];

export default function ContactPanel() {
  return (
    <section
      id="contact"
      className="relative h-dvh snap-start border-t border-border-soft mx-4 md:mx-16 overflow-hidden flex flex-col justify-center pt-20 pb-6"
    >
      {/* Section label */}
      <Reveal className="absolute top-20 sm:top-24 left-0 text-[10px] tracking-[0.2em] uppercase text-muted">
        <span className="text-foreground">04</span>
        <span className="mx-2 opacity-40">/</span>
        <span>04</span>
        <span className="mx-3 opacity-40">—</span>
        <span>Contact</span>
      </Reveal>

      <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        <div className="flex-1/2 w-full p-4 md:ml-12">
          <Reveal>
            <div className="flex items-center gap-3 pb-5">
              <span className="block w-8 h-px bg-foreground" />
              <h2 className="text-xs tracking-[0.3em] uppercase text-muted">Get in Touch</h2>
            </div>
            <h3 className="text-2xl md:text-4xl tracking-tight leading-[1.1] pb-6">
              Let&apos;s build
              <br />
              <span className="text-muted">something.</span>
            </h3>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-sm md:text-lg leading-relaxed text-foreground/85 mb-8">
              I&apos;m always up for a chat — whether you have a question, just want to say hi, or
              just feel like lurking on my LinkedIn and GitHub. I&apos;m an open book. Go ahead, snoop
              away!
            </p>
          </Reveal>

          <Reveal delay={2}>
            <ul className="flex flex-col gap-2 md:pl-1">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group relative flex items-center gap-4 py-3 md:py-4 border-b border-border-soft hover:border-border-strong transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="text-2xl md:text-3xl text-muted group-hover:text-foreground transition-colors duration-300"
                    />
                    <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-3">
                      <span className="text-sm md:text-base tracking-tight text-foreground">
                        {link.label}
                      </span>
                      <span className="text-xs md:text-sm text-muted truncate">{link.handle}</span>
                    </div>
                    <span className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={2}
          className="flex-1/2 px-8 flex justify-center items-center md:border-l md:border-border-soft"
        >
          <div className="relative group">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-foreground/20 via-transparent to-foreground/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-xl border border-border-soft bg-background/40 backdrop-blur-sm p-2">
              <div className="hidden md:flex items-center gap-1.5 px-2 pb-2">
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="ml-3 text-[10px] tracking-[0.2em] uppercase text-muted">~/say-hi</span>
              </div>
              <Image
                src="/panels/contactMe.png"
                width={500}
                height={300}
                className="hidden md:block rounded-lg"
                alt="contact representation"
                priority
              />
              <Image
                src="/panels/contactMe-smaller.png"
                width={500}
                height={300}
                className="rounded-lg md:hidden mt-2"
                alt="contact representation"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <Reveal delay={3} className="pt-6 mt-6 border-t border-border-soft flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted">
        <span>© {new Date().getFullYear()} Jack Ryan</span>
        <span>Crafted with care · Next.js · Tailwind</span>
      </Reveal>
    </section>
  );
}
