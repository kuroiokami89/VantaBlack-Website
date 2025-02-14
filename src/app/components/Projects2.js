import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Projects2() {
  return (
    <div id="projects2">
      <div className="section-title">
        <h2 className={`${NeutralFace.className}`}>PROJECTS</h2>
      </div>
      <div className="container">
        <a
          href="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/"
          className="prj prj-1"
        >
          <div className="prj-img"></div>
          <div className="prj-text">
            <span className={`${NeutralFace.className}`}>WEBSITE</span>
            <h3 className={`${NeutralFace.className}`}>VANTABLACK PORTFOLIO</h3>
          </div>
        </a>
        <a
          href="https://www.figma.com/design/geHeoJJUyNJfAzgMKroU15/Kronos--2.0---Ecommerce?node-id=0-1&t=aUKnXH3w3MON96t7-1"
          className="prj prj-5"
        >
          <div className="prj-img"></div>
          <div className="prj-text">
            <span className={`${NeutralFace.className}`}>FIGMA PROJECT</span>
            <h3 className={`${NeutralFace.className}`}>
              KRONOS FIGMA PROTOTYPE
            </h3>
          </div>
        </a>
        <a href="https://vanta-black-kronos.vercel.app/" className="prj prj-2">
          <div className="prj-img"></div>
          <div className="prj-text">
            <span className={`${NeutralFace.className}`}>
              E-COMMERCE WEBSITE
            </span>
            <h3 className={`${NeutralFace.className}`}>
              KRONOS LUXURY WATCH SHOP
            </h3>
          </div>
        </a>
        <a href="/graphic-projects" className="prj prj-3">
          <div className="prj-img"></div>
          <div className="prj-text">
            <span className={`${NeutralFace.className}`}>
              GRAPHIC PORTFOLIO
            </span>
            <h3 className={`${NeutralFace.className}`}>GRAPHICS WORK</h3>
          </div>
        </a>
        {/* <a href="http://sapphire.altervista.org/" className="prj prj-4">
          <div className="prj-img"></div>
          <div className="prj-text">
            <span className={`${NeutralFace.className}`}>WEBSITE</span>
            <h3 className={`${NeutralFace.className}`}>BOOTSTRAP WEBSITE</h3>
          </div>
        </a> */}
      </div>
    </div>
  );
}
