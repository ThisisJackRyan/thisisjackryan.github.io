export default function HomePanel() {
  return (
    <section id="home" aria-labelledby="intro-title" className="panel panel--hero flex items-center justify-center border-0">
      <div className="corner-frame w-full max-w-2xl px-6 py-12 sm:px-14 sm:py-16">
        <p className="mb-6 text-stone-400">Oh Hey There...</p>
        <p className="mb-4 text-stone-300">Jack here.</p>
        <h1 id="intro-title" className="text-3xl leading-tight sm:text-4xl">
          You built a tool with AI. Let’s turn it into a product.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
          I’m a software engineer helping founders and business owners turn
          working prototypes and internal tools into software they can launch,
          charge for, and maintain.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href="#contact" className="button-link">Tell me what you built</a>
          <a href="#project" className="text-link">See my work <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
