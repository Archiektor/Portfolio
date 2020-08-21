import React, {ChangeEvent, useCallback, useState} from 'react';
import s from './Contacts.module.scss';
import Button from '../btn/Button';

const Contacts: React.FC<{ id: string }> = React.memo(({id}) => {
        const [hover, setHover] = useState(false);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.currentTarget.attributes[2].value === 'name :') {
                setName(e.currentTarget.value);
            } else {
                setEmail(e.currentTarget.value);
            }
        }

        const onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.currentTarget.value);
        }

        const onClickHandler = useCallback(() => {
            setName('');
            setEmail('');
            setMessage('');
        }, []);

        return (<div className={s.contacts} id={id}>
            <div className={s.contacts__container}>
                <div className={s.contacts__text}>Contacts</div>
                <form className={s.contacts__form}>
                    <input value={name} onChange={onChangeHandler} className={s.contacts__input} autoComplete='on'
                           placeholder={`name :`} type="text"/>
                    <input value={email} onChange={onChangeHandler} className={s.contacts__input} autoComplete='on'
                           placeholder={`email :`}
                           type="text"/>
                    <textarea value={message} onChange={onTextAreaChangeHandler} className={s.contacts__textArea}
                              placeholder={`Your message :`}/>
                </form>
                <div className={s.contacts__btn} onMouseEnter={() => setHover(prev => !prev)}>
                    <Button onClick={onClickHandler} style={`bigger`} hover={hover}>Send</Button>
                </div>
            </div>
        </div>)
    }
)

export default Contacts;