
'use client';

import { Checkbox, IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function ToDo({ id, value, completed }) {
    const [isEditing, setIsEditing] = useState(false); 
    const onClickButton = () => { 

    };

    return (
        <div className="flex w-full items-center gap-1">
            <Checkbox checked={true} /> 
            <p className="flex-1">{value}</p>  
            <IconButton onClick={onClickButton}> 
                <i className="fas fa-pen" /> 
            </IconButton> 
            <IconButton onClick={onClickButton}> 
                <i className="fas fa-trash" /> 
            </IconButton> 
        </div>
    );
};