
'use client';

import SearchBar from './components/searchbar';
import style from './page.module.css';
import Link from "next/link";

export default function Page() {
    return (
        <div className="container mx-auto flex px-5 py-20 pb-0 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                <div className="lg:w-1/2 w-full mb-6 lg:mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">책 검색 프로젝트</h1> 
                    <div className="h-1 w-28 bg-green-500 rounded"></div> 
                </div>

                <div className={style.container}>
                    <header>
                        <Link href={'/project/book'}>📚OneBite Books</Link>
                    </header>
                    <SearchBar />
                    <main>
                        <section> 
                            <h3>📖 지금 추천하는 도서</h3> 
                        </section>
                        <section>
                            <h3>📖 등록된 모든 도서</h3> 
                        </section>
                    </main>

                    <footer>
                        <h3>제작 @Kim</h3>
                        <h3>0개의 도서가 등록되어 있습니다.</h3>
                    </footer>
                </div>

            </div>
        </div>
    );
};