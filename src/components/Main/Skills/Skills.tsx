import { FC } from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'

const Skills: FC = () => {
    return(
        <div className='skills'>
            <div className="skills__container wrapper">
                <h2 className="component__title">Skills</h2>

                <div className='skills__description'>
                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .8)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">80%</p>
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

                        <p className="skills__name">HTML</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .75)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">75%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#650f9e" />
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

                        <p className="skills__name">CSS</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .85)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">85%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#5900ff" />
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

                        <p className="skills__name">JavaScript</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .65)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">65%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#5900ff" />
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

                        <p className="skills__name">TypeScript</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .78)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">78%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#5900ff" />
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

                        <p className="skills__name">React</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .6)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">60%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#5900ff" />
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

                        <p className="skills__name">Redux</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .62)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill_procent">62%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#5900ff" />
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

                        <p className="skills__name">Axios</p>
                </motion.div>

                <motion.div className="skills__skill" initial={{strokeDasharray: 472, strokeDashoffset: 472}} whileInView={{strokeDashoffset:  472 - (472 * .4)}} viewport={{once: true}} transition={{duration: 2}}>
                        <div className='skill__outer'>
                            <div className="skill__inner">
                                <p className="skill__procent">40%</p>
                            </div>
                        </div>

                        <svg className="skill__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#5900ff" />
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

                        <p className="skills__name">Webpack</p>
                </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills