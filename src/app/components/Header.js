import { NeutralFace, OrbitronLight } from "./fonts";
import LocalTime from "./LocalTime";

export default function Header() {
  return (
    <header id="header" className={`${OrbitronLight.className}`}>
      <div className="header-container block-margins">
        <div className="desktop-menu">
          <div id="time time-desktop">
            <LocalTime />
          </div>
          <a href="/">
            <img
              id="logo"
              src="/Logo VB WH.svg"
              alt="Logo"
              width={35}
              height={35}
            />
          </a>
          <div id="menu">
            <a href="mailto:sergioallushaj@gmail.com">EMAIL</a>
          </div>
        </div>
        <div id="mobile-menu">
          <div id="time">
            <LocalTime />
          </div>
          <a href="/">
            <img src="/Logo VB WH.svg" alt="Logo" id="mobile-logo" />
          </a>
          <a href="mailto:sergioallushaj@gmail.com">EMAIL</a>
        </div>
      </div>
    </header>
  );
}
