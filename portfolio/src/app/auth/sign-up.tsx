
'use client';

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

// 회원 가입 //
export default function SignUp({ setView }) {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className="flex flex-col">
            <div className="pt-10 pb-6 mb-5 px-10 w-full flex flex-col items-center justify-center dark:bg-slate-800
                max-w-lg border rounded-lg border-gray-400 bg-white gap-5"> 
                <img 
                    className="w-60 mb-6 dark:hidden"
                    src={'/logo/logo.png'} />
                <img 
                    className="w-60 mb-6 hidden dark:block"
                    src={'/logo/logo_white.png'} />  
                <input
                    value={email}
                    type="email" 
                    onChange={ e => setEmail(e.target.value) }
                    className="w-full rounded-md"/>
                <input
                    value={password}
                    type="password" 
                    onChange={ e => setPassword(e.target.value) }
                    className="w-full rounded-md" />
                <button 
                    className="w-full text-md text-white py-1 bg-green-600 hover:bg-green-500" 
                    color="light-blue">
                    회원가입
                </button>
            </div>
            <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white dark:bg-slate-800 gap-5 rounded-lg">
                이미 계정이 있으신가요?
                <button 
                    className = "text-light-blue-600 font-bold pl-2"
                    onClick = { () => setView('SIGNIN') } >
                    로그인하기
                </button>
            </div>
        </div>
    );
};