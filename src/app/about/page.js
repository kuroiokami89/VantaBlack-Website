"use client";

import { NeutralFace } from "../components/fonts.js";

export default function About() {
  return (
    <div id="about" className={`${NeutralFace.className}`}>
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
      <a className="link-btn link" href="/">
        RETURN TO HOMEPAGE
      </a>
    </div>
  );
}
