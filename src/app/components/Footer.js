"use client";

import { OrbitronLight, Ki } from "./fonts";

export default function Footer() {
  return (
    <footer id="footer" className={`${Ki.className}`}>
      <div className="social-links">
        <div className="socials">
          <a
            className="link-btn"
            href="https://www.linkedin.com/in/sergio-allushaj-a92b9717a/"
          >
            &gt; LINKEDIN
          </a>
          <a className="link-btn link" href="https://github.com/kuroiokami89">
            &gt; GITHUB
          </a>
        </div>
        <span className="copywright">WEBSITE MADE BY ©VANTABLACK</span>
      </div>
    </footer>
  );
}
