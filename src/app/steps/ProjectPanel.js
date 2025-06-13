import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectPanel() {
    return (
        <div id='project' className='h-dvh snap-start'>
            <div className='flex justify-center border-t mx-16'>
                <div className='flex-1/2 my-12 p-4 pr-8 ml-12 border-r'>
                    <h2 className='pb-4 text-xl text-center'>Projects</h2>
                    <p className='text-xl'>I&#39;m always working on something — whether it&#39;s a side project, a school assignment, or something for work. It&#39;s rare that a day goes by where I&#39;m not coding. </p>
                    <br />
                    <p className='text-xl'>While I&#39;m still exploring and figuring out my niche in the world of software, web development has been my main focus so far, thanks to both work and personal projects. That said, I do enjoy diving into other areas of software whenever I get the chance.</p>
                    <div className='flex justify-center items-center m-8 relative group'>
                        {/* TODO: change this href to /projects */}
                        <Link href="#project" className='bg-stone-900 border rounded-4xl px-8 py-4 text-white hover:bg-stone-700'>
                            Check out my Projects
                        </Link>
                        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                            Coming Soon
                        </div>
                    </div>
                   
                </div>
                <div className='flex-1/2 my-12 flex justify-center items-center'>
                    <Image src='/panels/projects.png' width={500} height={300} className='rounded-lg' alt="coding representation"/>
                </div>
            </div>
            <div className='m-8 justify-around flex'>
                <div className='flex flex-col justify-center items-center'>
                    <Image src='/icons/django.png' width={100} height={100} alt="django logo"/>
                    <div>Django</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image src='/icons/nextjs.png' width={100} height={100} alt="next.js logo"/>
                    <div>Next.js</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image src='/icons/vuejs.png' width={100} height={100}  alt="vue.js logo"/>
                    <div>Vue.js</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPanel;