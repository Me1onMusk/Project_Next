
import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
    return(
    <div className="relative w-full flex flex-col p-4 border border-gray-100 rounded-2xl shadow-md gap-2">
        <div>
            <img
                className="w-full aspect-square rounded-2xl" 
                src="/images/cutedog.jpeg" />
        </div>
        <div>
            cutedog.jpg
        </div>
        <div className="absolute top-4 right-4">
            <IconButton
                onClick={() => {}}
                color="red">
                <i className="fas fa-trash"></i>
            </IconButton>
        </div>
    </div>
    );
};