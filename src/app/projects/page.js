import { NeutralFace } from "../components/fonts.js";

export default function Projects() {
  return (
    <div id="all-projects-container" className={`${NeutralFace.className}`}>
      <div className="graphic graphic-1">
        <h3>VANTABLACK PORTFOLIO WEBSITE</h3>
        <a>VISIT WEBSITE</a>
        <a>SEE PROJECT ON FIGMA</a>
      </div>
      <div className="graphic graphic-2">
        <h3>KRONOS ECOMMERCE</h3>
        <a>VISIT WEBSITE</a>
        <a>SEE PROJECT ON FIGMA</a>
      </div>
      <div className="graphic graphic-3"></div>
      <div className="graphic graphic-4"></div>
      {/* <div className="graphic graphic-5"></div>
      <div className="graphic graphic-6"></div> */}
    </div>
  );
}
