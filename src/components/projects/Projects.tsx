import React from 'react';
import s from './Projects.module.scss';
import {v1} from 'uuid';
import ProjectItem from '../projectItem/ProjectItem';
import projectPic1 from '../../assets/pictures/1.jpg';
import projectPic2 from '../../assets/pictures/2.jpg';
import projectPic3 from '../../assets/pictures/3.jpg';
import projectPic4 from '../../assets/pictures/4.jpg';
import projectPic5 from '../../assets/pictures/5.jpg';
import projectPic6 from '../../assets/pictures/6.jpg';
import {Slide} from 'react-awesome-reveal';


const projectsData: Array<{ key: string, nameOfProject: string, link: string, descr: string, stack: string, pic: string }> = [
    {
        key: v1(),
        nameOfProject: `Samuraj Messenger`,
        link: `https://archiektor.github.io/Messenger/`,
        descr: `A big project with aim to copy FB app.`,
        stack: `React/Redux/TS/JS//SCSS/Jest/TDD/REST`,
        pic: projectPic1,
    },
    {
        key: v1(),
        nameOfProject: `React Counter`,
        link: `https://archiektor.github.io/Counter/`,
        descr: `A small counter with TS, React/Redux and Sass`,
        stack: `React/Redux/TS/ on start JS/ SCSS`,
        pic: projectPic2,
    },
    {
        key: v1(),
        nameOfProject: `Coctail DB`,
        link: `https://archiektor.github.io/Coctail-DB/`,
        descr: `Small app for parties and barmens`,
        stack: `React/JS/hooks`,
        pic: projectPic3,
    },
    {
        key: v1(),
        nameOfProject: `StarWars DB`,
        link: `https://github.com/Archiektor/Star-DB`,
        descr: `React App based on StarWars API. Made with help of Udemy Course by Juriy Bura`,
        stack: `React/Router/Hooks/HOC/Api`,
        pic: projectPic4,
    },
    {
        key: v1(),
        nameOfProject: `HeartRate Monitor`,
        link: `https://www.cloudmist.ru/`,
        descr: `second site on private server`,
        stack: `JS/SASS/PHP`,
        pic: projectPic5,
    },
    {
        key: v1(),
        nameOfProject: `UberPartners`,
        link: `https://test.cloudmist.ru/`,
        descr: `my first site)`,
        stack: `JS/CSS`,
        pic: projectPic6,
    },
]

const Projects: React.FC<{ id: string }> = React.memo(({id}) => {
    return (
        <div className={s.projects} id={id}>
            <div className={s.projects__container}>
                <Slide direction={'up'} triggerOnce={true}>
                    <div><h3 className={s.projects__title}>{`Projects`}</h3></div>
                </Slide>
                <div className={s.projects__grid}>
                    {projectsData.map(p => <ProjectItem key={p.key} pic={p.pic} link={p.link} descr={p.descr}
                                                        stack={p.stack}>{p.nameOfProject}</ProjectItem>)}
                </div>
            </div>
        </div>
    )
})

export default Projects;