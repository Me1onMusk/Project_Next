
import BookItem from '../components/book-item';
import books from '../mock/books.json';
import BookData from '../types_db';

function AllBooks() {
    return (
        <>
        {
            books.map((book:BookData)=>
                (<BookItem key={book.id} {...book}/>)
            )
        }
        </>
    );
};

function RecommandBooks() {
    return (
        <>
        {
            books.map((book:BookData)=>
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