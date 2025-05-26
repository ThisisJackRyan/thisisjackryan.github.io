import React from 'react';
import Link from 'next/link';

const Header = () => (
    <div className='flex justify-between items-center px-8 py-4'>
        <div>
            <Link href="/">Thisisjackryan</Link>
        </div>
        <div>
            <div className="flex justify-around items-center gap-6">
                <Link href="#projects">Projects</Link>
                <Link href="#outdoors">Outdoors</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </div>

    </div>
);

export default Header;