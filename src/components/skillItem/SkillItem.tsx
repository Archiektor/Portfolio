import React from 'react';
import s from './SkillItem.module.scss';

type SkillItemType = {
    img: string,
    description: string,
}

const SkillItem: React.FC<SkillItemType> = React.memo(({img, description, ...props}) => {
    return (
        <div className={s.skillItem}>
            <img className={s.skillItem__logo} src={img} alt="skillLogo"/>
            <h3 className={s.skillItem__title}>{props.children}</h3>
            <p className={s.skillItem__description}>{description}</p>
        </div>
    )
})

export default SkillItem;