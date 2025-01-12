
'use client';

import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Header() {

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    };

    return (
        <header className="flex w-full top-0 left-0 right-0 p-4 justify-between">
            <nav className="flex gap-4">
                <Link href={'/project/netflix'}>
                    <Image 
                        src='/logo/tmdbflix.png' 
                        alt="tmbdflix_logo" 
                        width={50} 
                        height={30} 
                        className="!w-32 !h-auto" />
                </Link>
                <ul className="flex gap-2 text-black dark:text-white text-2xl items-center">
                    <li>Movies</li>
                    <li>Dramas</li>
                </ul>
            </nav>
            
            <div className="flex w-full max-w-72 gap-2 items-center border border-black dark:border-white rounded-md p-2 text-black dark:text-white"> 
                <i className="fas fa-search" /> 
                <input 
                    className="bg-transparent" 
                    placeholder="Search Movies" />  
            </div>
        </header>
    );
};