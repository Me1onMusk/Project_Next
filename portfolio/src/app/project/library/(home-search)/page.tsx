
import BookItem from '../components/book-item';
import books from '../mock/books.json';
import BookData from '../types_db';

// 모든 책 출력 // 
async function AllBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
    if(!response.ok) return <div>오류가 발생했습니다...</div>
    const allBooks : BookData[] = await response.json();  

    return (
        <>
        {
            allBooks.map((book:BookData)=>
                (<BookItem key={book.id} {...book}/>)
            )
        }
        </>
    );
};

// 추천 책 출력 // 
async function RecommandBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`);
    if(!response.ok) return <div>오류가 발생했습니다...</div>      
    const recomandBooks : BookData[] = await response.json();   

    return (
        <>
        {
            recomandBooks.map((book:BookData)=>
                (<BookItem key={book.id} {...book}/>)
            )
        }
        </>
    );
};

export default function Page() {
    return (
        <>
            <section> 
                <h3>📖 지금 추천하는 도서</h3> 
                <RecommandBooks />
            </section>
            <section>
                <h3>📖 등록된 모든 도서</h3> 
                <AllBooks />
            </section>
        </>
    );
};