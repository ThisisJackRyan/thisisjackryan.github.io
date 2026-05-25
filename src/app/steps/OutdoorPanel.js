import React from 'react';
import Image from 'next/image';
import Button from '../components/button';
import Reveal from '../components/Reveal';

function OutdoorPanel() {
  return (
    <section
      id="outdoor"
      className="relative h-dvh snap-start border-t border-border-soft mx-4 md:mx-16 overflow-hidden flex items-center justify-center pt-20 pb-8"
    >
      {/* Section label */}
      <Reveal className="absolute top-20 sm:top-24 left-0 md:-left-0 text-[10px] tracking-[0.2em] uppercase text-muted">
        <span className="text-foreground">03</span>
        <span className="mx-2 opacity-40">/</span>
        <span>04</span>
        <span className="mx-3 opacity-40">—</span>
        <span>Outdoors</span>
      </Reveal>

      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-10">
        <Reveal className="flex-1/2 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-foreground/20 via-transparent to-foreground/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-xl border border-border-soft bg-background/40 backdrop-blur-sm p-2">
              <div className="hidden md:flex items-center gap-1.5 px-2 pb-2">
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="ml-3 text-[10px] tracking-[0.2em] uppercase text-muted">~/field-notes</span>
              </div>
              <Image
                src="/panels/outdoors.png"
                width={500}
                height={300}
                className="hidden md:block rounded-lg"
                alt="outdoor representation"
                priority
              />
              <Image
                src="/panels/outdoors-small.png"
                width={500}
                height={300}
                className="md:hidden rounded-lg"
                alt="outdoor representation"
                priority
              />
            </div>
          </div>
        </Reveal>

        <div className="flex-1/2 p-4 md:ml-12 md:pl-8 md:border-l md:border-border-soft">
          <Reveal>
            <div className="flex items-center gap-3 pb-5">
              <span className="block w-8 h-px bg-foreground" />
              <h2 className="text-xs tracking-[0.3em] uppercase text-muted">Field Notes</h2>
            </div>
            <h3 className="text-2xl md:text-4xl tracking-tight leading-[1.1] pb-6">
              Trading screens
              <br />
              <span className="text-muted">for silence.</span>
            </h3>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-sm md:text-lg leading-relaxed text-foreground/85">
              I&apos;ve been adventuring outdoors all my life but as I grow I have begun to discover the
              beauty of nature and more importantly silence.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm md:text-lg leading-relaxed text-foreground/85 mt-4">
              While life often gets in the way of my time outdoors, I have so many adventures to live.
              Now, I&apos;m finally starting to learn how to prioritize them and plan on sharing them
              with you.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex justify-center md:justify-start items-center mt-8 relative group">
              <Button href="#outdoor">Explore outdoor adventures</Button>
              <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md border border-border-strong bg-background text-[10px] tracking-[0.2em] uppercase text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Coming Soon
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default OutdoorPanel;
