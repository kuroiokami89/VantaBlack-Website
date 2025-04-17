"use client";

import { useEffect, useRef } from "react";
import { Kusanagi, Ki } from "./fonts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );

    return () => gsap.killTweensOf(el); // Cleanup GSAP animation on unmount
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
          <h1 className="title title-mobile">
            VANTA
            <br />
            BLACK
          </h1>
        </div>

        <div className={`container-links ${Ki.className}`}>
          <ul>
            <li>2022 - PRESENT</li>
            <li>WEB DEVELOPER</li>
            <li>WEB GRAPHIC DESIGNER</li>
            <li>AVAILABLE FOR WORK</li>
            <li>BASED IN ITALY, TREVISO</li>
          </ul>
          <ul className="links">
            <li>
              <a
                className="link-btn"
                href="https://github.com/kuroiokami89"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                href="/cv/CV ALLUSHAJ SERGIO.pdf"
                download
              >
                DOWNLOAD CV [IT]
              </a>
            </li>
            <li>
              <a className="link-btn" href="#projects-title">
                SELECTED PROJECTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
