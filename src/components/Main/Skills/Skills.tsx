import './Skills.scss'
import skills from '../../../data/skills.json'
import { Skill } from './Skill/Skill'

export const Skills = () => {
    return(
        <div className='skills' id='skills'>
            <div className="skills__container wrapper">
                <h2 className="component__title">Skills</h2>

                <div className='skills__description'>
                {skills.map(item => {
                    return(
                        <Skill name={item.name} percent={item.percent} key={item.id}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
