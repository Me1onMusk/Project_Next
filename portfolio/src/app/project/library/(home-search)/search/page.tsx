
import { BookData } from '../../types_db'; 
import BookItem from '../../components/book-item';

async function SearchResult({q} : {q : string}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`); 
    if(!response.ok) 
        return <div>오류가 발생했습니다...</div> 
    const books : BookData[] = await response.json(); 
    
    return (
        <div>
            {
                books.map((book)=>
                    <BookItem key={book.id} {...book} />
                )
            }
        </div>
    );
}

export default function Page({searchParams}:{searchParams:{q?:string}}) { 
    return ( 
        <div>
            <SearchResult q={searchParams.q || ""} />
        </div>
    )
};