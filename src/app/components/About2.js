"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function About2() {
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
        <div className="text-container">
          <h3 className={`${NeutralFaceBold.className}`}>ABOUT ME</h3>
          <p>
            I specialize in front-end development with experience in HTML, CSS,
            JavaScript and Next js. I focus on creating modern, responsive, and
            highly functional websites that offer a unique design and an
            exceptional user experience.
          </p>
          <a
            href="/CV ALLUSHAJ SERGIO.pdf"
            download="ALLUSHAJ SERGIO CV ITA.pdf"
            className="link-btn link"
          >
            DOWNLOAD.CV ITA
          </a>
          <a
            href="/CV ALLUSHAJ SERGIO (ENG).pdf"
            download="ALLUSHAJ SERGIO CV ENG.pdf"
            className=" link-btn link"
          >
            DOWNLOAD.CV ENG
          </a>
        </div>
      </div>
    </div>
  );
}
