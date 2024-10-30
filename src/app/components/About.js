"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function About() {
  return (
    <div id="about" className={`blocco ${NeutralFace.className}`}>
      <div className="about-container">
        <div className="about-title-container">
          <div className="title-container">
            <h2 className={`about-title ${NeutralFaceBold.className}`}>
              hi, i'm
            </h2>
            <h2
              className={`about-title title-name ${NeutralFaceBold.className}`}
            >
              Sergio <br /> Allushaj,{" "}
            </h2>
            <h2 className={`about-title ${NeutralFaceBold.className}`}>
              a web <br /> developer
            </h2>
          </div>
          <img id="about-image" src="/Me.jpg" alt="Sergio Allushaj" />
        </div>
        <p>
          With nearly two years of experience in front-end development, <br />
          I have gained expertise in HTML, CSS, JavaScript, and Next.js. <br />{" "}
          <br />I focus on creating modern, responsive, and highly functional
          websites that offer a unique design and an exceptional user
          experience.
        </p>
      </div>
    </div>
  );
}
