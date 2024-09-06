"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Intro() {
  return (
    <div id="intro" className={`blocco ${NeutralFaceBold.className}`}>
      <div className="intro-container">
        <h1>
          VANTABLACK
          <br />
          FRONT-END DEVELOPER
          <br />
          WEB GRAPHIC DESIGNER
          <br />
          BASED IN ITALY
        </h1>
      </div>
      <span className={`${NeutralFace.className}`}>
        [ FEATURED PROJECTS
        <FontAwesomeIcon icon={faArrowDown} /> ]
      </span>
    </div>
  );
}
