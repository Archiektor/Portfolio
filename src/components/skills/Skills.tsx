import React from 'react';
import s from './Skills.module.scss';
import SkillItem from '../skillItem/SkillItem';
import {v1} from 'uuid';
import react from '../../assets/icons/react.png';
import sass from '../../assets/icons/sass.png';
import {Slide} from 'react-awesome-reveal';


type DataType = Array<{ key: string, nameOfSkill: string, img: string, description: string }>

const skillsData: DataType = [
    {
        key: v1(),
        nameOfSkill: `React`,
        img: react,
        description: `thunkMiddleWare, Redux-form, reselectors, HOC and other...`
    },
    {
        key: v1(),
        nameOfSkill: `Redux`,
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/640px-Redux_Logo.png`,
        description: `all redux-toolkit`
    },
    {
        key: v1(),
        nameOfSkill: `TypeScript`,
        img: `https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png`,
        description: `types/ enums`
    },
    {
        key: v1(),
        nameOfSkill: `JavaScript`,
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png`,
        description: `you've already know...`
    },
    {
        key: v1(),
        nameOfSkill: `SASS/SCSS/BEM`,
        img: sass,
        description: `@mixins %extensions variables func()`
    },
    {
        key: v1(),
        nameOfSkill: `React Native`,
        img: `https://banner2.cleanpng.com/20180820/csy/kisspng-react-native-native-apps-parallel-fr-android-un-react-native-5b7a5c48d78603.7634975615347456728828.jpg`,
        description: `first steps`
    },
]

const Skills: React.FC<{ id: string }> = React.memo(({id}) => {
        return (
            <div className={s.skills} id={id}>
                <div className={s.skills__container}>
                    <Slide direction={`up`} triggerOnce={true}>
                        <div className={s.skills__title}>My skills</div>
                    </Slide>
                    <div className={s.skills__grid}>
                        {skillsData.map(i => <SkillItem key={i.key} img={i.img}
                                                        description={i.description}>{i.nameOfSkill}</SkillItem>)}
                    </div>
                </div>
            </div>
        )
    }
)

export default Skills;