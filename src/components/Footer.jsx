import logo from '/logo-PK.png'
import { Link, Element, scroller } from 'react-scroll';

export default function Footer() {
    return (
        <>
        <Element name="contact" className="footer">
            <div className="footer-info">
                <div className='img-wrapper'>
                 <img src={logo} width="100" />
                </div>
            <p>Based in Copenhagen, Denmark</p>
            </div>
            <div className="social-links">
                 <a href="https://www.linkedin.com/in/paulina-katarzyna-kazmierczak/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                </a>
                <a href="https://www.instagram.com/articacph/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://github.com/paolakaz-dev" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </div>
        </Element>
        </>
    )
}