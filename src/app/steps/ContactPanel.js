import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactPanel() {
    return (
        <div id="contact" className="h-full snap-start">
            <div className="flex justify-center border-t mx-16">
                <div className="flex-1/2 my-12 p-4 ml-12">
                    <h2 className="pb-4 text-xl text-center">Get in Touch</h2>
                    <p className="text-xl mb-8">
                        I'm always up for a chat — whether you have a question, just want to say hi, or just feel like lurking on my LinkedIn and GitHub. I'm an open book. Go ahead, snoop away!
                    </p>
                    <div className="space-y-12">
                        <Link href="https://github.com/thisisjackryan" target="_blank" className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faGithub} className="w-16 h-16 hover:text-stone-400" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="https://linkedin.com/in/jack-ryan-3b8481262" target="_blank" className="flex items-center space-x-4 ">
                            <FontAwesomeIcon icon={faLinkedin} className="w-16 h-16 hover:text-stone-400" />
                            <span>LinkedIn</span>
                        </Link>
                        <Link href="mailto:thisisjackryan1@gmail.com"  className="flex items-center space-x-4">
                            <FontAwesomeIcon icon={faEnvelope} className="w-16 h-16 hover:text-stone-400" />
                            <span>thisisjackryan1@gmail.com</span>
                        </Link>
                    </div>
                </div>
                <div className="flex-1/2 my-12 px-4 pt-4  flex justify-center items-center border-l">
                    <Image src="/panels/contactMe.png" width={500} height={300} className='rounded-lg' alt="contact representation"/>
                </div>
            </div>
        </div>
    );
}