import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
    {
        name: 'Unpack',
        site: 'https://unpackreading.com',
        siteLabel: 'unpackreading.com',
        source: 'https://github.com/ThisisJackRyan/unpack',
        description:
            'A reading website for classrooms. Students hop in with a class code, read a passage, and answer AI questions written for that specific passage — then get guided feedback on what they wrote.',
    },
    {
        name: 'Friendly Betting',
        site: 'https://www.friendly-bets.com',
        siteLabel: 'friendly-bets.com',
        source: 'https://github.com/ThisisJackRyan/Friendly-Betting',
        description:
            'Create a bet, share it with your friends, track everyone’s picks live, and settle the score at the end. The app never touches real money — it just keeps score.',
        note: 'iOS + Android versions are in development — not in the app stores yet.',
    },
];

// Same corner-bracket motif as the home panel, just thinner.
function Corners() {
    return (
        <>
            <span aria-hidden="true" className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2" />
            <span aria-hidden="true" className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2" />
            <span aria-hidden="true" className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2" />
            <span aria-hidden="true" className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2" />
        </>
    );
}

const linkClass = 'underline underline-offset-4 decoration-stone-600 hover:text-stone-400';

function LatelyPanel() {
    return (
        <section id="lately" className="min-h-dvh snap-start border-t mx-4 md:mx-16 flex flex-col justify-center pt-20 pb-12">
            <h2 className="pb-4 text-xl text-center">Lately</h2>
            <p className="text-sm md:text-xl text-center max-w-2xl mx-auto px-4">
                A couple of things I&apos;ve built recently and actually put out into the world.
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto mt-8 md:mt-12 px-2 md:px-4">
                {projects.map((project) => (
                    <article key={project.name} className="relative p-6 md:p-8">
                        <Corners />
                        <h3 className="text-lg md:text-2xl">{project.name}</h3>
                        <p className="text-xs md:text-sm text-stone-400 mb-4">{project.siteLabel}</p>
                        <p className="text-sm md:text-base leading-relaxed">{project.description}</p>
                        {project.note && (
                            <p className="text-xs md:text-sm text-stone-400 mt-3">{project.note}</p>
                        )}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
                            <Link href={project.site} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                Visit site&nbsp;↗
                            </Link>
                            <Link href={project.source} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                Source&nbsp;↗
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link
                    href="https://github.com/ThisisJackRyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm md:text-base hover:text-stone-400"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" aria-hidden="true" />
                    <span>Everything else lives on my GitHub</span>
                </Link>
            </div>
        </section>
    );
}

export default LatelyPanel;
