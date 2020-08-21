import React, {useCallback, useState} from 'react';
import s from './Header.module.scss';
import Nav from '../nav/Nav';

const Header: React.FC<{}> = React.memo(() => {
    const [visible, setVisible] = useState<boolean>(false);

    let headerStyle = !visible ? `${s.header}` : `${s.header} ${s.header_visible}`;
    let headerContainerStyle = !visible ? `${s.header__container}` : `${s.header__container} ${s.header__container_visible}`;

    const onClickHandler = useCallback(() => {
        setVisible(v => !v);
    }, []);

    return (
        <div className={headerStyle}>
            <div className={headerContainerStyle}>
                <Nav onClick={onClickHandler}/>
            </div>
        </div>
    )
})

export default Header;