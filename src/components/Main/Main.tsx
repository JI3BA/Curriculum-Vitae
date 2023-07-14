import './Main.scss'
import { About } from '../../pages/About/About'
import { Education } from '../../pages/Education/Education'
import { Skills } from '../../pages/Skills/Skills'
import { Projects } from '../../pages/Projects/Projects'
import { Gallery } from '../../pages/Gallery/Gallery'
import {Routes, Route, Navigate} from "react-router-dom";

export const Main = () => {
    return(
        <Routes>
            <Route path='*' element={<Navigate to="about" replace />} />
            <Route path='about' element={<About />} />
            <Route path='education' element={<Education />} />
            <Route path='skills' element={<Skills />} />
            <Route path='projects' element={<Projects />} />
            <Route path='gallery' element={<Gallery />} />
        </Routes>
    )
}