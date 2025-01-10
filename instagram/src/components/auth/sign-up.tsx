
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

// 회원 가입 //
export default function SignUp({ setView }) { 

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationReq, setConfirmReq] = useState(false);  //이메일 전송후 재전송 하지 못하게

    // 카카오 로그인 부분 // 
    const signInWithKakao = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({ 
            provider: 'kakao',
            options: {
                redirectTo: process.env.NEXT_PUBLIC_VERCEL_URL ?
                `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/auth/callback` :
                "http://localhost:3000/auth/callback"
            }
        })
    };

    const supabase = createBrowserSupabaseClient();
    const signUpMutation = useMutation({
        mutationFn: (
            async () => {
                const { data, error } = await supabase
                    .auth
                    .signUp(
                        { 
                            email,
                            password, 
                            options: { emailRedirectTo: 'http://localhost:3000/signup/confirm' } 
                        }
                    )
                if(data) 
                    setConfirmReq(true);

                if(error)
                    alert(error.message);
            }
        )
    });

    const verifyOtpMutation = useMutation({
        mutationFn: (
            async() => {
                const { data, error } = await supabase.auth.verifyOtp({
                    type: 'signup',
                    email,
                    token: otp
                })

                if(data) 
                    console.log(data); 
                if(error)
                    alert(error.message);
            }
        )
    });
    
    return ( 
        <div className="flex flex-col">
            <div className="pt-10 pb-6 mb-5 px-10 w-full flex flex-col items-center justify-center max-w-lg border rounded-lg border-gray-400 bg-white gap-5"> 
                <img 
                    className="w-60 mb-6"
                    src={'/logo/logo.png'} />
                {
                    confirmationReq ? 
                    (
                        <>
                            <Input 
                                value={otp}
                                className='w-full rounded-md'
                                label='otp'
                                placeholder = '6자리 숫자를 입력해 주세요'
                                onChange = { e => setOtp(e.target.value) }
                                type='number' />
                        </>
                    ) :
                    (
                        <>
                            <Input 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                label='email'
                                type='email'
                                className='w-full rounded-md'/>
                            <Input 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                label='password'
                                type='password'
                                className='w-full rounded-md'/>
                        </>
                    )
                }
                <Button 
                    className = 'w-full text-md text-white py-1'
                    color ='light-blue'
                    loading = { confirmationReq ? verifyOtpMutation.isPending : signUpMutation.isPending }
                    disabled = { confirmationReq ? verifyOtpMutation.isPending : signUpMutation.isPending }
                    onClick = { () => {
                        if (confirmationReq)
                            verifyOtpMutation.mutate();
                        else    
                            signUpMutation.mutate();
                    }} >
                    {
                        confirmationReq ? "인증하기" : "가입하기"
                    }
                </Button>
            </div>

            <div className = "py-4 w-full text-center max-w-lg border border-gray-400 bg-white rounded-lg">
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