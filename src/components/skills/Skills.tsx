import React from 'react';
import s from './Skills.module.scss';
import SkillItem from '../skillItem/SkillItem';
import {v1} from 'uuid';


type DataType = Array<{ key: string, nameOfSkill: string, img: string, description: string }>

const skillsData: DataType = [
    {
        key: v1(),
        nameOfSkill: `React`,
        img: `https://blog.wyremski.pl/wp-content/uploads/2019/05/react.png`,
        description: `with ReduxThunk, Redux-form, Reselectors, HOC and other...`
    },
    {
        key: v1(),
        nameOfSkill: `Redux`,
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/640px-Redux_Logo.png`,
        description: `no comments`
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
        img: `https://www.pngfind.com/pngs/m/452-4521456_scss-logo-hd-png-download.png`,
        description: `no comments`
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
                    <div className={s.skills__title}>My skills</div>
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