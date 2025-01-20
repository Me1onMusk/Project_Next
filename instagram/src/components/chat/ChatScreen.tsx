
'use client';

import Person from "@/components/chat/Person";
import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserById } from "@/actions/chatActions";
import { Spinner } from "@material-tailwind/react";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";

// 메세지 보내기 //
export async function sendMessage({
    message,
    chatUserId
}) {
    const supabase = createBrowserSupabaseClient();

    const { data: {session}, error } = await supabase.auth.getSession();

    if(error || !session?.user) 
        throw new Error("User is not authenticated");

    const { data, error: sendMessageError } = await supabase
        .from('message')
        .insert({
            message,
            receiver: chatUserId,
            // sender: session.user.id
        })

    if(sendMessageError)
        throw new Error(sendMessageError.message);

    return data;
};

// 모든 메세지 가져오기 // 
export async function getAllMessage({
    chatUserId
}) {
    const supabase = createBrowserSupabaseClient();
    const { data: {session}, error } = await supabase.auth.getSession();
    if(error || !session?.user) 
        throw new Error("User is not authenticated");

    const { data, error: getAllMessageError } = await supabase
        .from('message')
        .select('*')
        .or(`receiver.eq.${chatUserId}, receiver.eq.${session.user.id}`)
        .or(`sender.eq.${chatUserId}, receiver.eq.${session.user.id}`)
        .order('created_at', { ascending: true });
    
    if(getAllMessageError)
        return [];

    return data;
};

export default function ChatScreen({ }) {
    
    const { selectedUserId } = useIdStore();
    const { selectedUserIndex } = useIndexStore();
    const [ message, setMessage ] = useState("");
    const supabase = createBrowserSupabaseClient();
    const { presence }  = usePresenceState();

    const selectedUserQuery = useQuery({
        queryKey: ['user', selectedUserId],
        queryFn: () => getUserById(selectedUserId)
    });

    const sendMessageMutation = useMutation({
        mutationFn: async() => {
            return sendMessage({
                message,
                chatUserId: selectedUserId
            })
        },
        onSuccess: () => {
            setMessage("")
            getAllMessageQuery.refetch()
        }
    });
    
    const getAllMessageQuery = useQuery({
        queryKey: ['message', selectedUserId],
        queryFn: () => getAllMessage({
            chatUserId: selectedUserId
        })
    });

    useEffect(() => {
        const channel = supabase
            .channel('message_change')
            .on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'message'
            },
            (payload) => {
                if(payload.eventType === 'INSERT' && !payload.errors)
                    getAllMessageQuery.refetch(); 
            })
            .subscribe()

        return () => {
            channel.unsubscribe()
        };
    }, []);

    return selectedUserQuery.data !== null ? (
        <div className="w-full h-screen flex flex-col">
            <Person 
                index={selectedUserIndex}
                name={selectedUserQuery.data?.email?.split('@')?.[0]}
                isActive={false}
                onChatScreen={false}
                onlineAt={presence?.[selectedUserId]?.[0]?.onlineAt} 
                userId={selectedUserQuery.data?.id} />

            <div className="flex-1 w-full flex flex-col gap-3 p-3 overflow-scroll">
                {
                    getAllMessageQuery.data?.map( msg => (
                        <Message
                            key={msg.id}
                            message={msg.message}
                            isFromeMe={msg.receiver === selectedUserId} />
                    ))
                }
                <Message 
                    message={'Hello'}   
                    isFromeMe={'aaa'} />
            </div>

            <div className="flex">
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="메세지 입력" 
                    className="p-4 w-full border-2 border-light-blue-600" />
                <button 
                    onClick={() => sendMessageMutation.mutate()}
                    className="min-w-20 p-1 bg-light-blue-600 text-white"
                    color='light-blue'>
                    {
                        sendMessageMutation.isPending ? <Spinner className='items-center justify-center'/> : <span>전송</span> 
                    }
                </button>
            </div>
        </div>
    ) : 
    (<div className="w-full"></div>);
};