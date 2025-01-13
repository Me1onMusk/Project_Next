
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
    const { searchParams, origin, pathname } = new URL(request.url);  //URL 객체 생성
    const code = searchParams.get("code");  //쿼리 파라미터 "code" 가져오기
    const next = searchParams.get("next") ?? "/";  //"next" 파라미터 가져오고 기본값 설정

    console.log("카카오 테스트");
    console.log(`${pathname}`); // /auth/callback
    console.log(`${next}`);     // /
    console.log(`${origin}`);   // http://localhost:3000

    if (code) {
        const supabase = await createServerSupabaseClient(); 
        const { error } = await supabase.auth.exchangeCodeForSession(code);  

        if (!error)
            return NextResponse.redirect(`${origin}${next}/project/instagram`); 
    }

    return NextResponse.redirect(`${origin}/auth/auth-code-error`);  //실패 했을 경우 
};
