import { FC } from "react";
import './Project.scss'

type ProjectProps = {
    name: string,
    desc: string,
    img: string

}

const Project: FC<ProjectProps> = ({name,desc, img}) => {
    return (
        <div className="project">
            <h3 className="project__title">{name}</h3>

            <p className="project__desc">{desc}</p>

            <img src={img} className="project__image" alt={name} />
        </div>
    )
}

export default Project