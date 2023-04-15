import { FC } from "react";
import './Projects.scss';
import projects from "../../../data/skills"
import Project from "./Project/Project"

const Projects: FC = () => {
    return (
        <div className="projects">
            <div className="projects__container wrapper">
                {projects.map(item => {
                    return(
                        <Project name={item.name} desc={item.description} stack={item.stack} img={item.picture} link={item.link} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects