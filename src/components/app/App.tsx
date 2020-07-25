import React from 'react';
import s from './App.module.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';

const App: React.FC<{}> = () => {
    return (
        <div className={s.container}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
