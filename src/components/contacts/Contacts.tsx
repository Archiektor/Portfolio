import React, {useState} from 'react';
import s from './Contacts.module.scss';
import Button from '../btn/Button';

const Contacts: React.FC<{ id: string }> = React.memo(({id}) => {
        const [hover, setHover] = useState(false);

        return (<div className={s.contacts} id={id}>
            <div className={s.contacts__container}>
                <div className={s.contacts__text}>Contacts</div>
                <div className={s.contacts__form}>
                    <input className={s.contacts__input} autoComplete='on' placeholder={`name :`} type="text"/>
                    <input className={s.contacts__input} autoComplete='on' placeholder={`email :`} type="text"/>
                    <textarea className={s.contacts__textArea} placeholder={`Your message :`}/>
                </div>
                <div className={s.contacts__btn} onMouseEnter={() => setHover(prev => !prev)}>
                    <Button style={`bigger`} hover={hover}>Send</Button>
                </div>
            </div>
        </div>)
    }
)

export default Contacts;