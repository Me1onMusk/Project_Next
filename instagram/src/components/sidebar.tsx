
'use client';

import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { Home, Logout, People, Search, Send } from "@mui/icons-material";
import Link from "next/link";

export default function SideBar() {

    const supabase = createBrowserSupabaseClient();

    return(
        <aside className="h-screen p-6 border-r border-gray-300 flex flex-col justify-between w-fit">
            <div className="flex flex-col gap-4">
                <Link href={'/'}>
                    <Home className='text-2xl mb-10' />
                </Link>
                <Link href={'/'}>
                    <People className='text-2xl' />
                </Link>
                <Link href={'/'}>
                    <Search className='text-2xl' />
                </Link>
                <Link href={'/'}>
                    <Send className='text-2xl' />
                </Link>
            </div>
            <div>
                <button
                    onClick={() => {
                        supabase.auth.signOut()
                    }}>
                    <Logout className="text-2xl text-deep-purple-900"/>
                </button>
            </div>
        </aside>
    );
};