import { FC } from "react";
import './Projects.scss';
import projects from '../../../data/projects.json'
import Project from "./Project/Project";

const Projects: FC = () => {
    return (
        <div className="projects">
            <div className="projectrs__container wrapper">
                {projects.map(item => {
                    return(
                        <Project name={item.name} desc={item.description} img={item.photo} key={item.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects