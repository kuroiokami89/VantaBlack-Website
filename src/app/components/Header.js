import { NeutralFace } from "./fonts";
import LocalTime from "./LocalTime";

export default function Header() {
  return (
    <header id="header" className={`${NeutralFace.className}`}>
      <div className="header-container blocco">
        <a href="/">VANTABLACK</a>
        <div id="time">
          <LocalTime />
        </div>
        <div id="menu">
          <a href="/about">ABOUT</a>
          <a href="#services2">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#footer">CONTACT</a>
        </div>
        <div id="mobile-menu">
          <a href="/about">ABOUT</a>
          <a href="#footer">CONTACT</a>
        </div>
      </div>
    </header>
  );
}
