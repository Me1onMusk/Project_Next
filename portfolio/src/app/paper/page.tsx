
'use client';

import Image from "next/image";

export default function Page() {
    return (
        <div className="paper_container">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">수료증</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/cs.png'} width={300} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">네이버 커넥트재단</h3>
                                <h2 className="text-lg title-font mb-4">컴퓨터 과학</h2>
                                <p className="leading-relaxed text-base">발급번호 A20230830-012385</p>
                                <p className="leading-relaxed text-base">수료일 2023.08.30</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/c.png'} width={300} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">경북대학교 소프트웨어교육원</h3>
                                <h2 className="text-lg text-gray-900 title-font mb-4">C 프로그래밍 기초</h2>
                                <p className="leading-relaxed text-base">발급번호 A20230313-330099</p>
                                <p className="leading-relaxed text-base">수료일 2023.03.13</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/github.png'} width={300} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">네이버 커넥트재단</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Github으로 따라하는 버전관리</h2>
                                <p className="leading-relaxed text-base">발급번호 A20230313-304232</p>
                                <p className="leading-relaxed text-base">수료일 2023.08.30</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/js.png'} width={300} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">네이버 커넥트재단</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">자바스크립트의 시작</h2>
                                <p className="leading-relaxed text-base">발급번호 A20220815-582395</p>
                                <p className="leading-relaxed text-base">수료일 2022.08.15</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/java01.png'} width={300} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">네이버 커넥트재단</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">쉽게 배우는 자바1</h2>
                                <p className="leading-relaxed text-base">발급번호 A20221121-334427</p>
                                <p className="leading-relaxed text-base">수료일 2022.11.21</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/java02.png'} width={300} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">네이버 커넥트재단</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">쉽게 배우는 자바2</h2>
                                <p className="leading-relaxed text-base">발급번호 A20221126-852286</p>
                                <p className="leading-relaxed text-base">수료일 2022.11.26</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/springboot.png'} width={150} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">패스트캠퍼스 국비지원</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Springboot 웹 프로그래밍</h2>
                                <p className="leading-relaxed text-base">NCS 20010208 시스템 SW엔지니어링</p>
                                <p className="leading-relaxed text-base">수료일 2023.04.05</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">자격증</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg">
                                <div style={{ display: "grid", placeItems: "center", height: "220px", justifyContent: "center" }}>
                                    <Image className="border border-gray" src={'/sqld.png'} width={150} height={400} alt={"C 프로그래밍 기초"} />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">한국데이터산업진흥원</h3>
                                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">SQLD</h2>
                                <p className="leading-relaxed text-base">발급번호 SQLD-053018676</p>
                                <p className="leading-relaxed text-base">수료일 2024.06.21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};