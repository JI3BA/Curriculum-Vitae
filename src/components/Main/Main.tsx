import { FC } from 'react'
import './Main.scss'
import About from './About/About'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'

const Main: FC = () => {
    return(
        <>
            <About />
            <Education />
            <Skills />
            <Projects />
        </>
    )
}

export default Main