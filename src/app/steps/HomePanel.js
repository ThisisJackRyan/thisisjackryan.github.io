import React from 'react';

export default function HomePanel() {
  return (
    <section
      id="home"
      className="relative mx-4 flex justify-center items-center h-dvh snap-start"
    >
      {/* Section meta */}
      <div className="absolute top-20 sm:top-24 left-6 sm:left-10 text-[10px] tracking-[0.2em] uppercase text-muted animate-fade-in delay-1">
        <span className="text-foreground">01</span>
        <span className="mx-2 opacity-40">/</span>
        <span>04</span>
        <span className="hidden sm:inline">
          <span className="mx-3 opacity-40">—</span>
          <span>Index</span>
        </span>
      </div>

      {/* Status badge */}
      <div className="absolute top-20 sm:top-24 right-6 sm:right-10 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted animate-fade-in delay-2">
        <span className="relative flex w-1.5 h-1.5">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-dot" />
          <span className="relative w-1.5 h-1.5 rounded-full bg-green-400" />
        </span>
        <span className="sm:hidden">Available</span>
        <span className="hidden sm:inline">Available — Summer 2026</span>
      </div>

      <div className="space-y-14 max-w-md w-full">
        {/* Top corner brackets */}
        <div className="flex justify-between h-12">
          <div className="border-l-4 border-t-4 border-foreground w-12 animate-corner" />
          <div className="border-r-4 border-t-4 border-foreground w-12 animate-corner delay-1" />
        </div>

        {/* Intro copy */}
        <div className="flex flex-col items-start mx-3 sm:mx-12 text-lg leading-relaxed">
          <p className="pb-4 text-muted animate-fade-up">
            <span className="text-foreground">$</span> whoami
          </p>
          <p className="animate-fade-up delay-1">Jack here. I&#39;m an</p>
          <p className="animate-fade-up delay-2">aspiring Software&nbsp;Engineer,</p>
          <p className="animate-fade-up delay-3">part-time outdoor&nbsp;enthusiast,</p>
          <p className="animate-fade-up delay-4">full-time student,</p>
          <p className="animate-fade-up delay-5 flex items-center">
            and lifetime tinkerer
            <span className="inline-block w-2 h-5 ml-1 bg-foreground translate-y-0.5 animate-blink" />
          </p>
        </div>

        {/* Bottom corner brackets */}
        <div className="flex justify-between h-12">
          <div className="border-l-4 border-b-4 border-foreground w-12 animate-corner delay-2" />
          <div className="border-r-4 border-b-4 border-foreground w-12 animate-corner delay-3" />
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#project"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-200 animate-fade-in delay-6"
        aria-label="Scroll to projects"
      >
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-foreground/60 to-transparent" />
      </a>
    </section>
  );
}
