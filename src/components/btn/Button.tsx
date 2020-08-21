import React from 'react';
import s from './Button.module.scss';

type ButtonType = { style: string, hover: boolean, onClick?: () => void };

const Button: React.FC<ButtonType> = React.memo(({style, hover, onClick,...props}) => {
    let btnStyle: string;
    switch (style) {
        case 'upper':
            btnStyle = `${s.btn}`;
            break;
        case 'bigger': {
            btnStyle = `${s.btn} ${s.btn_bigger}`;
            break;
        }
        default:
            btnStyle = `${s.btn}`;
    }

    const onClickHandler = () => {
        onClick!();
    }

    let arrowStyle = hover? `${s.arrow} ${s.arrow_hoverEffect}` : `${s.arrow}`
    return (
        <button onClick={onClickHandler} className={btnStyle}>
            <div className={arrowStyle}>{}</div>
            {props.children}
        </button>)
})

export default Button;