import Image from "next/image";

const email = "thisisjackryan1@gmail.com";
const inquiry = `mailto:${email}?subject=${encodeURIComponent("Let’s turn my tool into a product")}&body=${encodeURIComponent("Hi Jack,\n\nHere’s what I’ve built:\n\nWho uses it today:\n\nWhat I’d like to sell:\n\nLink (if available):\n")}`;

export default function ContactPanel() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="panel grid items-center gap-10 md:grid-cols-2">
      <div>
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-title" className="section-title">Show me what you’ve built.</h2>
        <p className="mt-6 leading-relaxed text-stone-300">Send me a link or a short description of your tool, who uses it today, and what you’d like to sell. We’ll start by figuring out what it needs next.</p>
        <a href={inquiry} className="button-link mt-8">Tell me about your tool <span aria-hidden="true">↗</span></a>
        <a href={`mailto:${email}`} className="mt-6 block [overflow-wrap:anywhere] text-sm text-link">{email}</a>
        <div className="mt-10 flex flex-wrap gap-6">
          <a href="https://github.com/thisisjackryan" className="text-link">GitHub</a>
          <a href="https://linkedin.com/in/jack-ryan-3b8481262" className="text-link">LinkedIn</a>
        </div>
      </div>
      <Image src="/panels/contactMe-smaller.png" width={1024} height={839} sizes="(max-width: 767px) 100vw, 50vw" className="mx-auto h-auto w-full max-w-lg rounded-lg" alt="An illustration about getting in touch" />
    </section>
  );
}
