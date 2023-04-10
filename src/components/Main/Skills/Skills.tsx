import { FC } from 'react'
import './Skills.scss'

const Skills: FC = () => {
    return(
        <div className='skills'>
            <div className="skills__container wrapper">
                <h2 className="component__title">Skills</h2>

                <div className='skills__description'>
                    <div className="skills__skill">
                        <p className="skills__name">HTML</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">CSS</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">JavaScript</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">TypeScript</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">React</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">Redux</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">Axios</p>
                    </div>
                    <div className="skills__skill">
                        <p className="skills__name">Webpack</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills