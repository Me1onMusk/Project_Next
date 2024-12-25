
import style from './Header.module.css';

export default function Header({leftChild, title, rightChild}) {
    return(
        <header className={style.Header}>
            <div className={style.header_left}>{leftChild}</div>
            <div className={style.header_center}>{title}</div>
            <div className={style.header_right}>{rightChild}</div>
        </header>
    );
};