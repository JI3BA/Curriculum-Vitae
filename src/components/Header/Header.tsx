import './Header.scss'

export const Header = () => {
    return(
        <div className='header'>
            <div className='header__container wrapper'>
                <div className="header__links">
                    <div className='link__container'>
                        <a href="#about" className="link__text">About me</a>
                        <p className="link__line"></p>
                    </div>
                    <div className='link__container'>
                        <a href="#education" className="link__text">Education</a>
                        <p className="link__line"></p>
                    </div>
                    <div className='link__container'>
                        <a href="#skills" className="link__text">Skills</a>
                        <p className="link__line"></p>
                    </div>
                    <div className='link__container'>
                        <a href="#projects" className="link__text">Projects</a>
                        <p className="link__line"></p>
                    </div>
                    <div className='link__container'>
                        <a href="#gallery" className="link__text">Gallery</a>
                        <p className="link__line"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}