
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

// 로그인 //
export default function SignIn({ setView }) {

    const supabase = createBrowserSupabaseClient();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    
    // 카카오 로그인 인증 // 
    const signInWithKakao = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'kakao',
            options: {
                redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL ?
                    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback` :
                    "http://localhost:3000/auth/callback"
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
                <Input
                    value={email}
                    type="email" 
                    onChange={ e => setEmail(e.target.value) }
                    className="w-full rounded-md"/>
                <Input
                    value={password}
                    type="password" 
                    onChange={ e => setPassword(e.target.value) }
                    className="w-full rounded-md" />
                <Button 
                    className="w-full text-md text-white py-1 bg-blue-500 hover:bg-blue-600" 
                    color="light-blue"
                    onClick={() => {}} >
                    로그인
                </Button>
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