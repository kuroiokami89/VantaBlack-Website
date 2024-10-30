import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NeutralFace, NeutralFaceBold } from "./fonts";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const StyledProjectsItems = styled.div`
  .project-img {
    width: 840px;
    height: 750px;
    background-position: center;
    background-size: cover;
    transition: opacity 0.8s ease-in-out;
  }

  .project {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0.5;
    transition: opacity 0.8s ease-in-out;
  }

  .project:hover {
    opacity: 1;
  }

  .project-1 {
    background-image: url("./assets/foto/Vanta-GIF.gif");
  }

  .project-2 {
    background-image: url("./assets/foto/VB-Gallery.jpg");
  }

  .project-3 {
    background-image: url("./assets/foto/Rolex-Sky-Dweller.gif");
  }
`;

export default function ProjectItem({ link, imgClass, spanText, h3Text }) {
  const projectRef = useRef(null);

  useEffect(() => {
    const el = projectRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 350 }, // Start with the element 50px down and hidden
      {
        opacity: 1,
        y: 0,
        duration: 1.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Start when the top of the element reaches 80% of the viewport height
          end: "bottom 20%", // End when the bottom of the element reaches 20% of the viewport height
          toggleActions: "play none none none", // Play the animation on scroll in, do nothing else
        },
      }
    );
  }, []);

  return (
    <StyledProjectsItems className="project">
      <a href={link}>
        <div ref={projectRef}>
          <div className={`project-img ${imgClass}`}></div>
          <div className="project-text">
            <span className={`${NeutralFace.className}`}>{spanText}</span>
            <h3 className={`${NeutralFaceBold.className}`}>{h3Text}</h3>
          </div>
        </div>
      </a>
    </StyledProjectsItems>
  );
}
