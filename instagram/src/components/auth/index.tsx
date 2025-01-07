
'use client';

import { useState } from "react"; 
import SignIn from "./sign-in"; 
import SignUP from "./sign-up"; 

export default function Auth() {

    const [view, setView] = useState('SIGNUP');

    return (
        <main>
            {
                view === 'SIGNUP' ? <SignUP /> : <SignIn />
            }
        </main>
    );
};