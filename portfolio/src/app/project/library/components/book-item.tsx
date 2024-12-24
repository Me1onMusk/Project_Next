
import type { BookData } from "../types_db";
import style from './book-item.module.css';
import Link from "next/link";
import Image from "next/image";

export default function BookItem({
    id,
    title,
    subTitle,
    author,
    publisher,
    coverImgUrl
}:BookData) {
    return (
        <Link href={`/book/${id}`} className={style.container}>
            <Image 
                src={coverImgUrl}
                width={80}
                height={105}
                alt={`도서 ${title}의 표지 이미지`} />
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.subTitle}>{subTitle}</div>
                <br />
                <div className={style.author}>
                    {author} | {publisher}
                </div>
            </div>
        </Link>
    );
};