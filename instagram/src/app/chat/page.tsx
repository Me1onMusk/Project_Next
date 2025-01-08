
import ChatPeopleList from "@/components/chat/ChatPeopleList"; 
import ChatScreen from "@/components/chat/ChatScreen";

export default function Chat() {
    return (
        <div className="w-full h-screen justify-center flex items-center">
            <ChatPeopleList />
            <ChatScreen />
        </div>
    );
};