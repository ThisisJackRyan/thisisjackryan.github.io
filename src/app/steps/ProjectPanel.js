const projects = [
  {
    name: "Unpack",
    type: "Website · Education",
    description: "A reading companion that turns a passage into questions about the text. Teachers assign readings, students join with a class code, and guided feedback helps them work through their answers.",
    detail: "Classroom workflows, AI-generated questions, and a simple student experience.",
    url: "https://unpackreading.com",
    source: "https://github.com/ThisisJackRyan/unpack",
    linkLabel: "Visit Unpack",
  },
  {
    name: "Friendly Betting",
    type: "Web app · iOS & Android in development",
    description: "Turn “I bet you” into something official. Create a bet, share it with friends, follow the picks live, and settle the score. Friendly keeps track of the outcome without handling money.",
    detail: "A live web experience, with mobile apps being developed for iOS and Android.",
    url: "https://www.friendly-bets.com",
    source: "https://github.com/ThisisJackRyan/Friendly-Betting",
    linkLabel: "Visit Friendly Betting",
  },
];

export default function ProjectPanel() {
  return (
    <section id="project" aria-labelledby="projects-title" className="panel flex flex-col justify-center">
      <p className="eyebrow">Selected work</p>
      <h2 id="projects-title" className="section-title">A few things I’ve built.</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-300">My own projects are where I put the details into practice—from the first interaction to the work behind the scenes.</p>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col border-t border-stone-700 pt-6">
            <p className="text-xs leading-relaxed text-stone-400">{project.type}</p>
            <h3 className="mt-4 text-2xl">{project.name}</h3>
            <p className="mt-5 leading-relaxed text-stone-300">{project.description}</p>
            <p className="mt-5 mb-8 text-sm leading-relaxed text-stone-400">{project.detail}</p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-4">
              <a href={project.url} className="text-link">{project.linkLabel} <span aria-hidden="true">↗</span></a>
              <a href={project.source} className="text-link" aria-label={`View ${project.name} source on GitHub`}>Source on GitHub</a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12"><a href="https://github.com/ThisisJackRyan" className="button-link">More on GitHub <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
