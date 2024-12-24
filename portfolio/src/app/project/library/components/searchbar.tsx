
'use client';

import style from './searchbar.module.css';
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const [search, setSearch] = useState("");

    const router = useRouter();
    const searchParmas = useSearchParams();  //쿼리 스트링
    const q = searchParmas.get("q");

    // 새로고침시 검색어 남아있게 만들기 //
    useEffect(()=>{
        setSearch(q || "");
    }, [q]);

    // 엔터키 누르면 검색 실행 //
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') onSubmit();
    };

    // 버튼 관련 //
    const onSubmit = () => { 
        if(!search || search === q) return;  //입력값이 없으면
        router.push(`./library/search?q=${search}`);
    }; 

    // 검색 관련 //
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className={style.container}>
            <input 
                onKeyDown={onKeyDown} 
                value = {search}
                onChange={onChangeSearch}
                placeholder='검색어를 입력하세요'/>
            <button
                onClick={onSubmit}>
                검색
            </button>
        </div>
    );
};