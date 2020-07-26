import React from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll';

const Nav = () => {
    return (
        <div className={s.nav}>
            <Link activeClass={s.nav_active} to={'main'} spy={true} smooth={true} duration={500}>Main</Link>
            <Link activeClass={s.nav_active} to={'skills'} spy={true} smooth={true} duration={500}>Skills</Link>
            <Link activeClass={s.nav_active} to={'projects'} spy={true} smooth={true} duration={500}>Projects</Link>
            <Link activeClass={s.nav_active} to={'contacts'} spy={true} smooth={true} duration={500}>Contacts</Link>
        </div>
    )
}

export default Nav;