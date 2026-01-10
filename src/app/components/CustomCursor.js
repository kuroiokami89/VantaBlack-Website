// components/CustomCursor.jsx
"use client";

import { useEffect, useState } from "react";
import { Ki } from "./fonts";
import "./cursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showText, setShowText] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverListeners = () => {
      // Regular interactive elements
      const interactiveElements = document.querySelectorAll(
        'button, [role="button"], input, textarea, select'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });

      // Project items with text
      const projectItems = document.querySelectorAll(".project-item");

      projectItems.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setShowText(true);
          setCursorText("OPEN PROJECT");
        });
        el.addEventListener("mouseleave", () => {
          setShowText(false);
          setCursorText("");
        });
      });

      // Regular links without text
      const regularLinks = document.querySelectorAll("a:not(.project-item)");
      regularLinks.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    document.addEventListener("mousemove", updatePosition);
    setTimeout(addHoverListeners, 100);

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-square ${isHovering ? "hovering" : ""} ${
          showText ? "show-text" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-dot"></div>
        {/* <div className="cursor-lines">
          <div className="line line-top"></div>
          <div className="line line-right"></div>
          <div className="line line-bottom"></div>
          <div className="line line-left"></div>
        </div> */}
        {showText && (
          <div className={`cursor-text ${Ki.className}`}>{cursorText}</div>
        )}
      </div>
    </>
  );
}
