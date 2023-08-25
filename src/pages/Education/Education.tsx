import { useState } from "react"
import './Education.scss'
import university from '../../images/belstu.jpg'

export const Education = () => {
    const [showSpec, setShowSpec] = useState<boolean>(false)

    return(
        <div className="education" id='education'>
            <div className="education__container wrapper">
                <h2 className="component__title">Education</h2>

                <div className="education__content">
                    <div className="education__location">
                        <img src={university} className="education__picture" alt="university" />
                    </div>

                    <div className="education__description">
                        <p className="education__years">2017-2022</p>

                        <div className="education__name">
                            <a href="https://www.belstu.by/" rel="noreferrer" target="_blank" className="education__text">Belarusian State Technological University</a>
                            <p className="education__line"></p>
                        </div>

                        <p className="education__speciality" onClick={() => setShowSpec(prev => !prev)}>Automation technological processes and
                        production (automation engineer) <span >
                                <svg className='education__speciality--arrow' xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 32 32">
                                    <path fill="#ffffff" d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/>
                                </svg>
                            </span>
                        </p>

                        <p className={showSpec ? "education__speciality--description active" : "education__speciality--description"}>
                            An automation engineer handles the efficient operation of a business system by using technology.
                            The role of the engineer is to analyze, design, implement, and adjust methods of streamlining parts of a business that computer,
                            robotics, and electronic technologies can automate.
                            Being able to envision opportunities to automate and improve the operation of a business makes the automation engineer an invaluable resource in most business sectors.
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    )
}