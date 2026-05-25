import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Reveal from '../../components/Reveal';
import {
  getAllAdventures,
  getAdventureBySlug,
  formatAdventureDate,
} from '../../lib/adventures';

export function generateStaticParams() {
  return getAllAdventures({ includeDrafts: true }).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getAdventureBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Field Notes`,
    description: post.summary || undefined,
    openGraph: post.cover
      ? { images: [{ url: post.cover }] }
      : undefined,
  };
}

export default async function AdventurePage({ params }) {
  const { slug } = await params;
  const post = getAdventureBySlug(slug);
  if (!post) notFound();

  return (
    <main className="relative min-h-dvh max-w-full overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-vignette" />

      <article className="mx-4 md:mx-16 pt-28 md:pt-32 pb-32">
        <Reveal className="text-[10px] tracking-[0.2em] uppercase text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="mx-3 opacity-40">/</span>
          <Link href="/outdoors" className="hover:text-foreground transition-colors">
            Field Notes
          </Link>
          <span className="mx-3 opacity-40">/</span>
          <span className="text-foreground">{post.title}</span>
        </Reveal>

        <header className="mt-10 max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-muted">
              {post.date && <span>{formatAdventureDate(post.date)}</span>}
              {post.date && post.location && <span className="opacity-40">·</span>}
              {post.location && <span>{post.location}</span>}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              {post.title}
            </h1>
          </Reveal>
          {post.summary && (
            <Reveal delay={2}>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/75 max-w-2xl">
                {post.summary}
              </p>
            </Reveal>
          )}
        </header>

        {post.cover && (
          <Reveal delay={3}>
            <div className="relative mt-12 w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-xl border border-border-soft">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <Reveal delay={4}>
          <div className="mt-14 max-w-2xl prose-outdoor">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-border-soft pt-8 max-w-2xl">
          <Link
            href="/outdoors"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>All field notes</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
