"use client";

import { useEffect, useRef } from "react";
import { NeutralFace, NeutralFaceBold } from "./fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footertRef = useRef(null);

  useEffect(() => {
    const el = footertRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 200 }, // Start with the element 50px down and hidden
      {
        opacity: 1,
        y: 0,
        duration: 1.7,
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
    <footer
      id="footer"
      style={{ margin: "0 30px" }}
      className={`${NeutralFace.className}`}
      ref={footertRef}
    >
      <span style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "1.65rem" }}>
        INTERESTED IN MY PROJECTS ?
      </span>
      <div className="section-title" style={{ position: "relative" }}>
        <a
          href="mailto:sergioallushaj@gmail.com"
          id="emailLink"
          className={`email ${NeutralFaceBold.className}`}
        >
          LET'S TALK
        </a>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sergio-allushaj-a92b9717a/">
          LINKEDIN
        </a>
        <a className="link" href="https://github.com/kuroiokami89">
          GITHUB
        </a>
        <a
          href="/ALLUSHAJ-SERGIO-(ITA).pdf"
          download="ALLUSHAJ SERGIO CV ITA.pdf"
          className="link"
        >
          DOWNLOAD.CV ITA
        </a>
        <a
          href="/ALLUSHAJ -SERGIO-CV-2024.pdf"
          download="ALLUSHAJ SERGIO CV 2024.pdf"
          className="link"
        >
          DOWNLOAD.CV ENG
        </a>
      </div>
    </footer>
  );
}
