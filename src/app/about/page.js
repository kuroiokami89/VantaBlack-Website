"use client";

import { NeutralFace } from "../components/fonts.js";
import styled from "styled-components";

const StyledAbout = styled.div`
  height: 100vh;
  margin-bottom: 200px;
  background-image: url("/Me-edited.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 0;
  }

  p {
    position: relative;
    z-index: 1;
    margin-left: 200px;
    width: 30%;
    color: white;
    text-align: justify;
  }

  a {
    width: 20%;
  }
`;

export default function About() {
  return (
    <StyledAbout id="about" className={`${NeutralFace.className}`}>
      <p>
        Hi, I’m Sergio Allushaj, also known as Vantablack on social media. I’m a
        front-end developer, graphic designer, and UX/UI designer from Italy. My
        journey began with a passion for creating modern, responsive, and highly
        functional websites, which has since grown to include blending
        creativity with technology through UX/UI design and graphic design. As
        an independent developer, I specialize in crafting innovative and
        visually engaging solutions using HTML, CSS, JavaScript, PHP, React, and
        SQL. I also leverage Adobe software and Figma for graphic design and
        prototyping, ensuring exceptional user experiences in every project.
      </p>

      <a className="link-btn link" href="/CV ALLUSHAJ SERGIO.pdf" download>
        DOWNLOAD CV (ITA)
      </a>
    </StyledAbout>
  );
}
