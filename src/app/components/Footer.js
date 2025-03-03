"use client";

import { NeutralFace, NeutralFaceBold, OrbitronLight } from "./fonts";

export default function Footer() {
  return (
    <footer id="footer" className={`${OrbitronLight.className}`}>
      {/* <span className="email-heading">WANT TO REACH ME ?</span>
      <div className="section-title">
        <a
          href="mailto:sergioallushaj@gmail.com"
          id="emailLink"
          className={`link-btn email ${NeutralFaceBold.className}`}
        >
          EMAIL ME
        </a>
      </div> */}
      <div className="social-links">
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
        <span className="copywright">WEBSITE MADE BY ©VANTABLACK</span>
      </div>
    </footer>
  );
}
