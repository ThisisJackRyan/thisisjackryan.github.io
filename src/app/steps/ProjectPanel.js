import React from 'react';
import Image from 'next/image';
import Button from '../components/button';
import Reveal from '../components/Reveal';

const STACK = [
  { name: 'Django', icon: '/icons/django.png' },
  { name: 'Next.js', icon: '/icons/nextjs.png' },
  { name: 'Vue.js', icon: '/icons/vuejs.png' },
];

function ProjectPanel() {
  return (
    <section
      id="project"
      className="relative h-dvh snap-start flex flex-col justify-center gap-6 md:gap-10 border-t border-border-soft md:mx-16 max-w-full overflow-hidden pt-20 pb-8"
    >
      {/* Section label */}
      <Reveal className="absolute top-20 sm:top-24 left-4 md:left-0 text-[10px] tracking-[0.2em] uppercase text-muted">
        <span className="text-foreground">02</span>
        <span className="mx-2 opacity-40">/</span>
        <span>04</span>
        <span className="mx-3 opacity-40">—</span>
        <span>Projects</span>
      </Reveal>

      <div className="flex justify-center">
        <div className="flex-1/2 p-4 md:pr-8 md:ml-12 lg:border-r lg:border-border-soft">
          <Reveal>
            <div className="flex items-center gap-3 pb-5">
              <span className="block w-8 h-px bg-foreground" />
              <h2 className="text-xs tracking-[0.3em] uppercase text-muted">Build Log</h2>
            </div>
            <h3 className="text-2xl md:text-4xl tracking-tight leading-[1.1] pb-6">
              Always shipping
              <br />
              <span className="text-muted">something.</span>
            </h3>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-sm md:text-lg leading-relaxed text-foreground/85">
              I&#39;m always working on something — whether it&#39;s a side project, a school
              assignment, or something for work. It&#39;s rare that a day goes by where I&#39;m not coding.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm md:text-lg leading-relaxed text-foreground/85 mt-4">
              While I&#39;m still exploring and figuring out my niche in the world of software, web
              development has been my main focus so far, thanks to both work and personal projects.
              That said, I do enjoy diving into other areas of software whenever I get the chance.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex justify-center md:justify-start items-center mt-8">
              <Button href="https://github.com/ThisisJackRyan">Check out my projects</Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="hidden flex-1/2 lg:flex justify-center items-center">
          <div className="relative group">
            {/* terminal-style frame */}
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-foreground/20 via-transparent to-foreground/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-xl border border-border-soft bg-background/40 backdrop-blur-sm p-2">
              <div className="flex items-center gap-1.5 px-2 pb-2">
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="block w-2 h-2 rounded-full bg-foreground/20" />
                <span className="ml-3 text-[10px] tracking-[0.2em] uppercase text-muted">~/projects</span>
              </div>
              <Image
                src="/panels/projects.png"
                width={500}
                height={300}
                className="rounded-lg"
                alt="coding representation"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Tech stack */}
      <Reveal delay={3} className="md:mx-8">
        <div className="flex items-center gap-3 justify-center pb-6">
          <span className="block w-8 h-px bg-border-strong" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted">Tools of the trade</span>
          <span className="block w-8 h-px bg-border-strong" />
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto px-4">
          {STACK.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-xl border border-border-soft hover:border-border-strong transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
                <Image src={tech.icon} alt={`${tech.name} logo`} fill className="object-contain" />
              </div>
              <div className="text-xs md:text-sm tracking-tight text-muted group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default ProjectPanel;
