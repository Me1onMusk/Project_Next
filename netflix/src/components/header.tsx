
'use client';

import Image from "next/image";
import SearchInput from "./search-input";

export default function Header() {
    return (
        <header className="flex fixed top-0 left-0 right-0 p-4 bg-gray-900 justify-between">
            <nav className="flex gap-4">
                <Image 
                    src='/logo/tmdbflix_logo.png' 
                    alt="tmbdflix_logo" 
                    width={100} 
                    height={100} 
                    className="!w-70 !h-auto" />
                <ul className="flex gap-2 text-white">
                    <li>Movies</li>
                    <li>Dramas</li>
                </ul>
            </nav>

            <div className="flex w-full max-w-72 gap-2 items-center border border-white rounded-md p-2 text-white"> 
                <i className="fas fa-search" /> 
                <input className="bg-transparent" placeholder="Search Movies" />  
            </div>
        </header>
    );
};