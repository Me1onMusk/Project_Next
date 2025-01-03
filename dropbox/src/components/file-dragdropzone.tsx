
'use client';

export default function FileDragDropZone() {
    return (
        <section className="w-2/6 py-20 border-2 border-dotted border-indigo-700 flex flex-col rounded-xl items-center justify-center">
            <input 
                type="file"/>
            <p>
                파일을 여기에 끌어다 놓거나 클릭하여 업로드 하세요.
            </p>
        </section>
    );
};