import { FC, useState } from 'react'
import './About.scss'
import me from '../../../images/me.jpg'
import ModalAboutMe from '../../ModalAboutMe/ModalAboutMe'

const About: FC = () => {
    const [showNumber, getShowNumber] = useState<boolean>(false)
    const [showEmail, getShowEmail] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)

    return(
        <>
            <div className='about'>
                <div className="about__container wrapper">
                    <div className="about__me">
                        <img src={me} alt="me" className='about__photo' onClick={() => setModal(true)}/>
                    </div>
                    <div className="about__description">
                        <p className="about__name">Artyom Lyovkin (24 y.o.)</p>
                        <p className="about__position">Front-End developer</p>
                        <p className="about__info">Developer looking for a job as a Front-End Developer. I'm skilled
                            in JavaScript, HTML, CSS (SCSS), TypeScript, React, React Hooks, Redux, Axios,
                            Git. Currently, I am focused on mastering my skills and my priority goal is to
                            begin my Front-End Developer career.
                        </p>

                        <div className="contact">
                            <div className="contact__text" onClick={() => getShowNumber(prev => !prev)}>Phone: <p className='contact__cross'>➫</p></div>
                            <p className={showNumber ? "contact__info active" : "contact__info"}>+375 (29) 574-42-36 (MTC, Telegram)</p>
                        </div>

                        <div className="contact">
                            <div className="contact__text" onClick={() => getShowEmail(prev => !prev)}>Email: <p className='contact__cross'>➫</p></div>
                            <p className={showEmail ? "contact__info active" : "contact__info"}>artyomlyovkin@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {modal && <ModalAboutMe isModal={setModal}/>}
        </>
    )
}

export default About