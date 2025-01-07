
"use server";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../../../types_db";

export const createServerSupabaseClient = async (
    cookieStore: ReturnType<typeof cookies> = cookies(),
    admin: boolean = false
  ) => { 
    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        admin ? 
            process.env.NEXT_SUPABASE_SERVICE_ROLE!
            : 
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options });
                    } catch (error) {  }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: "", ...options });
                    } catch (error) {  }
                }
            }
        }
    );
};
  
export const createServerSupabaseAdminClient = async (
    cookieStore: ReturnType<typeof cookies> = cookies()
    ) => {
    return createServerSupabaseClient(cookieStore, true);
};
  

/* 
    목적: 서버 환경에서 Supabase 클라이언트를 생성하기 위한 함수들
    createServerSupabaseClient()
        서버에서 사용할 Supabase 클라이언트를 생성합니다. 
        환경 변수에서 Supabase의 URL과, 주어진 권한에 따라 비공식 또는 관리 권한 키를 사용합니다. 
        쿠키 관리 기능도 포함되어 있습니다.
    
    createServerSupabaseAdminClient()
        관리 권한을 가진 Supabase 클라이언트를 생성합니다. 
        서버 측에서만 호출되며, admin 플래그를 true로 설정하여 관리 키를 사용합니다.
*/