import React from 'react';
import s from './Main.module.scss';

const Main: React.FC<{id: string}> = ({id}) => {
    return (
        <div id={id} className={s.main}>
           <div className={s.main__container}>
               <div className={s.main__text}>
                   <p>Hi there</p>
                   <h2>I'm <span className={s.main__bottomBorder}>Nikita Odintsov</span></h2>
                   <h3>A frontend dev.</h3>
               </div>
               <div className={s.main__photo}>
                   <div className={s.main__photoFrame}>{''}</div>
               </div>
           </div>
        </div>
    )
}

export default Main;