"use client";

import { NeutralFace, OrbitronLight } from "../components/fonts.js";

export default function AboutComponent() {
  return (
    <div id="about" className={`${OrbitronLight.className}`}>
      <p>
        Hi! I’m Sergio Allushaj (Vantablack), a junior front-end developer and
        graphic designer from Italy. Merging my background in photography/design
        with visual storytelling, I now build modern, responsive websites using
        HTML, CSS, JavaScript, and Next.js, while crafting interfaces in Figma
        and Adobe Suite. I strive to create functional, visually engaging
        digital experiences.
      </p>
      {/* <a
        className="link-btn link"
        href="/cv/CV ALLUSHAJ SERGIO - ENG.pdf"
        download
      >
        DOWNLOAD CV (ENG)
      </a> */}
      <a className="link-btn link" href="/cv/CV ALLUSHAJ SERGIO.pdf" download>
        DOWNLOAD CV (ITA)
      </a>
    </div>
  );
}
