import { FC } from 'react'
import './Main.scss'
import About from './About/About'
import Education from './Education/Education'

const Main: FC = () => {
    return(
        <>
            <About />
            <Education />
        </>
    )
}

export default Main