import { useEffect } from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import logo from '/logo-PK.png'


export default function Homepage() {
    useEffect(() => {
        // GSAP animation for the hero text
        gsap.fromTo(
            ".hero-text h1",
            { opacity: 0, y: 50 }, // Initial state
            { duration: 1, opacity: 1, y: 0, ease: "power2.out" } // Fade in and slide up
        );

      
    }, []);

    return (
        <>
            <div className="hero">
                <div className="hero-text">
                    <div className='img-wrapper'>
                        <img src={logo} width="100" />
                    </div>
                    <h1>CRAFTING EXCEPTIONAL WEB EXPERIENCES THAT BLEND CREATIVITY AND USER-CENTRIC DESIGN</h1>
                </div>
            </div>
            <Slider />
            <About />
            <Footer />
        </>
    );
}
