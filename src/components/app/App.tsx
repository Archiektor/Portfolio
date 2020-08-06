import React, {useState} from 'react';
import s from './App.module.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';
import upload from '../../assets/icons/upload.png';


const App: React.FC = React.memo(() => {
    const [style, setStyle] = useState<string>(`${s.container__upload}`);
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
            setStyle(`${s.container__upload} ${s.container__upload_show}`);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
            setStyle(`${s.container__upload}`);
        }
    };
    window.addEventListener('scroll', checkScrollTop)

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className={s.container}>
            <Header/>
            <Main id="main"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
            <Contacts id="contacts"/>
            <Footer/>
            <img onClick={() => scrollTop()} className={style} src={upload} alt={`arrowToScrollUp`}/>
        </div>
    );
})

export default App;
