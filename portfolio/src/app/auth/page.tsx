
'use client';

import { useState } from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

export default function Auth() { 

    const [ view, setView ] = useState("SIGNIN");

    return (
        <main 
            className="flex justify-center items-center mx-auto container px-5 py-32 md:flex-row">
            {
                view === 'SIGNIN' ? (<SignIn setView={setView} />) : (<SignUp setView={setView} />)
            }
        </main>
    );
};