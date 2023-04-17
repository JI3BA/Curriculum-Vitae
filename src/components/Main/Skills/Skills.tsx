import { FC } from 'react'
import './Skills.scss'
import skills from '../../../data/skills.json'
import Skill from './Skill/Skill'

const Skills: FC = () => {
    return(
        <div className='skills' id='skills'>
            <div className="skills__container wrapper">
                <h2 className="component__title">Skills</h2>

                <div className='skills__description'>
                {skills.map(item => {
                    return(
                        <Skill name={item.name} procent={item.procent} key={item.id}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Skills