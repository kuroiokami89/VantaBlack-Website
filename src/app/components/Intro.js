"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { NeutralFace, NeutralFaceBold } from "./fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;

    // Use fromTo to animate from opacity 0 to 1
    gsap.fromTo(
      el,
      { opacity: 0 }, // Initial state (hidden)
      { opacity: 1, duration: 3, ease: "power2.out", delay: 0.5 } // Fade in with slight delay
    );
  }, []);

  return (
    <div
      id="intro"
      className={`blocco ${NeutralFaceBold.className}`}
      ref={introRef}
      style={{ opacity: 0 }} // Ensure it's hidden initially
    >
      <div className="intro-container">
        <h1>
          VANTABLACK
          <br />
          FRONT-END DEVELOPER
          <br />
          WEB GRAPHIC DESIGNER
          <br />
          BASED IN ITALY
        </h1>
      </div>
      <span className={`${NeutralFace.className}`}>
        [ FEATURED PROJECTS
        <FontAwesomeIcon icon={faArrowDown} /> ]
      </span>
    </div>
  );
}
