
import Person from "@/components/chat/Person";

export default function ChatPeopleList() {
    return (
        <>
            <Person 
                index={0}
                name={"Kim"}
                isActive={true}
                onChatScreen={false}
                onlineAt={new Date().toISOString()}
                userId={'aaaa'} />
            <Person 
                index={1}
                name={"Lee"}
                isActive={true}
                onChatScreen={false}
                onlineAt={new Date().toISOString()}
                userId={'bbbb'} />
        </>
    );
};