
import { Checkbox } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function ToDo({todo}) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [completed, setCompleted] = useState(todo.completed);
    const [title, setTitle] = useState(todo.title);
    
    return(
        <div className="w-full flex items-center gap-2 p-5 pb-10">
            <Checkbox 
                onChange={e => setCompleted(e.target.checked)}
                checked={completed} />
            
            {
                isEditing ? 
                (
                    <input 
                        className="flex-1 border-b-black border-b pb-1 mr-10"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                ) : 
                (
                    <p className={`flex-1 ${completed && 'line-through'}`}>{title}</p>
                )
            }
            {
                isEditing ? 
                (
                    <IconButton
                        onClick={() => setIsEditing(false)}>
                        <i className="fas fa-check" />
                    </IconButton>
                ) :
                (
                    <IconButton
                        onClick={() => setIsEditing(true)}>
                        <i className="fas fa-pen" />
                    </IconButton>
                )
            }

            <IconButton>
                <i className="fas fa-trash" />
            </IconButton>
            
        </div>
    );
};