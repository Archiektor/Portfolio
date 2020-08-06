import React, {useState} from 'react';
import s from './Nav.module.scss';
import {Link} from 'react-scroll';

type NavType = {
    onClick: () => void,
}

const Nav: React.FC<NavType> = React.memo(({onClick}) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    let linkBlockStyle = isHidden ? `${s.nav__linkBlock}` : `${s.nav__linkBlock} ${s.nav__linkBlock_show}`;
    let navStyle = isHidden ? `${s.nav}` : `${s.nav} ${s.nav_visible}`;

    let leftMenuIconStyle = isHidden? `${s.nav__menuIcon_left}` : `${s.nav__menuIcon_leftVisible}`
    let rightMenuIconStyle = isHidden? `${s.nav__menuIcon_right}` : `${s.nav__menuIcon_rightVisible}`
    let midMenuIconStyle = isHidden? `${s.nav__menuIcon_mid}` : `${s.nav__menuIcon_midVisible}`

    const onClickHandler = () => {
        onClick();
        setIsHidden(h => !h);
    }

    return (
        <div className={navStyle}>
            <div className={linkBlockStyle}>
                    <Link activeClass={s.nav_active} onClick={onClickHandler} className={s.nav__link} to={'main'} spy={true} smooth={true} duration={500}>Main</Link>
                    <Link activeClass={s.nav_active} onClick={onClickHandler} className={s.nav__link} to={'skills'} spy={true} smooth={true} duration={500}>Skills</Link>
                    <Link activeClass={s.nav_active} onClick={onClickHandler} className={s.nav__link} to={'projects'} spy={true} smooth={true} duration={500}>Projects</Link>
                    <Link activeClass={s.nav_active} onClick={onClickHandler} className={s.nav__link} to={'contacts'} spy={true} smooth={true} duration={500}>Contacts</Link>
            </div>
            <div className={s.nav__menuIcon} onClick={onClickHandler}>
                <hr className={leftMenuIconStyle}/>
                <hr className={midMenuIconStyle}/>
                <hr className={rightMenuIconStyle}/>
            </div>
        </div>
    )
})

export default Nav;