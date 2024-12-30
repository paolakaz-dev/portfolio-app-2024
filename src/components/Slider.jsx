import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project.jsx";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "project 1",
    img: "/project-1.png",
    url:"https://paolakaz-dev.github.io/movie-app-2024/",
    text: "Movie App 2024",
    stack: "React",
  }, 
  {
    name: "project 2",
    img: "/project-1.png",
    url:"#",
    text: "Project 2",
    stack: "React",
  }, 
  {
    name: "project 3",
    img: "/project-1.png",
    url:"#",
    text: "Project 3",
    stack: "React",
  },
  {
    name: "project 4",
    img: "/project-1.png",
    url:"#",
    text: "Project 4",
    stack: "React",

  },
  {
    name: "project 5",
    img: "/project-1.png",
    url:"#",
    text: "Project 5",
    stack: "React",

  },
]

export default function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      console.error("Slider element not found!");
      return;
    }

    // const totalScrollWidth = (slider.scrollWidth - slider.offsetWidth) * 4;
    let screenWidth = window.innerWidth
    const projectWidth = 0.7
    const totalScrollWidth = screenWidth*projectWidth*projects.length;

    // Create the GSAP animation and link ScrollTrigger
    const animation = gsap.to(slider, {
      x: -(totalScrollWidth * (projects.length-1)/projects.length) + (screenWidth*(1-projectWidth)),
      ease: "none",
      scrollTrigger: {
        trigger: slider,
        start: "top top",
        end: `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup ScrollTrigger and animation on component unmount
    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return (
    <div
      name="projects"
      className="project-slider"
      ref={sliderRef}
    >
      {projects.map(project => {
        return <Project key={project.name} project={project} />
      })}
      {/* <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div>
      <div className="project"></div> */}
    </div>
  );
}
