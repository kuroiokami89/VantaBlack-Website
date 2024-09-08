"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { NeutralFace, NeutralFaceBold } from "./fonts";
import { gsap } from "gsap";

export default function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;

    // Fade in the element from opacity 0 to 1
    gsap.fromTo(
      el,
      { opacity: 0 }, // Starting state (invisible)
      { opacity: 1, duration: 5, ease: "power2.out" } // End state (fully visible)
    );
  }, []);

  return (
    <div
      id="intro"
      className={`blocco ${NeutralFaceBold.className}`}
      ref={introRef}
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
