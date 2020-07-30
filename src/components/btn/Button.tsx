import React from 'react';
import s from './Button.module.scss';

type ButtonType = { style: string };

const Button: React.FC<ButtonType> = React.memo(({style}) => {
    let btnStyle: string;
    switch (style) {
        case 'upper':
            btnStyle = `${s.btn} ${s.btn_upper}`;
            break;
        case 'bigger': {
            btnStyle = `${s.btn} ${s.btn_bigger}`;
            break;
        }
        default:
            btnStyle = `${s.btn}`;
    }
    return (<button className={btnStyle}>goto</button>)
})

export default Button;