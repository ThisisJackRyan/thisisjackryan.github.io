import Link from 'next/link';

export default function Button({ children, href, external = false }) {
  const isExternal = external || (typeof href === 'string' && /^https?:\/\//.test(href));
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Link href={href} {...linkProps} className="inline-block">
      <div className="group relative border border-border-strong hover:border-foreground rounded-lg overflow-hidden transition-colors duration-300">
        {/* left stripe */}
        <div className="absolute inset-y-0 left-0 w-4 bg-foreground border-r border-border-strong" />
        <div className="relative pl-8 pr-5 py-2 md:pl-12 md:pr-7 md:py-3 flex items-center gap-3">
          {/* sliding fill */}
          <span className="absolute inset-y-0 left-4 right-0 w-0 group-hover:w-[calc(100%-1rem)] group-focus-visible:w-[calc(100%-1rem)] bg-foreground transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />
          <span className="relative z-10 text-foreground group-hover:text-background group-focus-visible:text-background transition-colors duration-300 text-sm md:text-base tracking-tight">
            {children}
          </span>
          <span className="relative z-10 text-foreground group-hover:text-background group-focus-visible:text-background transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
