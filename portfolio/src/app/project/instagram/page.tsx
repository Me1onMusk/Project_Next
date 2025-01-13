
import { Home, People, Send, Search } from "@mui/icons-material";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container mx-auto">
            <aside className="p-6"> 
                <div className="flex flex-col gap-4">
                    <Link href={'/project/instagram'}> 
                        <Home className='text-2xl mb-10' />
                    </Link>
                    <Link href={'/project/instagram'}>
                        <People className='text-2xl' />
                    </Link>
                    <Link href={'/project/instagram'}>
                        <Search className='text-2xl' />
                    </Link>
                    <Link href={'/project/instagram'}>
                        <Send className='text-2xl' />
                    </Link>
                </div>
            </aside>
            <div>
            </div>
        </div>
    );
};