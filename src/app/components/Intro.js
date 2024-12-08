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
          Italy-based, junior front-end developer with a strong foundation in
          responsive design and UX/UI principles. Passionate about crafting
          user-friendly, visually engaging, and impactful web experiences.
        </p>
        <a href="/about" className={`${NeutralFace.className}`}>
          SEE MORE ABOUT ME
        </a>
      </div>
    </div>
  );
}
