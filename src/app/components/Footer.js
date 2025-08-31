"use client";

import { Ki } from "./fonts";

export default function Footer() {
  return (
    <footer id="footer" className={`${Ki.className}`}>
      <div className="social-links">
        <div className="socials">
          <a
            className="link-btn"
            href="https://www.linkedin.com/in/sergio-allushaj-a92b9717a/"
          >
            <span style={{ fontSize: "1.6rem" }}>&#8600;</span> LINKEDIN
          </a>
          <a className="link-btn link" href="https://github.com/kuroiokami89">
            <span style={{ fontSize: "1.6rem" }}>&#8600;</span> GITHUB
          </a>
          <a className="link-btn link" href="#top">
            <span style={{ fontSize: "1.6rem" }}>&#8600;</span> RETURN TO TOP
          </a>
        </div>
        <span className="copywright">WEBSITE MADE BY ©VANTABLACK</span>
      </div>
    </footer>
  );
}
