import './Header.scss'
import {Link} from "react-router-dom";

export const Header = () => {
    return(
        <div className='header'>
            <div className='header__container wrapper'>
                <div className="header__links">
                    <Link to='about' className="link__text">
                        <div className='link__container'>
                            <p className="link__text">About me</p>
                            <p className="link__line"></p>
                        </div>
                    </Link>

                    <Link to='education' className="link__text">
                        <div className='link__container'>
                            <p className="link__text">Education</p>
                            <p className="link__line"></p>
                        </div>
                    </Link>

                    <Link to='skills' className="link__text">
                        <div className='link__container'>
                            <p className="link__text">Skills</p>
                            <p className="link__line"></p>
                        </div>
                    </Link>

                    <Link to='projects' className="link__text">
                        <div className='link__container'>
                            <p className="link__text">Projects</p>
                            <p className="link__line"></p>
                        </div>
                    </Link>

                    <Link to='gallery' className="link__text">
                        <div className='link__container'>
                            <p className="link__text">Gallery</p>
                            <p className="link__line"></p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}