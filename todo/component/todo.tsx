
'use client';

import { Checkbox, IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function ToDo({ id, value, completed }) {
    const [isEditing, setIsEditing] = useState(false); 

    return (
        <div className="w-full flex flex-row items-center gap-1">
            <Checkbox checked={completed} readOnly/> 
            <p className="flex-1 font-bold">{value} </p> 
            <IconButton> 
                <i className="fas fa-pen" /> 
            </IconButton> 
            <IconButton> 
                <i className="fas fa-trash" /> 
            </IconButton> 
        </div>
    );
};