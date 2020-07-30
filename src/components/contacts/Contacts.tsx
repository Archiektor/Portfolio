import React from 'react';
import s from './Contacts.module.scss';
import Button from '../btn/Button';

const Contacts: React.FC<{id: string}> = ({id}) => {
    return (<div className={s.contacts} id={id}>
       <div className={s.contacts__container}>
           <div className={s.contacts__text}>Contacts</div>
           <div className={s.contacts__form}>
               <input className={s.contacts__input} placeholder={`name :`} type="text"/>
               <input className={s.contacts__input} placeholder={`email :`} type="text"/>
               <textarea className={s.contacts__textArea} placeholder={`Your message :`}/>
           </div>
           <div className={s.contacts__btn}>
               <Button style={`bigger`}>Send</Button>
           </div>
       </div>
    </div>)
}

export default Contacts;