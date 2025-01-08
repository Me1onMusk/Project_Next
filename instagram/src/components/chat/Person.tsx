import { getRandomImage } from "@/utils/random";

export default function Person({
    index,
    userId, 
    name,
    onlineAt,
    isActive,
    onChatScreen
}) {
    return (
        <div 
            className={`flex items-center p-4 gap-5 
                ${!onChatScreen && isActive && 'bg-light-blue-50'} 
                ${!onChatScreen && !isActive && 'bg-gray-500'} 
                ${onChatScreen && 'bg-gray-50'} `} > 
            <img
                src={getRandomImage(index)} 
                alt={name} 
                className="w-10 h-10 rounded-full" />
            <div>
                <p className="text-black font-bold text-l">{name}</p>
                <p className="text-gray-500 text-sm">{onlineAt}</p>
            </div> 
        </div>
    );
};