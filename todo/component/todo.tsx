
'use client'

import { Checkbox } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

export default function ToDo({id, value, completed}) {
    return (
        <div className="w-full flex items-center gap-1">
            <Checkbox 
                checked={completed} />; 
            <p className={`flex-1 ${completed && "line-through"}`}>
                {value}
            </p>
            <IconButton>
                <i className="fas fa-pen" />
            </IconButton>
            <IconButton>
                <i className="fas fa-trash" />
            </IconButton>
        </div>
    );
};