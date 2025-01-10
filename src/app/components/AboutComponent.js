"use client";

import { NeutralFace } from "../components/fonts.js";

export default function AboutComponent() {
  return (
    <div id="about" className={`${NeutralFace.className}`}>
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

      <a
        className="link-btn link"
        href="/CV ALLUSHAJ SERGIO - ENG.pdf"
        download
      >
        DOWNLOAD CV (ENG)
      </a>
      <a className="link-btn link" href="/CV ALLUSHAJ SERGIO.pdf" download>
        DOWNLOAD CV (ITA)
      </a>
    </div>
  );
}
