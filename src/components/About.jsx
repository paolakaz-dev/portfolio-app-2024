import '../App.css'
import { Element } from 'react-scroll';
import { gsap } from "gsap";

export default function About() {
    return (
        <>
        <Element name="about" className='about'>
            <div className='about-img'></div>
            <div className='about-text'>
                <h2>As a designer, I value style exploration and creative freedom a lot, because I believe that a good designer is versatile and does not blindly follow the rules.</h2>
                
            </div>
            
        </Element>
        </>
    )
}