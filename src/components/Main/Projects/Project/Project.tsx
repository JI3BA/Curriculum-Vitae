import { FC } from "react";
import './Project.scss'

type ProjectProps = {
    name: string,
    desc: string,
    img: string,
    stack: string,
    link: string
}

const Project: FC<ProjectProps> = ({name,desc, img, stack, link}) => {
    return (
        <div className="project">
            <div className="project__container">
                <h3 className="project__title">{name}</h3>
                <p className="project__desc">{desc}</p>
                <div className="project__window">
                    <img src={img} className="project__image" alt={name} />
                </div>
                <p className="project__desc">Tech stack: <span className="project__stack">{stack}</span></p>
                <a href={link} className="project__link" target="_blank">
                    <svg className="project__svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="60px" height="60px">
                        <path className="project__icon" d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44
                        C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615
                        7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719
                        C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703
                        C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172
                        28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469
                        15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 
                        15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 
                        20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 
                        34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 
                        31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 
                        34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 
                        C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Project