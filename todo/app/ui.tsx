
"use client";
import ToDo from "@/components/todo";
import { Input, Button } from "@material-tailwind/react";

export default function UI() {
    return (
        <div className="w-2/3 mx-auto flex flex-col items-center py-20 gap-2">
            <h1 className="text-xl">ToDo List</h1>
            <Input 
                placeholder="검색어"
                label="Search ToDo" 
                icon={<i className="fas fa-search" />} /> 
            <ToDo/>
            <Button>
                <i className="fas fa-plus mr-2" />
                Add ToDo 
            </Button>
        </div>
    );
};