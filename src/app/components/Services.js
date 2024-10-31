import styled from "styled-components";
import { NeutralFace } from "./fonts";

const StyledServices = styled.div`
  margin-bottom: 200px;

  display: flex;
  flex-wrap: wrap;

  .skill {
    border: 1px solid white;
    padding: 1.5%;
    display: flex;
    align-items: flex-end;
    height: 450px;
    width: 32.5%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    /* Apply overlay only if it's not .skill-title */
    &:not(.skill-title)::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 1);
      z-index: 0;
      transition: opacity 0.6s ease-in;
    }

    &:hover:not(.skill-title)::before {
      opacity: 0.55;
    }

    h3 {
      font-size: 2.5rem !important;
      position: relative;
      z-index: 1;
    }

    &:nth-child(1) {
      width: 35%;
      border-left: 0;
    }

    &:nth-child(2) {
      width: 65%;
      border-right: 0;
    }

    &:nth-child(3) {
      width: 35%;
      border-left: 0;
    }

    &:nth-child(5) {
      border-right: 0;
    }
  }

  .skill-title {
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    cursor: unset;
  }

  .skill-1 {
    background-image: url("./front-end.jpg");
  }

  .skill-2 {
    background-image: url("./ux-ui.jpg");
  }

  .skill-3 {
    background-image: url("./video-editing.jpg");
  }

  .skill-4 {
    background-image: url("./graphic.jpeg");
  }

  /* Updated media query */
  @media screen and (max-width: 768px) {
    #services2 {
      flex-direction: column;
    }

    .skill {
      display: block !important;
      width: 100% !important;
      height: 400px;
      padding: 20px;
      border-left: 0;
      border-right: 0;
    }
  }
`;

export default function Services() {
  return (
    <StyledServices id="services2" className={`${NeutralFace.className}`}>
      <div className="skill skill-title">
        <h3>My skills</h3>
        <p>dqwfqwfqwe fwe fewgfwefg we egewweg gh reg re</p>
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
