import { NeutralFace, NeutralFaceBold } from "./fonts";
import React, { useRef } from "react";

export default function ProjectItem2({ link, imgClass, spanText, h3Text }) {
  const projectRef2 = useRef(null); // Create the ref

  return (
    <a
      href={link}
      ref={projectRef2}
      className={`project2 ${imgClass} ${NeutralFace.className}`}
    >
      <div className="project2-title">
        <span>{h3Text}</span>
        <span>2024</span>
      </div>
      <div className="project2-specs">
        <span>{spanText}</span>
      </div>
    </a>
  );
}
