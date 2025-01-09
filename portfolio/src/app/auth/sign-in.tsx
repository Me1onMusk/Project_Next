
'use client';

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

// 로그인 //
export default function SignIn() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className="flex flex-col">
            <div 
                className="pt-10 pb-6 mb-5 px-10 w-full flex flex-col items-center  max-w-lg 
                    justify-center border rounded-lg border-gray-400 bg-white dark:bg-slate-800 gap-5">
                <img 
                    className="w-60 mb-6"
                    src={'/logo/logo.png'} /> 
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
                    color="light-blue">
                    로그인
                </Button>
                <img
                    className='rounded-md '
                    src={'/logo/kakao_login.png'}  />
            </div>
        </div>
    );
};