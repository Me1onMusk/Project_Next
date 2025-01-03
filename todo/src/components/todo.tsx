
import { updateToDo, deleteToDo } from "@/actions/todo-actions";
import { queryClient } from "@/config/ReactQueryClientProvider";
import { Checkbox, Spinner } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function ToDo({todo}) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [completed, setCompleted] = useState(todo.completed);
    const [title, setTitle] = useState(todo.title);

    const updateToDoMutation = useMutation({
        mutationFn: () => updateToDo({
            id: todo.id,
            title,
            completed
        }),
        onSuccess: () => {
            setIsEditing(false)
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    });

    const deleteToDoMutation = useMutation({
        mutationFn: () => deleteToDo(todo.id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    });
    
    return(
        <div className="w-full flex items-center gap-2 p-5 pb-0">
            <Checkbox 
                onChange={async(e) => {
                    await setCompleted(e.target.checked)
                    await updateToDoMutation.mutate()
                }}
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
                        onClick={async() => {
                            await setIsEditing(false)
                            await updateToDoMutation.mutate()
                        }}>
                        {
                            updateToDoMutation.isPending ? 
                            <Spinner />
                            :
                            <i className="fas fa-check" />
                        }
                    </IconButton>
                ) :
                (
                    <IconButton
                        onClick={() => setIsEditing(true)}>
                        <i className="fas fa-pen" />
                    </IconButton>
                )
            }

            <IconButton
                onClick={() => deleteToDoMutation.mutate()}>
                {
                    deleteToDoMutation.isPending ?
                    <Spinner />
                    :
                    <i className="fas fa-trash" />
                }
            </IconButton>
            
        </div>
    );
};