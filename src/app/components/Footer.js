"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ margin: "0 30px" }}
      className={`${NeutralFace.className}`}
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
