import React from 'react';
import Link from 'next/link';

const gaps = [
    ['accounts', 'sign-up, logins, who can see what'],
    ['billing', 'so people can actually pay you'],
    ['reliability', 'backups, error handling, not falling over'],
    ['launch', 'hosting, a real domain, getting it out the door'],
];

function HelpPanel() {
    return (
        <section id="help" className="min-h-dvh snap-start border-t mx-4 md:mx-16 flex items-center pt-20 pb-12">
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex-1/2 p-4 md:pr-8 md:ml-12 md:border-r">
                    <h2 className="pb-4 text-xl text-center">Vibe-Coded Something?</h2>
                    <p className="text-sm md:text-xl">
                        A lot of people are building their own internal tools with AI now — and honestly, a lot of them are pretty good. The tricky part starts when other people want to use it, or pay for it.
                    </p>
                    <br />
                    <p className="text-sm md:text-xl">
                        That&apos;s the part I like. I can help you take a tool you&apos;ve vibe-coded and turn it into a product you can begin to sell — keeping what already works and only adding what you actually need.
                    </p>
                    <div className="flex justify-center items-center m-8">
                        <Link
                            href="mailto:thisisjackryan1@gmail.com?subject=Turning%20my%20tool%20into%20a%20product"
                            className="bg-stone-900 border text-center rounded-4xl px-8 py-4 text-white hover:bg-stone-700"
                        >
                            Tell me what you built
                        </Link>
                    </div>
                </div>

                <div className="flex-1/2 p-4 md:px-12 flex justify-center items-center">
                    <div className="w-full max-w-md space-y-6">
                        <div aria-hidden="true" className="flex justify-between h-8">
                            <div className="border-l-4 border-t-4 w-8"></div>
                            <div className="border-r-4 border-t-4 w-8"></div>
                        </div>
                        <div className="mx-3 sm:mx-8">
                            <p className="text-sm md:text-base text-stone-400 pb-4">the usual gaps:</p>
                            <ul className="space-y-4">
                                {gaps.map(([title, detail]) => (
                                    <li key={title} className="flex gap-3">
                                        <span aria-hidden="true" className="shrink-0">[&nbsp;]</span>
                                        <span className="text-sm md:text-base">
                                            {title}
                                            <span className="block text-xs md:text-sm text-stone-400">{detail}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs md:text-sm text-stone-400 pt-4">(only the ones you need)</p>
                        </div>
                        <div aria-hidden="true" className="flex justify-between h-8">
                            <div className="border-l-4 border-b-4 w-8"></div>
                            <div className="border-r-4 border-b-4 w-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HelpPanel;
