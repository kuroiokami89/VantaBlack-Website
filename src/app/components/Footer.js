"use client";

import { useRef } from "react";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <footer id="footer" className={`${NeutralFace.className}`}>
      <span
        className="blocco"
        style={{
          color: "rgba(255, 255, 255, 0.45)",
          fontSize: "1.75rem",
          marginBottom: "0 !important",
        }}
      >
        WANT TO REACH ME ?
      </span>
      <div className="section-title" style={{ position: "relative" }}>
        <a
          href="mailto:sergioallushaj@gmail.com"
          id="emailLink"
          className={`link-btn email ${NeutralFaceBold.className}`}
        >
          EMAIL ME
        </a>
      </div>
      <div className="blocco social-links">
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
        <span
          style={{
            color: "rgba(255, 255, 255, 0.45)",
            marginBottom: "20px",
          }}
        >
          WEBSITE MADE BY ©VANTABLACK
        </span>
      </div>
    </footer>
  );
}
