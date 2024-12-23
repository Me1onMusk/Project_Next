
import style from './main.module.css';

export default function Main() {
    return (
        <div className={style.container}>
            <div className='todo_container'>
                <section> 
                    <h3>📖지금 추천하는 도서</h3> 
                </section>
                <section>
                    <h3>📖등록된 모든 도서</h3> 
                </section>
            </div>
        </div>
    );
};