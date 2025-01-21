import { NeutralFace } from "./fonts";
import LocalTime from "./LocalTime";

export default function Header() {
  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container blocco">
        <div className="desktop-menu">
          <div id="time time-desktop">
            <LocalTime />
          </div>
          <a href="#top">
            <img src="/Logo VB WH.svg" alt="Logo" width={35} height={35} />
          </a>
          <div id="menu">
            <a href="#about">ABOUT</a>
            <a href="#services">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#footer">CONTACT</a>
          </div>
        </div>
        <div id="mobile-menu">
          <div id="time">
            <LocalTime />
          </div>
          <a href="/">
            <img src="/Logo VB WH.svg" alt="Logo" id="mobile-logo" />
          </a>
          <a href="#footer">CONTACT</a>
        </div>
      </div>
    </header>
  );
}
