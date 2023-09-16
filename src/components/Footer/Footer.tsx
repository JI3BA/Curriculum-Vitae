import './Footer.scss'

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__container wrapper">
                <a href="https://www.linkedin.com/in/artyom-lyovkin-170bb9215/" rel="noreferrer" target="_blank" className="footer__link">Artyom Lyovkin</a>
                <p className="footer__email">Contact: <a className='contact__link' target='_blank' rel="noreferrer"  href='mailto:artyomlyovkin@gmail.com'>artyomlyovkin@gmail.com</a></p>
            </div>
        </div>
    )
}