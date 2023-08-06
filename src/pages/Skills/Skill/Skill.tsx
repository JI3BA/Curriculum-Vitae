import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Skill.scss'

type SkillProps = {
    name: string,
    percent: number
}

export const Skill = ({name, percent}: SkillProps) => {
    const [calcPercent, setCalcPercent] = useState<number>(0)

    useEffect(() => {
        const calc = setInterval(() => {
            if(calcPercent < percent){
                setCalcPercent(prev => prev+1)
            }
        }, 20);
        
        return () => clearInterval(calc)
        
    }, [calcPercent, percent])

    return(
            <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * (percent / 100))}} viewport={{once: true}} transition={{duration: 2}}>
                <div className='skill__outer'>
                    <div className="skill__inner">
                        <p className="skill_percent">{calcPercent}%</p>
                    </div>
                </div>
                            
                <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#d400ff" />
                        <stop offset="100%" stopColor="#c23802" />
                        </linearGradient>
                    </defs>
                                
                    <motion.circle
                        className='skill__circle'
                        cx="80"
                        cy="80"
                        r="70"
                        strokeLinecap="round"
                    />
                    </svg>

                    <p className="skills__name">{name}</p>
                </motion.div>
    )
}