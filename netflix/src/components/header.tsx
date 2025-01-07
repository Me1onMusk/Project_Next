
'use client';

import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { useSearchStore } from '../utils/zustand/store';

export default function Header() {

    const { searchTerm, setSearchTerm } = useSearchStore();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value); // 검색어 상태 업데이트
    };

    return (
        <header className="flex fixed top-0 left-0 right-0 p-4 bg-gray-900 justify-between z-50 items-center">
            <nav className="flex gap-4">
                <Link href={'/'}>
                    <Image 
                        src='/logo/tmdbflix_logo.png' 
                        alt="tmbdflix_logo" 
                        width={50} 
                        height={30} 
                        className="!w-20 !h-auto" />
                </Link>
                <ul className="flex gap-2 text-white">
                    <li>Movies</li>
                    <li>Dramas</li>
                </ul>
            </nav>

            <div className="flex w-full max-w-72 gap-2 items-center border border-white rounded-md p-2 text-white"> 
                <i className="fas fa-search" /> 
                <input 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-transparent" 
                    placeholder="Search Movies" />  
            </div>
        </header>
    );
};