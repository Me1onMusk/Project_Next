
import { ReactNode } from "react";
import style from './layout.module.css';

export default function Layout({children}:{children: ReactNode}) {
    return (
        <div className="container mx-auto flex px-5 py-20 pb-0 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                
                <div className="lg:w-1/2 w-full mb-10 lg:mb-15">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">책 검색 프로젝트</h1> 
                    <div className="h-1 w-28 bg-green-500 rounded"></div> 
                </div>

                <div className={style.container}>
                    <main>
                        {children} 
                    </main>
                </div>
            
            </div>
        </div>
    );
}; 