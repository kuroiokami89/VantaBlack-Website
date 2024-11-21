"use client";

import { NeutralFace } from "../components/fonts.js";
import styled from "styled-components";

// const StyledGraphicProjects = styled.div`
//   margin-top: 100px;
//   margin-bottom: 200px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);

//   .graphic {
//     border: solid 1px white;
//     height: 800px;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     opacity: 0.6;
//     transition: opacity 0.55s ease-in;
//     cursor: pointer;
//   }

//   .graphic:hover {
//     opacity: 1;
//   }

//   .graphic:nth-child(3n + 1) {
//     border-left: none;
//   }

//   .graphic:nth-child(3n) {
//     border-right: none;
//   }

//   .graphic-1 {
//     background-image: url("/foto/Vanta-GIF.gif");
//   }

//   .graphic-2 {
//     background-image: url("/foto/Rolex-Sky-Dweller.jpg");
//   }

//   .graphic-3 {
//     background-image: url("/foto/project-3.jpg");
//   }

//   .graphic-4 {
//     background-image: url("/graphics/los_muertos.jpg");
//   }

//   .graphic-5 {
//     background-image: url("/graphics/cover.jpeg");
//   }

//   .graphic-6 {
//     background-image: url("");
//   }

//   @media screen and (max-width: 768px) {
//     & {
//       grid-template-columns: repeat(1, 1fr);
//     }

//     .graphic {
//       height: 700px;
//     }

//     .graphic:nth-child(3n + 1) {
//       border-left: none;
//     }

//     .graphic:nth-child(3n) {
//       border-right: none;
//     }

//     .graphic {
//       border-left: none;
//       border-right: none;
//     }
//   }
// `;

export default function Projects() {
  return (
    <div id="all-projects-container" className={`${NeutralFace.className}`}>
      <div className="graphic graphic-1"></div>
      <div className="graphic graphic-2"></div>
      <div className="graphic graphic-3"></div>
      <div className="graphic graphic-4"></div>
      <div className="graphic graphic-5"></div>
      <div className="graphic graphic-6"></div>
    </div>
  );
}
