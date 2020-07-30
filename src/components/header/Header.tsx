import React from 'react';
import s from './Header.module.scss';
import Nav from '../nav/Nav';

const Header:React.FC<{}> = () => {
    return (
        <div className={s.header}>
           <div className={s.header__container}>
               <Nav/>
           </div>
        </div>
    )
}

export default Header;