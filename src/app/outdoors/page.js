import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';
import { getAllAdventures, formatAdventureDate } from '../lib/adventures';

export const metadata = {
  title: 'Field Notes — Jack Ryan',
  description: 'Trip reports, field notes, and small dispatches from time spent outside.',
};

export default function OutdoorsIndex() {
  const adventures = getAllAdventures();

  return (
    <main className="relative min-h-dvh max-w-full overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-vignette" />

      <div className="mx-4 md:mx-16 pt-28 md:pt-32 pb-24">
        <Reveal className="text-[10px] tracking-[0.2em] uppercase text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Home
          </Link>
          <span className="mx-3 opacity-40">/</span>
          <span className="text-foreground">Field Notes</span>
        </Reveal>

        <Reveal>
          <div className="flex items-center gap-3 pt-10 pb-5">
            <span className="block w-8 h-px bg-foreground" />
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted">Field Notes</h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h1 className="text-3xl md:text-5xl tracking-tight leading-[1.05] max-w-3xl">
            Stories from time
            <br />
            <span className="text-muted">spent outside.</span>
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-foreground/75">
            Trip reports, half-finished maps, gear notes, and the kind of quiet
            moments that don&apos;t fit anywhere else. Updated when I have
            something worth saying.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-border-soft pt-12">
          {adventures.length === 0 ? (
            <Reveal>
              <div className="border border-dashed border-border-soft rounded-lg p-10 text-center">
                <p className="text-sm tracking-[0.2em] uppercase text-muted">
                  No adventures published yet
                </p>
                <p className="mt-3 text-foreground/70">
                  Check back soon — the first one is on the way.
                </p>
              </div>
            </Reveal>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {adventures.map((adv, i) => (
                <li key={adv.slug}>
                  <Reveal delay={Math.min(i + 1, 6)}>
                    <AdventureCard adventure={adv} />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

function AdventureCard({ adventure }) {
  const { slug, title, date, location, summary, cover } = adventure;
  return (
    <Link
      href={`/outdoors/${slug}`}
      className="group block"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border-soft bg-background/40">
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(237,237,237,0.06),transparent_70%)]" />
            <span className="relative text-[10px] tracking-[0.3em] uppercase text-muted">
              Field Note
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/0 group-hover:ring-foreground/30 transition-[box-shadow,outline] duration-500" />
      </div>

      <div className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-muted">
        {date && <span>{formatAdventureDate(date)}</span>}
        {date && location && <span className="opacity-40">·</span>}
        {location && <span>{location}</span>}
      </div>

      <h2 className="mt-3 text-2xl md:text-3xl tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] group-hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom transition-[background-size] duration-500">
          {title}
        </span>
      </h2>

      {summary && (
        <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground/70 line-clamp-3">
          {summary}
        </p>
      )}

      <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted group-hover:text-foreground transition-colors">
        <span>Read</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
