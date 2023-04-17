import { FC, useState } from "react"
import './Education.scss'
import university from '../../../images/belstu.jpg'

const Education: FC = () => {
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
                        production (automation engineer)
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

export default Education