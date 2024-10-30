"use client";

import { useState, useEffect, useRef } from "react";
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
        duration: 3,
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
      <div className="section-title" style={{ position: "relative" }}>
        <a
          href="mailto:sergioallushaj@gmail.com"
          id="emailLink"
          className={`link-btn email ${NeutralFaceBold.className}`}
        >
          VANTABLACK
        </a>
        <span
          style={{
            color: "rgba(255, 255, 255, 0.45)",
            fontSize: "1.15rem",
            marginBottom: "15px",
          }}
        >
          DEVELOPED AND DESIGNED BY ©VANTABLACK
        </span>
      </div>
      <div className="blocco social-links">
        <span
          style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "1.65rem" }}
        >
          WANT TO GET IN CONTACT? YOU CAN FIND ME ON THE FOLLOWING SOCIALS
        </span>
        <div className="socials">
          <a
            className="link-btn"
            href="https://www.linkedin.com/in/sergio-allushaj-a92b9717a/"
          >
            LINKEDIN
          </a>
          <a className="link-btn link" href="https://github.com/kuroiokami89">
            GITHUB
          </a>
        </div>
      </div>
    </footer>
  );
}
