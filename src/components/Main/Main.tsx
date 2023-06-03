import './Main.scss'
import { About } from './About/About'
import { Education } from './Education/Education'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { Gallery } from './Gallery/Gallery'

export const Main = () => {
    return(
        <>
            <About />
            <Education />
            <Skills />
            <Projects />
            <Gallery />
        </>
    )
}