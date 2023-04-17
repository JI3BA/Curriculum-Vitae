import { FC } from "react";
import './Footer.scss'

const Footer: FC = () => {
    return(
        <div className="footer">
            <div className="footer__container wrapper">
                <a href="https://www.linkedin.com/in/artyom-lyovkin-170bb9215/" rel="noreferrer" target="_blank" className="footer__link">Artyom Lyovkin</a>
                <p className="footer__email">Contact: artyomlyovkin@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer