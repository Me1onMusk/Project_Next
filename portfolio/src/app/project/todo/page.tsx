
import Main from './components/main';
import style from './page.module.css';

// 푸터 //
function Footer() {
    return (
        <footer>
            <div>제작 @Kim</div>
            <div>0개의 도서가 등록되어 있습니다.</div>
        </footer>
    );
};

export default function Page() {
    return(
        <div className={style.container}>
            <div className="todo_container">
                <header>📚OneBite Books</header>
                <Main />
                <Footer />
            </div>
        </div>
    )
}