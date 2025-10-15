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
          <p>
            Multidisciplinary creator with 2+ years' experience developing
            digital solutions that merge technology, design, and strategic
            communication.
          </p>
          <ul className="links">
            <li>
              <a
                className="link-btn"
                href="https://github.com/kuroiokami89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: "1.6rem" }}>&#8600;</span> GITHUB
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                href="https://www.linkedin.com/in/sergioallushaj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: "1.6rem" }}>&#8600;</span> LINKEDIN
              </a>
            </li>
            <li>
              <a
                className="link-btn"
                href="https://www.instagram.com/vantablack1999/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ fontSize: "1.6rem" }}>&#8600;</span> INSTAGRAM
              </a>
            </li>
            <li>
              <a className="link-btn" href="/cv/AllushajSergio.pdf" download>
                <span style={{ fontSize: "1.6rem" }}>&#8600;</span> DOWNLOAD CV
                [ENG]
              </a>
            </li>
            <li>
              <a className="link-btn" href="/cv/AllushajSergioITA.pdf" download>
                <span style={{ fontSize: "1.6rem" }}>&#8600;</span> DOWNLOAD CV
                [ITA]
              </a>
            </li>
            <li>
              <a className="link-btn" href="#projects-title">
                <span style={{ fontSize: "1.5rem" }}>&#8600;</span> SELECTED
                PROJECTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
