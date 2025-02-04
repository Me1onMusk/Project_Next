
import ChatPeopleList from "@/components/chat/ChatPeopleList"; 
import ChatScreen from "@/components/chat/ChatScreen";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export default async function Chat() {

    const supabase = await createServerSupabaseClient();
    const { data: {session} } = await supabase.auth.getSession();

    return (
        <div className="w-full h-screen justify-center flex items-center">
            <ChatPeopleList loggedInUser={session?.user} />
            <ChatScreen />
        </div>
    );
};