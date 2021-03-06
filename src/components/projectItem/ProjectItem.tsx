import React, {useState} from 'react';
import s from './ProjectItem.module.scss';
import Button from '../btn/Button';

type ProjectItemType = {
    link: string,
    descr: string,
    stack: string,
    pic: string
}

const ProjectItem: React.FC<ProjectItemType> = React.memo(({descr, link, stack, pic, ...props}) => {
    const [hover, setHover] = useState<boolean>(false);

    let btnStyle = !hover ? 'upper' : 'hover';

    return (
        <div className={s.projectItem}>
            <div className={s.projectItem__picBlock}>
                <img className={s.projectItem__pic} src={pic} alt={`projectLogo`}/>
                <div onMouseEnter={() => setHover(prev => !prev)} className={s.projectItem__btnBlock}>
                    <a className={s.projectItem__link} href={link}><Button hover={hover}
                                                                           style={btnStyle}>Go</Button></a>
                </div>
            </div>
            <div className={s.projectItem__textBlock}>
                <div className={s.projectItem__name}><span>{props.children}</span></div>
                <div className={s.projectItem__descr}>
                    {<span>Description :</span>}{`${descr}`}
                </div>
                <div className={s.projectItem__stack}>
                    {<span>Stack :</span>}{`${stack}`}
                </div>
            </div>
        </div>)
})

export default ProjectItem;