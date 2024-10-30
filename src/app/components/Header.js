"use client";

import { useState, useEffect } from "react";
import { NeutralFace } from "./fonts";
import LocalTime from "./LocalTime";

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;

      header.style.background = isScrolled
        ? "rgba(0, 0, 0, 0.5)"
        : "transparent";
      header.style.backdropFilter = isScrolled ? "blur(10px)" : "none";
      header.style.webkitBackdropFilter = isScrolled ? "blur(10px)" : "none";
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
        <a href="#top">VANTABLACK</a>
        <LocalTime />
        <div id="menu">
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
          <a href="#footer">CONTACT</a>
        </div>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isOverlayOpen ? "open" : ""}`}>
        <a className="close-toggle" onClick={toggleOverlay}>
          CLOSE
        </a>
        <a className="link link-btn" href="#top">
          TOP
        </a>
        <a className="link link-btn" href="#services">
          SERVICES
        </a>
        <a className="link link-btn" href="#projects">
          PROJECTS
        </a>
        <a className="link link-btn" href="#about">
          ABOUT
        </a>
        <a className="link link-btn" href="#footer">
          CONTACT
        </a>
      </div>
    </header>
  );
}
