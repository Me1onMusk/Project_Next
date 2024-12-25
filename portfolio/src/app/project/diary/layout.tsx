
'use client';

import { ReactNode } from "react";
import style from './layout.module.css';
import Button from "./components/Button";
import Header from "./components/Header";

function Footer() {
    return(
        <>
        </>
    );
};

export default function Layout({children}:{children: ReactNode}) {
    return (
        <div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">소개</h1>
                        <div className="h-1 w-14 bg-green-500 rounded"></div>
                    </div>
                    
                </div>
            </div>

            <div className={style.container}>
                <div className={style.header_container}>
                    <Header 
                        leftChild={<Button text={"<"}  />}
                        title={"날짜"}
                        rightChild={<Button text={">"}  />} />
                </div>

                <main>
                    {children} 
                </main>
                <Footer />
            </div>

        </div>
    );
}; 