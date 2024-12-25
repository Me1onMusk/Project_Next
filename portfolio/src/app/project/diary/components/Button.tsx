
import style from './Button.module.css';

export default function Button({text, type}:{text:string, type:string}) {
    return (
        <button
            className={`${style.Button} ${style[`Button_${type}`]}`}>
            {text}
        </button>
    );
};