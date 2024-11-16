import styled from "styled-components";
import { NeutralFace } from "./fonts";

const StyledServices = styled.div`
  margin-bottom: 200px;
  display: flex;
  flex-wrap: wrap;

  .skill {
    all: unset;
    display: flex;
    align-items: flex-end;
    height: 450px;
    width: 32.5%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .skill-1 {
    background-image: url("./front-end.jpg");
    width: 35%;
    border-left: 0;
    border-bottom: 0;
  }

  .skill-2 {
    background-image: url("./ux-ui.jpg");
    width: 65%;
    border-right: 0;
  }

  .skill-3 {
    background-image: url("./video-editing.jpg");
    width: 35%;
    border-left: 0;
  }

  .skill-4 {
    background-image: url("./graphic.jpeg");
    border-right: 0;
  }

  .skill h3 {
    font-size: 2.5rem;
    position: relative;
    z-index: 1;
  }

  .skill::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.6s ease-in;
  }

  .skill:hover::before {
    opacity: 0.55;
  }

  @media screen and (max-width: 768px) {
    .skill {
      width: 100%;
      height: 400px;
      padding: 20px;
      cursor: unset;
      border-left: 0;
      border-right: 0;
    }

    .skill::before {
      opacity: 1;
    }

    .skill:hover::before {
      opacity: 1;
    }
  }
`;

export default function Services() {
  return (
    <StyledServices className={`${NeutralFace.className}`}>
      <div className="skill skill-title">
        <h3>My skills</h3>
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
    </StyledServices>
  );
}
