import { FC } from 'react'
import './Main.scss'
import About from './About/About'
import Education from './Education/Education'
import Skills from './Skills/Skills'

const Main: FC = () => {
    return(
        <>
            <About />
            <Education />
            <Skills />
        </>
    )
}

export default Main