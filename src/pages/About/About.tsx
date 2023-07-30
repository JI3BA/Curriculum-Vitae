import { useState } from 'react'
import './About.scss'
import me from '../../images/me.jpg'
import { ModalAboutMe } from '../../components/ModalAboutMe/ModalAboutMe'

export const About = () => {
    const [showNumber, setShowNumber] = useState<boolean>(false)
    const [showEmail, setShowEmail] = useState<boolean>(false)
    const [showGit, setShowGit] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)

    return(
        <>
            <div className='about' id='about'>
                <div className="about__container wrapper">
                    <h2 className="component__title">
                        About me
                    </h2>

                    <div className='click-about click-about--active'>
                        <p className="click__text click-about__text">click here</p>
                        <svg className="click-about__arrow" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             width="50px" height="50px" viewBox="0 0 452.922 452.922"
                             xmlSpace="preserve">
                            <g>
                                <path d="M430.134,135.315c4.896-34.884,18.36-110.16-25.092-127.908c-48.349-18.972-121.788,3.06-169.524,15.3
                                    c-27.539,6.732-123.623,27.54-116.891,71.604c0.612,2.448,1.836,4.284,4.284,6.12c9.18,24.48,41.616,44.064,59.976,60.588
                                    c3.672,3.06,6.732,6.12,10.404,9.18C136.375,232.011,54.979,280.971,18.259,358.083c-2.448,4.896-1.224,9.18,1.224,11.628
                                    c0,0.612-0.612,1.225-0.612,1.836c-3.06,14.076,21.42,29.988,30.6,37.944c15.912,14.688,32.436,29.988,51.408,41.616
                                    c4.896,3.06,9.18,1.836,12.24-0.612c2.448,0,5.508-1.224,7.344-3.672c56.916-64.872,105.876-134.028,167.687-194.616
                                    c20.196,18.36,39.78,37.944,57.528,59.364c1.836,2.448,4.896,3.672,7.344,4.284c1.225,8.567,16.524,13.464,23.256,3.672
                                    C409.938,268.12,421.566,194.68,430.134,135.315z"/>
                            </g>
                        </svg>
                    </div>

                    <div className='about__me'>
                        <div className='me'>
                            <img src={me} alt="me" className='me__photo' onClick={() => setModal(true)}/>
                        </div>
                     
                        <div className="about__description">
                            <p className="about__name">
                                <span>A</span>
                                <span>r</span>
                                <span>t</span>
                                <span>y</span>
                                <span>o</span>
                                <span>m</span>
                                <span> </span>
                                <span>L</span>
                                <span>y</span>
                                <span>o</span>
                                <span>v</span>
                                <span>k</span>
                                <span>i</span>
                                <span>n</span>
                                <span> </span>
                                <span>(</span>
                                <span>2</span>
                                <span>4</span>
                                <span>y</span>
                                <span>.</span>
                                <span>o</span>
                                <span>.</span>
                                <span>)</span>
                            </p>
                            <p className="about__position">Front-End developer</p>
                            <p className="about__info">Developer looking for a job as a Front-End Developer. I'm skilled
                                in JavaScript, HTML, CSS (SCSS), TypeScript, React, React Hooks, Redux, Axios,
                                Git. Currently, I am focused on mastering my skills and my priority goal is to
                                begin my Front-End Developer career.
                            </p>

                            <div className="contact">
                                <div className="contact__text" onClick={() => setShowNumber(prev => !prev)}>Phone: <p className='contact__cross'>➫</p></div>
                                <p className={showNumber ? "contact__info active" : "contact__info"}>+375 (29) 574-42-36 (MTC, Telegram)</p>
                            </div>

                            <div className="contact">
                                <div className="contact__text" onClick={() => setShowEmail(prev => !prev)}>Email: <p className='contact__cross'>➫</p></div>
                                <p className={showEmail ? "contact__info active" : "contact__info"}>artyomlyovkin@gmail.com</p>
                            </div>

                            <div className="contact git">
                                <svg className="contact__icon" onClick={() => setShowGit(prev => !prev)} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="120px" height="120px">
                                    <path className="contact__svg" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,
                                    0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,
                                    32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,
                                    34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,
                                    0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,
                                    8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,
                                    0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,
                                    1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,
                                    0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,
                                    0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,
                                    0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,
                                    26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,
                                    2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" fill='#ffffff'/>
                                </svg>
                                <a href="https://github.com/JI3BA" rel="noreferrer" target="_blank" className={showGit ? "contact__link active" : "contact__link"}>GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalAboutMe modal={modal} isModal={setModal}/>
        </>
    )
}