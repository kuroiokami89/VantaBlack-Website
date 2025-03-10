"use client";

import { useEffect, useRef } from "react";
import { Kusanagi, OrbitronLight, Reno, Ki } from "./fonts";
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
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 } // Fade in with slight delay
    );
  }, []);

  return (
    <div
      id="intro"
      className={`block-margins ${Kusanagi.className}`}
      ref={introRef}
      style={{ opacity: 0 }}
    >
      <div className="intro-container">
        <div className="homepage-title">
          <h1 className="title">VANTABLACK</h1>
        </div>
        <p className={`${Ki.className}`}>
          {" "}
          2022 - PRESENT <br />
          <br />
          &gt; AVAILABLE FOR WORK <br />
          &gt; Open to Global Collaborations
          <br />
          &gt; BASED IN ITALY, TREVISO <br />
          &gt; WEB GRAPHIC DESINGER <br />
          &gt; JUNIOR MOTION DESIGNER <br />
        </p>
        <a href="#projects" className={`btn ${Ki.className}`}>
          SEE MY PERSONAL PROJECTS
        </a>
      </div>
    </div>
  );
}
