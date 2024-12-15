
'use client';

import {Input} from "@material-tailwind/react";
import ToDo from "component/todo";

export default function UI() {
    return (
        <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
            <h1 className="text-xl">
                TODO List
            </h1>
            <Input 
                label="Search ToDo" 
                placeholder="Search TODo" 
                icon={<i className="fas fa-search" />} />

            <ToDo 
                id = {1}
                value = {"New ToDo"}
                completed = {false} />
        </div>
    );
};