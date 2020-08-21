import React from 'react';
import s from './Main.module.scss';
import Particles from 'react-particles-js';
import {particleOptions} from './particleOptions';
import { Slide } from "react-awesome-reveal";

const Main: React.FC<{ id: string }> = ({id}) => {


    return (
        <div id={id} className={s.main}>
            <Particles className={s.main__particles} params={particleOptions}/>
            <div className={s.main__container}>
                <Slide direction={'left'} triggerOnce={true}>
                    <div className={s.main__text}>
                        <p>Hi there</p>
                        <h2>I'm <span className={s.main__bottomBorder}>Nikita Odintsov.</span></h2>
                        <h3>A frontend dev.</h3>
                    </div>
                </Slide>
                <div className={s.main__photo}>
                    <div className={s.main__photoFrame}>{''}</div>
                </div>
            </div>
        </div>
    )
}

export default Main;