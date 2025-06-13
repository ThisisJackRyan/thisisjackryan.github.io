import React from 'react';
import Link from 'next/link';

const Header = () => (
    <div className='fixed w-full flex justify-between items-center px-8 py-4'>
        <div>
            <Link href="/">Thisisjackryan</Link>
        </div>
        <div>
            <div className="flex justify-around items-center gap-6">
                <Link href="#project">Projects</Link>
                <Link href="#outdoor">Outdoors</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </div>

    </div>
);

export default Header;