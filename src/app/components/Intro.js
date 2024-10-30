"use client";

import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { NeutralFace, NeutralFaceBold, AvertaBold, TT } from "./fonts";
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
      { opacity: 1, duration: 2.5, ease: "power2.out", delay: 0.5 } // Fade in with slight delay
    );
  }, []);

  return (
    <div
      id="intro"
      className={`blocco ${NeutralFaceBold.className}`}
      ref={introRef}
      style={{ opacity: 0 }}
    >
      <div className="intro-container">
        <div className="homepage-title">
          {/* <h1>VANTABLACK</h1>
          <h1>WEB DEVELOPER</h1>
          <h1>BASED IN ITALY</h1> */}
          <h1 className="title">VANTABLACK</h1>
        </div>
        <p className={`${NeutralFace.className}`}>
          I focus on creating modern, responsive, and highly functional websites
          that offer a unique design and an exceptional user experience.
        </p>
      </div>
    </div>
  );
}
