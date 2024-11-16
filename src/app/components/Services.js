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
    transition: background-color 0.6s ease-in;

    h3 {
      font-size: 2.5rem;
      position: relative;
      z-index: 1;
    }

    &:not(.skill-title)::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.55);
      z-index: 0;
    }

    &:hover:not(.skill-title)::before {
      opacity: 0.55;
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

    &:nth-child(1) {
      width: 35%;
      border-left: 0;
      border-bottom: 0;
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

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 400px;
      padding: 20px;
      cursor: unset;
      border-left: 0;
      border-right: 0;

      &::before {
        opacity: 1;
      }

      .skill-title {
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
      }
    }
  }

  .skill-title {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    cursor: unset;
    border: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
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
