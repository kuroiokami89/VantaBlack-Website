"use client";

import { useState, useEffect } from "react";
import { NeutralFace } from "./fonts";
import LocalTime from "./LocalTime";

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
    document.body.style.overflow = isOverlayOpen ? "auto" : "hidden"; // Prevent body scroll when overlay is open
  };

  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      if (isOverlayOpen) return; // Skip scroll effects if overlay is open

      const isScrolled = window.scrollY > 100;
      header.style.background = isScrolled
        ? "rgba(0, 0, 0, 0.5)"
        : "transparent";
      header.style.backdropFilter = isScrolled ? "blur(10px)" : "none";
      header.style.webkitBackdropFilter = isScrolled ? "blur(10px)" : "none";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOverlayOpen]); // Re-run useEffect if `isOverlayOpen` changes

  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container blocco">
        <a href="/">VANTABLACK</a>
        <div id="time">
          <LocalTime />
        </div>
        <div id="menu">
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
          <a href="/about">ABOUT</a>
          <a href="#footer">CONTACT</a>
        </div>
        <a className="menu-toggle" onClick={toggleOverlay}>
          Open Menu
        </a>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOverlayOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: isOverlayOpen ? "flex" : "none", // Hide when not open
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust overlay color if needed
          zIndex: 1000, // Ensure overlay is above other content
          paddingRight: "40px",
        }}
      >
        <a className="close-toggle" onClick={toggleOverlay}>
          CLOSE
        </a>
        <a className="link link-btn" href="#top" onClick={toggleOverlay}>
          TOP
        </a>
        <a className="link link-btn" href="#services" onClick={toggleOverlay}>
          SERVICES
        </a>
        <a className="link link-btn" href="#projects" onClick={toggleOverlay}>
          PROJECTS
        </a>
        <a className="link link-btn" href="/about" onClick={toggleOverlay}>
          ABOUT
        </a>
        <a className="link link-btn" href="#footer" onClick={toggleOverlay}>
          CONTACT
        </a>
      </div>
    </header>
  );
}
