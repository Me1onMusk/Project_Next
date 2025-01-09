
'use client';

import { getAllUsers } from "@/actions/chatActions";
import Person from "@/components/chat/Person";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useIdStore, useIndexStore, usePresenceState } from "@/utils/zustand/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function ChatPeopleList({ loggedInUser }) { 

    const { selectedUserId, setSelectedUserId } = useIdStore();  //전역 상태 관리 
    const { selectedUserIndex, setSelectedUserIndex } = useIndexStore();   
    const { presence, setPresence } = usePresenceState();

    const getAllUsersQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const allUsers = await getAllUsers()
            console.log(allUsers)
            return allUsers.filter((user) => user.id !== loggedInUser.id);
        }
    });

    const supabase = createBrowserSupabaseClient();

    useEffect(() => {
        const channel = supabase.channel('online_users', {
            config: {
                presence: {
                    key: loggedInUser.id
                }
            }
        })

        channel.on('presence', { event: 'sync'}, () => {
            const newState = channel.presenceState();
            const newStateObj = JSON.parse(JSON.stringify(newState));
            setPresence(newStateObj);
        })

        channel.subscribe(async (status) => {
            if(status !== 'SUBSCRIBED')
                return;

            const newPresenceStatus = await channel.track({
                onlineAt: new Date().toISOString()
            })
        });

        return () => {channel.unsubscribe();}
    }, []);
    
    return (
        <div className="h-screen flex flex-col bg-gray-50 w-60">
            {
                getAllUsersQuery.data?.map((user, index) => (
                    <Person 
                        key={user.id}
                        index={index}
                        name={user.email?.split('@')?.[0]}
                        isActive={selectedUserId === user.id}
                        onChatScreen={false}
                        onlineAt={presence?.[user.id]?.[0]?.onlineAt} 
                        userId={user.id}
                        onClick={() => {
                            setSelectedUserId(user.id)
                            setSelectedUserIndex(index)
                        }} />
                ))
            }
        </div>
    );
};