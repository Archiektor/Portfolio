import React from 'react';
import s from './Footer.module.scss';
import liLogo from '../../assets/icons/linkedin.png';
import gitLogo from '../../assets/icons/github.png';

const Footer: React.FC<{}> = () => {
    return (<div className={s.footer}>
        <div className={s.footer__fullName}>Nikita Odintsov</div>
        <div className={s.footer__iconsBlock}>
            <div className={s.footer__iconFrame}>
                <img className={s.footer__img} src={liLogo} alt={`linkedInLogo`}/>
            </div>
            <div className={s.footer__iconFrame}>
                <img className={s.footer__img} src={gitLogo} alt={`githubLogo`}/>
            </div>
        </div>
        <div className={s.footer__copyright}>© 2020 NikkiOdd, All Rights Reserved.</div>
    </div>)
}

export default Footer;