import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactPanel() {
    return (
        <div id="contact" className="h-full snap-start border-t ">
            <div className="flex flex-col md:flex-row justify-center md:mx-16 my-12 ">
                <div className="flex-1/2 p-4 md:ml-12">
                    <h2 className="pb-4 text-xl text-center">Get in Touch</h2>
                    <p className="text-sm md:text-xl mb-8">
                        I&apos;m always up for a chat — whether you have a question, just want to say hi, or just feel like lurking on my LinkedIn and GitHub. I&apos;m an open book. Go ahead, snoop away!
                    </p>
                    <div className="flex justify-around items-center md:block md:space-y-12 md:pl-4 ">
                        <Link href="https://github.com/thisisjackryan" target="_blank" className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faGithub} className="text-4xl hover:text-stone-400" />
                            <span className='hidden md:block'>GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com/in/jack-ryan-3b8481262" target="_blank" className="flex items-center space-x-4 ">
                            <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:text-stone-400" />
                            <span className='hidden md:block'>LinkedIn</span>
                        </Link>
                        <Link href="mailto:thisisjackryan1@gmail.com"  className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-4xl hover:text-stone-400" />
                            <span className='hidden md:block'>thisisjackryan1@gmail.com</span>
                        </Link>
                    </div>
                </div>
                <div className="flex-1/2x px-4 pt-4 flex justify-center items-center md:border-l">
                    <Image src="/panels/contactMe.png" width={500} height={300} className='hidden md:block rounded-lg' alt="contact representation"/>
                    <Image src="/panels/contactMe-smaller.png" width={500} height={300} className='rounded-lg md:hidden' alt="contact representation"/>
                </div>
            </div>
        </div>
    );
}