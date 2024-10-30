import ProjectItem from "./ProjectsItem";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Projects2() {
  return (
    <div id="projects2" className="">
      <div className="section-title">
        <h2 className={`${NeutralFaceBold.className}`} style={{ margin: "3%" }}>
          PROJECTS
        </h2>
      </div>
      <div className="grid-container">
        <div className="grid-item first">Item 1</div>
        <div className="grid-item second">Item 2</div>
        <div className="grid-item third">Item 3</div>
      </div>
    </div>
  );
}
