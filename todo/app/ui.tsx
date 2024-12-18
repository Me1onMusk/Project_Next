
'use client'
import ToDo from "component/todo";
import { Input } from "@material-tailwind/react";

export default function UI() {

    return (
        <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
            <h1 className="text-xl">ToDo List</h1>
            <Input
                placeholder="Search ToDo" 
                label="검색" 
                icon={<i className="fas fa-search" />} />
            <ToDo 
                id={1}
                value={'New ToDo'} 
                completed={true} />
        </div>
    );
};