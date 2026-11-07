import Image from "next/image";

export default function OutdoorPanel() {
  return (
    <section id="outdoor" aria-labelledby="about-title" className="panel grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="eyebrow">About Jack</p>
        <h2 id="about-title" className="section-title">Lifetime tinkerer.<br />Part-time outdoor enthusiast.</h2>
        <p className="mt-6 leading-relaxed text-stone-300">I like figuring out how things work—and making them useful. Software gives me a way to turn that curiosity into something people can actually use.</p>
        <p className="mt-6 leading-relaxed text-stone-400">Away from the keyboard, I’m usually looking for a little more time outdoors. I’ve been adventuring all my life, and I’m still finding new places to explore and reasons to unplug.</p>
      </div>
      <Image src="/panels/outdoors.png" width={5712} height={4284} sizes="(max-width: 767px) 100vw, 50vw" className="mx-auto h-auto w-full max-w-lg rounded-lg" alt="An illustration of an outdoor adventure" />
    </section>
  );
}
