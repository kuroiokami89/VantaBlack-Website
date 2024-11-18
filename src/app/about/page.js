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
        I'm Sergio Allushaj, a front-end developer from Italy. I began my
        journey in front-end development with the goal of creating modern,
        responsive, and highly functional websites. In recent years, my
        interests have evolved to include UX/UI and graphic design, blending
        creativity with technology. Today, as an independent developer, I apply
        my skills in HTML, CSS, and JavaScript, complemented by knowledge in
        Adobe software and prototyping with Figma, to craft innovative and
        visually engaging solutions.
      </p>

      <a className="link-btn link" href="/CV ALLUSHAJ SERGIO.pdf" download>
        DOWNLOAD CV (ITA)
      </a>
    </StyledAbout>
  );
}
