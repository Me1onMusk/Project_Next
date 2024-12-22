
'use client';

import { useTheme } from 'next-themes'
import { FaMoon } from 'react-icons/fa';
import Link from 'next/link';
import { BsSunFill } from 'react-icons/bs';

// 다크 모드 전환 버튼 // 
// function mode(theme ?: string) {
//     return (
//         theme === 'dark' ? 
//         (
            
//         ) : 
//         (
            
//         )
//     )
// };

export default function Header() {
    const { theme, setTheme } = useTheme(); 
    const onClickButton = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

    return (
        <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">태영의 포트폴리오</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href={'/'}>홈</Link>
                    <a className="mr-5 hover:text-gray-900">소개</a>
                    <a className="mr-5 hover:text-gray-900">자격증|수료증</a>
                    <a className="mr-5 hover:text-gray-900">포트폴리오</a>
                </nav>
                <div 
                    className="relative w-16 h-8 flex items-center dark:gray-600 bg-gray-600 cursor-pointer rounded-full p-1"
                    onClick={onClickButton}>
                    <BsSunFill className='text-yellow-400' size={20} />
                    <div 
                        className='absolute bg-white w-6 h-6 rounded-full shadow-md transfor transition-transform duration-300'
                        style={theme === 'light' ? {left:'2px'} : {right:'2px'}}>
                    </div>
                    <FaMoon className='ml-auto text-yellow-400' size={18} /> 
                </div>
            </div>
        </header>
        </>
    );
};