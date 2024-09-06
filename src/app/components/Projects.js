// Projects.js
import ProjectItem from "./ProjectsItem";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Projects() {
  return (
    <div id="projects" className="blocco">
      <div className="section-title">
        <h2 className={`${NeutralFaceBold.className}`}>PROJECTS</h2>
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
            link="https://www.figma.com/design/AIxk93Bhw0tdkwpQ5MFVQS/Ecommerce---Kronos?node-id=0-1&t=Gla0ppj60NeuBXXi-1"
            imgClass="project-3"
            spanText="Figma Project"
            h3Text="Kronos luxury watch e-shop"
          />
        </div>
        <div className="project-list-right">
          <ProjectItem
            link="https://vanta-black-gallery.vercel.app/"
            imgClass="project-2"
            spanText="Photo Gallery"
            h3Text="Vantablack gallery"
          />
        </div>
      </div>
    </div>
  );
}
