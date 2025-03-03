import { NeutralFace, Kusanagi, OrbitronLight } from "./fonts";

export default function Projects() {
  return (
    <div id="projects" className={`${OrbitronLight.className}`}>
      <div className="section-title">
        <h2 className={`${Kusanagi.className}`}>PROJECTS</h2>
      </div>
      <div className="container">
        <a
          href="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/"
          className="project-itme itme-1"
        >
          <div className="spans">
            <span>2022</span>
            <span>WEBSITE</span>
          </div>
          <h3>VANTABLACK PORTFOLIO 1.0</h3>
        </a>
        <a
          href="https://www.figma.com/design/geHeoJJUyNJfAzgMKroU15/Kronos--2.0---Ecommerce?node-id=0-1&t=aUKnXH3w3MON96t7-1"
          className="project-itme itme-2"
        >
          <div className="spans">
            <span>2024</span>
            <span>FIGMA</span>
          </div>
          <h3>KRONOS FIGMA PROTHOTYPE</h3>
        </a>
        <a
          href="https://vanta-black-kronos.vercel.app/"
          className="project-itme itme-3"
        >
          <div className="spans">
            <span>2024</span>
            <span>E-SHOP</span>
          </div>
          <h3>KRONOS ONLINE SHOP</h3>
        </a>
        <a href="/graphic-projects" className="project-itme itme-4">
          <div className="spans">
            <span>2025</span>
            <span>PORTFOLIO</span>
          </div>
          <h3>GRAPHIC WORKS</h3>
        </a>
      </div>
    </div>
  );
}
