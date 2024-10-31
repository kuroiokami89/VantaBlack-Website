import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NeutralFace, NeutralFaceBold } from "./fonts";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const StyledProjectsItems = styled.div``;

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
    <a href={link} className="project">
      <StyledProjectsItems ref={projectRef}>
        <div className={`project-img ${imgClass}`}></div>
        <div className="project-text">
          <span className={`${NeutralFace.className}`}>{spanText}</span>
          <h3 className={`${NeutralFaceBold.className}`}>{h3Text}</h3>
        </div>
      </StyledProjectsItems>
    </a>
  );
}
