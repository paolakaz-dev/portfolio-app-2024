import '../App.css'
import { Link, Element, scroller } from 'react-scroll';


export default function Navigation() {
    return (
        <>
        <div className='navigation'>
            <p>Menu</p>
                <Link to="projects" smooth={true} duration={500}>
                Latest Projects
                </Link>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
        </div>
        </>
    )
}