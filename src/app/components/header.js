'use client'
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className='fixed w-full flex justify-between items-center px-8 py-4 z-50'>
                <div>
                    <Link href="#home" >Thisisjackryan</Link>
                </div>
                <div>
                    <div className="hidden sm:flex justify-around items-center gap-6">
                        <Link href="#project">Projects</Link>
                        <Link href="#outdoor">Outdoors</Link>
                        <Link href="#contact">Contact</Link>
                    </div>
                    
                    <div className='flex justify-around items-center sm:hidden'>
                        <button onClick={toggleMenu} className="text-xl">
                            {menuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                        </button>
                    </div>
                </div>
            </div>
            <div 
                className={`fixed z-40 bg-black flex justify-center items-center top-0 right-0 h-screen w-full transform transition-transform duration-300 ease-in-out sm:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-start p-8 gap-6 mt-16">
                    <Link href="#project" onClick={() => setMenuOpen(false)} className="text-lg">Projects</Link>
                    <Link href="#outdoor" onClick={() => setMenuOpen(false)} className="text-lg">Outdoors</Link>
                    <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-lg">Contact</Link>
                </div>
            </div>
        </>
    )
};

export default Header;