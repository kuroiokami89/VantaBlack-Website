import { NeutralFace } from "./fonts";

export default function Services() {
  return (
    <div id="services" className={`${NeutralFace.className}`}>
      <div className="skill-title">
        <h2>My skills</h2>
      </div>
      <div className="skill skill-1">
        <h3>Front-end development</h3>
      </div>
      <div className="skill skill-2">
        <h3>UI/UX</h3>
      </div>
      <div className="skill skill-3">
        <h3>Photo and video editing</h3>
      </div>
      <div className="skill skill-4">
        <h3>Graphic & Motion Design</h3>
      </div>
    </div>
  );
}
