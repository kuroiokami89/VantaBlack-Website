"use client";

import { useEffect } from "react";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Header() {
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.getElementById("header");

    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos > lastScrollTop) {
        // Scrolling down
        header.style.opacity = "0";
      } else {
        // Scrolling up
        header.style.opacity = "1";
      }
      lastScrollTop = scrollPos;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container blocco">
        <a id="logo" href="#top">
          vantaBlack
        </a>
        <div className="header-anchors">
          <a className="link" href="#projects">
            PROJECTS
          </a>
          <a className="link" href="#about">
            ABOUT
          </a>
          <a className="link" href="#footer">
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
}
