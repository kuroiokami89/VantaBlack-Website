import { OrbitronLight } from "./fonts";

export default function Services() {
  return (
    <div id="skills2" className={`${OrbitronLight.className}`}>
      <div className="section-title">
        <h2 className={`${OrbitronLight.className}`}>MY SKILLS</h2>
      </div>
      <div className="skills-container">
        <div className="element skill-1">
          <h3>Web development</h3>
        </div>
        <div className="element skill-4">
          <h3>GRAPHIC DESIGN</h3>
        </div>
        <div className="element skill-2">
          <h3>UX/UI DESIGN</h3>
        </div>
        <div className="element skill-3">
          <h3>Video & Motion Design</h3>
        </div>
      </div>
    </div>
  );
}
