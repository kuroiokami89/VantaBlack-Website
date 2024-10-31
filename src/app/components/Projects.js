import ProjectItem from "./ProjectsItem";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Projects() {
  return (
    <div id="projects" className="blocco">
      <div className="section-title">
        <h2 className={`${NeutralFace.className}`}>PROJECTS</h2>
      </div>
      <div className="project-container">
        <div className="project-list-left">
          <ProjectItem
            link="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/"
            imgClass="project-1"
            spanText="Portfolio Website"
            h3Text="Vantablack portfolio"
          />
          <ProjectItem
            link="http://sapphire.altervista.org/"
            imgClass="project-2"
            spanText="Bootstrap website"
            h3Text="Exercise website"
          />
        </div>
        <div className="project-list-right">
          <ProjectItem
            link="https://vanta-black-kronos.vercel.app/"
            imgClass="project-3"
            spanText="Ecommerce website"
            h3Text="Kronos luxury watch e-shop"
          />
        </div>
      </div>
    </div>
  );
}
