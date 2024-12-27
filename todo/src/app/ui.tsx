
'use client';

import { Button, Input } from "@material-tailwind/react";
import ToDoItem from "./components/todo-item";
import { useState } from "react";
import { createTodo, getTodos } from "./actions/todo-actions";
import { title } from "process";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function UI() {

    const [searchInput, setSearchInput] = useState("");

    const todosQuery = useQuery({
        queryKey: ['todos'],
        queryFn: () => getTodos({searchInput})
    });

    const createTodoMutation = useMutation({
        mutationFn: () =>
            createTodo({
                title: "",
                completed: false
            }),
            onSuccess: () => {
                todosQuery.refetch()
            }
    });

    return (
        <div className="w-2/5 mx-auto flex flex-col items-center py-20 gap-5">
            <h1 className="text-xl font-bold pb-10">ToDo 리스트</h1>
            <Input 
                placeholder="검색어 입력"
                label="검색" 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                icon={<i className="fas fa-search" />} />
            {
                todosQuery.isPending && <p>Loading...</p>
            }
            {
                todosQuery.data && todosQuery.data.map(todo => <ToDoItem key={todo.id} todo={todo} />)
            }
            <Button
                onClick={() => createTodoMutation.mutate()}
                loading={createTodoMutation.isPending}> 
                <i className="fas fa-plus mr-2" />Add ToDo
            </Button> 
        </div>
    );
};