
'use client';

import { useState } from "react"; 
import SignIn from "./sign-in"; 
import SignUp from "./sign-up"; 

export default function Auth() {

    const [view, setView] = useState('SIGNIN');

    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-light-blue-50">
            {
                view === 'SIGNIN' ? 
                (<SignIn setView={setView} />) : 
                (<SignUp setView={setView} />) 
            }
        </main>
    );
};