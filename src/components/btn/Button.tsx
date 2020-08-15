import React from 'react';
import s from './Button.module.scss';

type ButtonType = { style: string, hover: boolean };

const Button: React.FC<ButtonType> = React.memo(({style, hover, ...props}) => {
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

    let arrowStyle = hover? `${s.arrow} ${s.arrow_hoverEffect}` : `${s.arrow}`
    return (
        <button className={btnStyle}>
            <div className={arrowStyle}>{}</div>
            {props.children}
        </button>)
})

export default Button;