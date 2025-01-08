
'use client';

import Person from "@/components/chat/Person";
import { useState } from "react";

export default function ChatPeopleList() {

    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="h-screen flex flex-col bg-gray-50 w-60">
            <Person 
                index={0}
                name={"Kim"}
                isActive={selectedIndex === 0}
                onChatScreen={false}
                onlineAt={new Date().toISOString()}
                userId={'aaaa'}
                onClick={() => setSelectedIndex(0)} />
            <Person 
                index={1}
                name={"Lee"}
                isActive={selectedIndex === 1}
                onChatScreen={false}
                onlineAt={new Date().toISOString()}
                userId={'bbbb'}
                onClick={() => setSelectedIndex(1)} />
        </div>
    );
};