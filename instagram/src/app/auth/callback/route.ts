
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { createServerSupabaseClient } from "@/utils/supabase/server";


export async function GET(request: Request) {

    const { searchParams, origin } = new URL(request.url); 
    const code = searchParams.get("code"); 
    const next = searchParams.get("next") ?? "/";

    console.log(`${origin}`);

    if (code) {
        const supabase = await createServerSupabaseClient(); 
        const { error } = await supabase.auth.exchangeCodeForSession(code);  

        if (!error)
            return NextResponse.redirect(`${origin}${next}`); 
    }

    return NextResponse.redirect(`${origin}/auth/auth-code-error`);  //실패 했을 경우 
}
