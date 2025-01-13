
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

interface SignInProps {
    setView: React.Dispatch<React.SetStateAction<string>>;
    path?: string;
};

// 로그인 //
export default function SignIn({ setView, path }: SignInProps) {

    const supabase = createBrowserSupabaseClient();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    
    // 카카오 로그인 인증 // 
    const signInWithKakao = async () => {
        console.log("실행");
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'kakao',
            options: {  //로그인 성공 후 리다이렉트될 URL
                redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL && (path === 'insta') ?
                    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/project/instagram` : 
                    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/`
            }
        });
    }; 

    return (
        <div className="flex flex-col">
            <div 
                className="pt-10 pb-6 mb-5 px-10 w-full flex flex-col items-center  max-w-lg 
                    justify-center border rounded-lg border-gray-400 bg-white dark:bg-slate-800 gap-5">
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
                    placeholder="이메일"
                    className="w-full p-1 rounded-lg dark:bg-white border-black border text-black dark:text-black pl-2"/>
                <input
                    value={password}
                    type="password" 
                    onChange={ e => setPassword(e.target.value) }
                    placeholder="비밀번호"
                    className="w-full p-1 rounded-lg dark:bg-white border-black border text-black dark:text-black pl-2" />
                <button 
                    className="w-full text-md text-white py-1 bg-blue-500 hover:bg-blue-600 rounded-lg" 
                    color="light-blue"
                    onClick={() => {}} >
                    로그인
                </button>
                <img
                    className='rounded-md '
                    src={'/logo/kakao_login.png'} 
                    onClick={ () => signInWithKakao() } />
            </div>
            <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white dark:bg-slate-800 gap-5 rounded-lg">
                아직 계정이 없으신가요? 
                <button 
                    className="text-light-blue-600 font-bold pl-2"
                    onClick={() => setView('SIGNUP')} >
                    가입하기
                </button>
            </div>
        </div>
    );
};