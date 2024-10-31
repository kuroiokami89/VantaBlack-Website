"use client";

import { useRef } from "react";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <footer id="footer" className={`${NeutralFace.className}`}>
      <div className="section-title" style={{ position: "relative" }}>
        <span
          className="blocco"
          style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "1.65rem" }}
        >
          WANT TO GET IN CONTACT? YOU CAN FIND ME ON THE FOLLOWING SOCIALS
        </span>
        <a
          href="mailto:sergioallushaj@gmail.com"
          id="emailLink"
          className={`link-btn email ${NeutralFaceBold.className}`}
        >
          LET'S TALK
        </a>
      </div>
      <div className="blocco social-links">
        <span
          style={{
            color: "rgba(255, 255, 255, 0.45)",
            fontSize: "1.15rem",
            marginBottom: "15px",
          }}
        >
          DEVELOPED AND DESIGNED BY ©VANTABLACK
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
