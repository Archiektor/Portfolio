import React from 'react';
import s from './ProjectItem.module.scss';
import Button from '../btn/Button';

type ProjectItemType = {
    link: string,
    descr: string,
    stack: string,
    pic: string
}

const ProjectItem: React.FC<ProjectItemType> = React.memo(({descr, link, stack, pic, ...props}) => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectItem__picBlock}>
                <img className={s.projectItem__pic} src={pic} alt={`projectLogo`}/>
                <Button style={`upper`}/>
            </div>
            <div className={s.projectItem__textBlock}>
                <div className={s.projectItem__name}>{props.children}</div>
                <div className={s.projectItem__descr}>{`Description: ${descr}`}</div>
                <div className={s.projectItem__stack}>{`Stack: ${stack}`}</div>
            </div>
        </div>)
})

export default ProjectItem;