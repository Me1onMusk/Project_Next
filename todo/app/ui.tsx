
"use client";
import { createToDo, getToDos } from "@/actions/todo-actions";
import ToDo from "@/components/todo";
import { Input, Button } from "@material-tailwind/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function UI() {
    const [searchInput, setSearchInput] = useState(""); 
    const todosQuery = useQuery({
        queryKey: ['todos', searchInput],
        queryFn: () => getToDos({searchInput})
    });

    // 생성 //
    const createdToDoMutation = useMutation({
        mutationFn: () => 
            createToDo({
                title: "New ToDo",
                completed: false
            }),
        onSuccess: () => {
            todosQuery.refetch();
        }
    });

    return (
        <div className="w-2/3 mx-auto flex flex-col items-center py-20 gap-2">
            <h1 className="text-xl">ToDo List</h1>
            <Input 
                placeholder="검색어"
                label="Search ToDo" 
                icon={<i className="fas fa-search" />} 
                onChange={(e) => setSearchInput(e.target.value)}/> 
            { todosQuery.isPending && <p>Loading...</p> }
            { todosQuery.data && todosQuery.data.map((todo) => <ToDo key={todo.id} todo={todo} /> ) }
            <Button 
                onClick={()=>createdToDoMutation.mutate()} 
                loading={createdToDoMutation.isPending}>
                <i className="fas fa-plus mr-2" />
                Add ToDo 
            </Button>
        </div>
    );
};