import React from 'react';
import s from './Projects.module.scss';
import {v1} from 'uuid';
import ProjectItem from '../projectItem/ProjectItem';

const projectsData: Array<{ key: string, nameOfProject: string, link: string, descr: string, stack: string }> = [
    {
        key: v1(),
        nameOfProject: `Samuraj Messenger`,
        link: `https://archiektor.github.io/Messenger/`,
        descr: `A big project with aim to copy FB app.`,
        stack: `Stack: React/Redux/TS/JS//SCSS/Jest/TDD/REST/redux-form/reselectors/redux-thunk/redux-ducks`
    },
    {
        key: v1(),
        nameOfProject: `React Counter`,
        link: `https://archiektor.github.io/Counter/`,
        descr: `A small counter with TS, React/Redux and Sass`,
        stack: `Stack: React/Redux/TS/ on start JS/ SCSS`
    },
    {
        key: v1(),
        nameOfProject: `Coctail DB`,
        link: `https://archiektor.github.io/Coctail-DB/`,
        descr: `Small app for parties and barmens`,
        stack: `Stack: React/JS/hooks`
    },
    {
        key: v1(),
        nameOfProject: `StarWars DB`,
        link: `https://github.com/Archiektor/Star-DB`,
        descr: `React App based on StarWars API. Made with help of Udemy Course by Juriy Bura`,
        stack: `React/Router/Hooks/HOC/Api`
    },
    {
        key: v1(),
        nameOfProject: `HeartRate Monitor site`,
        link: `https://www.cloudmist.ru/`,
        descr: `second site on private server`,
        stack: `JS/SASS/PHP`
    },
    {
        key: v1(),
        nameOfProject: `UberPartners`,
        link: `https://test.cloudmist.ru/`,
        descr: `my first site)`,
        stack: `JS/CSS`
    },
]

const Projects: React.FC<{}> = React.memo(() => {
    return (
        <div className={s.projects}>
            <div><h3 className={s.projects__title}>{`Projects`}</h3></div>
            <div className={s.projects__grid}>
                {projectsData.map(p => <ProjectItem key={p.key}>{p.nameOfProject}</ProjectItem>)}
            </div>
        </div>
    )
})

export default Projects;