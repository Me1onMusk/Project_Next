
import { deleteFile } from "@/actions/storageActions";
import { queryClient } from "@/config/ReactQueryClientProvider";
import { getImageURL } from "@/utils/supabase/storage";
import { IconButton, Spinner } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";

export default function DropboxImage({image}) {

    const deleteFileMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['images']
            })
        }
    });

    return(
    <div className="relative w-full flex flex-col p-4 border border-gray-100 rounded-2xl shadow-md gap-2">
        <div>
            <img
                className="w-full aspect-square rounded-2xl" 
                src={getImageURL(image.name)} />
        </div>

        <div>
            {image.name}
        </div>

        <div className="absolute top-4 right-4">
            <IconButton 
                onClick={() => deleteFileMutation.mutate(image.name)}
                color="red">
                {
                    deleteFileMutation.isPending ? 
                    (<Spinner />) :
                    (<i className="fas fa-trash"></i>)
                }
            </IconButton>
        </div>
    </div>
    );
};