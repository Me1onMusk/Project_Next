
import { ReactNode } from "react";
import style from './layout.module.css';
import Link from "next/link";

function Header() {
    return (
        <header>
            <Link href={'/project/library'}>📚태영 서점</Link>
        </header>
    );
};

function Footer() {
    return (
        <footer>
            <h3>제작 @Kim</h3>
            <h3>0개의 도서가 등록되어 있습니다.</h3>
        </footer>
    );
};

export default function Layout({children}:{children: ReactNode}) {
    return (
        <div className="container mx-auto flex px-5 py-20 pb-0 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                
                <div className="lg:w-1/2 w-full mb-6 lg:mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">책 검색 프로젝트</h1> 
                    <div className="h-1 w-28 bg-green-500 rounded"></div> 
                </div>

                <div className={style.container}>
                    <Header />
                    
                    <main>
                        {children} 
                    </main>
                    
                    <Footer />
                </div>
            
            </div>
        </div>
    );
}; 