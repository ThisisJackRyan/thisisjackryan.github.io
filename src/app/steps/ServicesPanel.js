const stages = [
  {
    number: "01",
    title: "Figure out what’s next",
    description: "We start with your tool, who it helps, and what you want to sell. I review what’s there and map out what can stay, what needs work, and a practical scope for launch.",
    outcome: "A clear assessment and build plan.",
  },
  {
    number: "02",
    title: "Build for customers",
    description: "I build the pieces your product needs: accounts, payments, onboarding, and the reliability to support people beyond your own team—all while keeping each customer’s data separate.",
    outcome: "A product ready for its first customers.",
  },
  {
    number: "03",
    title: "Launch with a plan",
    description: "We get it deployed, make problems easier to spot, and document how it works. We agree on what you’ll own and where ongoing support would help.",
    outcome: "A launch, a handoff, and clear next steps.",
  },
];

export default function ServicesPanel() {
  return (
    <section id="work" aria-labelledby="work-title" className="panel flex flex-col justify-center">
      <p className="eyebrow">Work with me</p>
      <h2 id="work-title" className="section-title max-w-3xl">It works for you. Now it needs to work for customers.</h2>
      <p className="mt-6 max-w-3xl text-stone-300 leading-relaxed">
        You’ve built something useful. Maybe you vibe-coded it over a weekend,
        or your team already uses it every day. I help bridge the gap between
        a working tool and a product someone else can use and pay for.
      </p>
      <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {stages.map((stage) => (
          <li key={stage.number} className="border-t border-stone-700 pt-6">
            <span className="text-sm text-stone-400" aria-hidden="true">{stage.number}</span>
            <h3 className="mt-4 text-xl">{stage.title}</h3>
            <p className="mt-4 leading-relaxed text-stone-400">{stage.description}</p>
            <p className="mt-6 text-sm text-stone-300">{stage.outcome}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm leading-relaxed text-stone-400">Start with an assessment. Scope the build once we know what your tool needs.</p>
    </section>
  );
}
