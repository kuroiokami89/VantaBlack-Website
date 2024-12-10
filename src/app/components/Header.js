import { NeutralFace } from "./fonts";
import LocalTime from "./LocalTime";

export default function Header() {
  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container blocco">
        <div id="time">
          <LocalTime />
        </div>
        <div id="menu">
          <a href="/about">ABOUT</a>
          <a href="#services">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#footer">CONTACT</a>
        </div>
        <div id="mobile-menu">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
        </div>
      </div>
    </header>
  );
}
