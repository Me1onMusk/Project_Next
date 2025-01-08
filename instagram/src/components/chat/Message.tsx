
'use client';

export default function Message({
    isFromeMe, 
    message
}) {
    return(
        <div 
            className={`w-fit p-2 rounded-lg
                ${isFromeMe ? 'bg-light-blue-500 ml-auto text-white' : 'bg-gray-100 text-black' }`}>
            <p>{message}</p>
        </div>
    );  
};