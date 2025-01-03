
'use client';

import { createToDo, getToDos } from "@/actions/todo-actions";
import ToDo from "@/components/todo";
import { Button, Input } from "@material-tailwind/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function UI() {

    const [searchInput, setSearchInput] = useState('');

    // Recoil 
    const todosQuery = useQuery({
        queryKey: ['todos', searchInput],
        queryFn: () => getToDos({searchInput})
    });

    const createToDoMutation = useMutation({
        mutationFn: () => createToDo({
            title: 'New ToDo',
            completed: false
        }),
        onSuccess: () => {
            todosQuery.refetch();
        },
    })

    return (
        <div className="w-2/5 mx-auto flex flex-col items-center py-10">
            <h1 className="text-xl font-bold p-10">ToDo List</h1>

            <Input 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="검색어 입력"
                label="검색" 
                icon={<i className="fas fa-search"/>} />

            {
                todosQuery.isPending && <p>Loading...</p>
            }

            {
                todosQuery.data && todosQuery.data.map((todo) => <ToDo key={todo.id} todo={todo}/>)
            }

            <Button
                className="my-10"
                onClick={() => createToDoMutation.mutate()}
                loading={createToDoMutation.isPending} >
                <i className="fas fa-plus mr-2 font-bold" />Add ToDo
            </Button>
        </div>
    );
};