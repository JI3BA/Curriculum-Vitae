import { useState } from 'react'
import './About.scss'
import me from '../../images/me.jpg'
import { ModalAboutMe } from '../../components/ModalAboutMe/ModalAboutMe'

export const About = () => {
    const [showNumber, setShowNumber] = useState<boolean>(false)
    const [showEmail, setShowEmail] = useState<boolean>(false)
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
                            <p className="about__info">Developer looking for a job as a <span className="about__info--title">Front-End</span> Developer. I'm skilled
                                in JavaScript, HTML, CSS (SCSS), TypeScript, React, React Hooks, Redux, Axios,
                                Git. Currently, I am focused on mastering my skills and my priority goal is to
                                begin my Front-End <span className="about__info--title">Developer</span> career.
                            </p>

                            <div className="contact">
                                <div className="contact__text" onClick={() => setShowNumber(prev => !prev)}>Phone: <p className='contact__cross'>➫</p></div>
                                <p className={showNumber ? "contact__info active" : "contact__info"}>
                                    <a className='contact__link' target='_blank' rel="noreferrer"  href='https://t.me/ji3ba'>+375 (29) 574-42-36 (MTC, Telegram)</a>
                                </p>
                            </div>

                            <div className="contact">
                                <div className="contact__text" onClick={() => setShowEmail(prev => !prev)}>Email: <p className='contact__cross'>➫</p></div>
                                <p className={showEmail ? "contact__info active" : "contact__info"}><a className='contact__link' target='_blank' rel="noreferrer"  href='mailto:artyomlyovkin@gmail.com'>artyomlyovkin@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="follow">
                        <p className="follow__text">Follow me</p>
                        <span className="follow__line"></span>

                        <div className="follow-links">
                            <a href="https://github.com/JI3BA" rel="noreferrer" target="_blank" className="follow-links__link">
                                <svg className="follow-links__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="36" height="36">
                                    <path className="follow-links__svg follow-links__svg--git" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,
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
                            </a>

                            <a href="https://www.instagram.com/ji3ba/" rel="noreferrer" target="_blank" className="follow-links__link">
                                <svg className='follow-links__icon' width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='follow-links__svg follow-links__svg--instagram' d="M13.0202 2C14.8202 2 15.2002 2.02 16.1202 2.06C17.1802 2.11 17.9102 2.28 18.5402 2.53C19.2002 2.78 19.7602 3.13 20.3102 3.68C20.8702 4.23 21.2102 4.79 21.4702 5.45C21.7202 6.08 21.8802 6.81 21.9302 7.88C21.9802 8.83 21.9902 9.2 21.9902 11.2V12.8C21.9902 14.8 21.9802 15.17 21.9302 16.12C21.9144 16.9468 21.7589 17.7651 21.4702 18.54C21.2102 19.2 20.8702 19.76 20.3202 20.31C19.7602 20.87 19.2002 21.21 18.5402 21.47C17.9102 21.72 17.1802 21.88 16.1202 21.93C15.1702 21.98 14.7902 21.99 12.7902 21.99H11.2002C9.20015 21.99 8.83015 21.98 7.87015 21.93C7.04333 21.9141 6.22515 21.7586 5.45015 21.47C4.78376 21.2195 4.17981 20.8271 3.68015 20.32C3.16796 19.8186 2.77199 19.211 2.52015 18.54C2.23177 17.765 2.07626 16.9468 2.06015 16.12C2.01113 15.0874 1.99112 14.0537 2.00015 13.02V10.97C2.00015 9.17 2.02015 8.79 2.06015 7.87C2.11015 6.81 2.28015 6.08 2.52015 5.45C2.78015 4.79 3.12015 4.23 3.68015 3.68C4.17533 3.16743 4.78059 2.77418 5.45015 2.53C6.22461 2.23821 7.04278 2.07931 7.87015 2.06C8.79015 2.02 9.17015 2 10.9702 2H13.0202ZM13.0402 3.8H10.9502C9.22015 3.8 8.85015 3.82 7.95015 3.86C6.98015 3.9 6.45015 4.06 6.10015 4.2C5.63015 4.38 5.30015 4.6 4.95015 4.95C4.60015 5.3 4.38015 5.63 4.20015 6.1C4.07015 6.45 3.90015 6.98 3.86015 7.96C3.82015 8.86 3.80015 9.22 3.80015 10.96V13.04C3.80015 14.78 3.82015 15.14 3.86015 16.04C3.90015 17.01 4.06015 17.54 4.20015 17.89C4.38015 18.36 4.60015 18.69 4.95015 19.04C5.30015 19.39 5.63015 19.61 6.10015 19.79C6.45015 19.93 6.98015 20.09 7.96015 20.13C8.93015 20.18 9.28015 20.19 11.4402 20.19H12.5502C14.7202 20.19 15.0602 20.18 16.0402 20.13C17.0102 20.09 17.5402 19.93 17.8902 19.79C18.3602 19.61 18.6902 19.39 19.0402 19.04C19.3902 18.69 19.6102 18.36 19.7902 17.89C19.9302 17.54 20.0902 17.01 20.1302 16.04C20.1802 15.06 20.1902 14.72 20.1902 12.55V11.45C20.1902 9.28 20.1802 8.93 20.1302 7.95C20.0902 6.98 19.9302 6.45 19.7902 6.1C19.6292 5.66543 19.373 5.27246 19.0402 4.95C18.7179 4.61692 18.3249 4.3606 17.8902 4.2C17.2971 3.98317 16.6716 3.86822 16.0402 3.86C15.0409 3.81227 14.0405 3.79226 13.0402 3.8V3.8ZM12.0002 6.86C13.362 6.86 14.6681 7.40101 15.6311 8.36401C16.5941 9.32701 17.1352 10.6331 17.1352 11.995C17.1352 13.3569 16.5941 14.663 15.6311 15.626C14.6681 16.589 13.362 17.13 12.0002 17.13C10.6383 17.13 9.33216 16.589 8.36916 15.626C7.40616 14.663 6.86515 13.3569 6.86515 11.995C6.86515 10.6331 7.40616 9.32701 8.36916 8.36401C9.33216 7.40101 10.6383 6.86 12.0002 6.86V6.86ZM12.0002 8.66C11.1157 8.66 10.2674 9.01137 9.64195 9.6368C9.01652 10.2622 8.66515 11.1105 8.66515 11.995C8.66515 12.8795 9.01652 13.7278 9.64195 14.3532C10.2674 14.9786 11.1157 15.33 12.0002 15.33C12.8847 15.33 13.7329 14.9786 14.3584 14.3532C14.9838 13.7278 15.3352 12.8795 15.3352 11.995C15.3352 11.1105 14.9838 10.2622 14.3584 9.6368C13.7329 9.01137 12.8847 8.66 12.0002 8.66V8.66ZM17.3302 5.46C17.6484 5.46 17.9536 5.58643 18.1787 5.81147C18.4037 6.03652 18.5302 6.34174 18.5302 6.66C18.5302 6.97826 18.4037 7.28348 18.1787 7.50853C17.9536 7.73357 17.6484 7.86 17.3302 7.86C17.0119 7.86 16.7067 7.73357 16.4816 7.50853C16.2566 7.28348 16.1302 6.97826 16.1302 6.66C16.1302 6.34174 16.2566 6.03652 16.4816 5.81147C16.7067 5.58643 17.0119 5.46 17.3302 5.46V5.46Z" fill="#ffffff"/>
                                </svg>
                            </a>

                            <a href="https://vk.com/ji3ba" rel="noreferrer" target="_blank" className="follow-links__link">
                                <svg className='follow-links__icon' width="36" height="36" viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  className='follow-links__svg follow-links__svg--vk' d="M162.2 71.1c.9-3 0-5.1-4.2-5.1h-14c-3.6 0-5.2 1.9-6.1 4 0 0-7.1 17.4-17.2 28.6-3.3 3.3-4.7 4.3-6.5 4.3-.9 0-2.2-1-2.2-4V71.1c0-3.6-1-5.1-4-5.1H86c-2.2 0-3.6 1.7-3.6 3.2 0 3.4 5 4.2 5.6 13.6v20.6c0 4.5-.8 5.3-2.6 5.3-4.7 0-16.3-17.4-23.1-37.4-1.4-3.7-2.7-5.3-6.3-5.3H42c-4 0-4.8 1.9-4.8 4 0 3.7 4.7 22.1 22.1 46.4C70.9 133 87.2 142 102 142c8.9 0 10-2 10-5.4V124c0-4 .8-4.8 3.7-4.8 2.1 0 5.6 1 13.9 9 9.5 9.5 11.1 13.8 16.4 13.8h14c4 0 6-2 4.8-5.9-1.3-3.9-5.8-9.6-11.8-16.4-3.3-3.9-8.2-8-9.6-10.1-2.1-2.7-1.5-3.9 0-6.2 0-.1 17.1-24.1 18.8-32.3z" fill="white"/>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/artyom-lyovkin-170bb9215/" rel="noreferrer" target="_blank" className="follow-links__link">
                                <svg className='follow-links__icon' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="36" height="36">
                                    <polygon className='follow-links__svg follow-links__svg--linkedIn' fill="#ffffff" points="3,16 13,16 13,35.665 13,45 3,45 "/>
                                    <path className='follow-links__svg follow-links__svg--linkedIn' fill="#ffffff" d="M8,12L8,12c-3,0-5-1.813-5-4.053S5,4,8,4s4.875,1.707,5,3.947C13,10.187,11.125,12,8,12z"/>
                                    <path className='follow-links__svg follow-links__svg--linkedIn' fill="#ffffff" d="M37,28.5c0-2.485-2.015-4.5-4.5-4.5S28,26.015,28,28.5c0,0,0,0.125,0,0.25c0,0.125,0,0.25,0,0.25c0,1.291,0,16,0,16H18V16h10v3.639c0,0,3.27-3.639,8.787-3.639C42.422,16,47,20.135,47,28v17H37C37,45,37,29.557,37,28.5"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <ModalAboutMe modal={modal} isModal={setModal}/>
        </>
    )
}