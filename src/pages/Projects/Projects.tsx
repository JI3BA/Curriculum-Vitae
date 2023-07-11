import './Projects.scss';
import projects from "../../data/skills"
import { Project } from "./Project/Project"

export const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <div className="projects__container wrapper">
                <h2 className="component__title projects__title">Projects</h2>

                <div className="projects__project">
                    {projects.map(item => {
                        return(
                            <Project name={item.name} desc={item.description} stack={item.stack} img={item.picture} link={item.link} key={item.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
