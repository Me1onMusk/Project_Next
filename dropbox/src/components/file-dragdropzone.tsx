
'use client';

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function FileDragDropZone() {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div
            className="w-2/6 py-20 border-2 border-dotted border-indigo-700 flex flex-col rounded-xl items-center justify-center" 
            {...getRootProps()}>
            <input 
                {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드 하세요.</p>
            }
        </div>
    );
};