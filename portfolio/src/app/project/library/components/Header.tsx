
import Link from "next/link";
import style from './Header.module.css';

// 헤더 //
export default function Header() {
    return (
        <header className={style.Header}>
            <Link href={'/project/library'}>📚태영 서점</Link>
        </header>
    );
};