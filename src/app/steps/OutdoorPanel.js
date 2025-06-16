import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function OutdoorPanel() {
    return (
        <div id='outdoor' className='h-dvh snap-start border-t  mx-4 md:mx-16 overflow-y-hidden'>
            <div className='flex flex-col-reverse md:flex-row md:my-12 justify-center pt-4'>
                <div className='flex-1/2 flex justify-center items-center'>
                    <Image 
                        src='/panels/outdoors.png' 
                        width={500} 
                        height={300} 
                        className='hidden md:block rounded-lg'
                        alt="outdoor representation"
                        priority
                        />
                    <Image 
                        src='/panels/outdoors-small.png' 
                        width={500} 
                        height={300} 
                        className='md:hidden rounded-lg'
                        alt="outdoor representation"
                        priority
                        />
                </div>
                <div className='flex-1/2 p-4 md:ml-12 pl-8 md:border-l'>
                    <h2 className='pb-4 text-xl text-center'>Outdoors</h2>
                    <p className='text-sm md:text-xl'>I&apos;ve been adventuring outdoors all my life but as I grow I have begun to discover the beauty of nature and more importantly silence. </p>
                    <br />
                    <p className='text-sm md:text-xl'>While life often gets in the way of my time outdoors, I have so many adventures to live. Now, I&apos;m finally starting to learn how to prioritize them and plan on sharing them with you. </p>
                    <div className='flex justify-center items-center m-8 relative group'>
                        {/* TODO: change this href to /outdoors */}
                        <Link href="#outdoor" className='bg-stone-900 border rounded-4xl px-8 py-4 text-white hover:bg-stone-700'>
                            Explore Outdoor Adventures
                        </Link>
                        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                            Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutdoorPanel;