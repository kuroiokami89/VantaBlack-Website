"use client";

import { useEffect, useRef } from "react";
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
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 } // Fade in with slight delay
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
          <h1 className="title">VANTABLACK</h1>
        </div>
        <p className={`${NeutralFace.className}`}>
          I aim to create modern, responsive websites that offer unique designs
          and exceptional user experiences. Alongside front-end development, I
          utilize my Adobe expertise in Photoshop, Illustrator, and After
          Effects for professional graphic design and dynamic animations.
        </p>
        <a href="/about" className={`${NeutralFace.className}`}>
          SEE MORE ABOUT ME
        </a>
      </div>
    </div>
  );
}
