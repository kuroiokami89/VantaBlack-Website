import ProjectItem2 from "./ProjectsItem2";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Projects() {
  return (
    <div id="projects2" className="">
      <div className="section-title">
        <h2 className={`${NeutralFace.className}`}>PROJECTS</h2>
      </div>
      <div className="projects2-container">
        <ProjectItem2
          link="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/"
          imgClass="./assets/foto/Vanta-GIF.gif"
          spanText="Portfolio Website"
          h3Text="Vantablack portfolio"
        />
        <ProjectItem2
          link="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/"
          imgClass="project2-2"
          spanText="Portfolio Website"
          h3Text="Vantablack portfolio"
        />
        <ProjectItem2
          link="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/"
          imgClass="./assets/foto/Vanta-GIF.gif"
          spanText="Portfolio Website"
          h3Text="Vantablack portfolio"
        />
      </div>
      <a
        className={`projects-button ${NeutralFace.className}`}
        href="/projects"
      >
        SEE ALL PROJECTS
      </a>
    </div>
  );
}
