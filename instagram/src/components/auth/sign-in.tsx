
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

// 로그인 //
export default function SignIn({ setView }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const supabase = createBrowserSupabaseClient();
    const signInMutation = useMutation({    
        mutationFn: (
            async () => {
                const { data, error } = await supabase
                    .auth
                    .signInWithPassword(
                        {
                            email,
                            password
                        }
                    )

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
                <Button 
                    className='w-full text-md text-white py-1'
                    color='light-blue'
                    loading = {signInMutation.isPending}
                    disabled = {signInMutation.isPending}
                    onClick={() => signInMutation.mutate()} >
                    로그인
                </Button>
            </div>

            <div className="py-4 w-full text-center max-w-lg border border-gray-400 bg-white rounded-lg">
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