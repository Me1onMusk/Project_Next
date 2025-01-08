
'use client';

import Person from "@/components/chat/Person";
import Message from "./Message";

export default function ChatScreen() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Person 
                index={0}
                name={"Kim"}
                isActive={false}
                onChatScreen={true}
                onlineAt={new Date().toISOString()}
                userId={'aaaa'}
                onClick={() => {}} />

            <div className="flex-1 w-full flex flex-col gap-3 p-3">
                <Message 
                    isFromeMe={true}
                    message={"안녕하세요"}/>
                <Message 
                    isFromeMe={true}
                    message={"안녕하세요"}/>
                <Message 
                    isFromeMe={false}
                    message={"안녕하세요"}/>
            </div>

            <div className="flex">
                <input
                    placeholder="메세지 입력" 
                    className="p-4 w-full border-2 border-light-blue-600" />
                <button 
                    className="min-w-20 p-1 bg-light-blue-600 text-white"
                    color='light-blue'>
                    <span>전송</span>
                </button>
            </div>
        </div>
    );
};