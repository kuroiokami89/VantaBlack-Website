"use client";

import { NeutralFace } from "../components/fonts.js";

export default function AboutComponent() {
  return (
    <div id="about" className={`${NeutralFace.className}`}>
      <p>
        Hi, I’m Sergio Allushaj, aka Vantablack, a junior front-end developer
        and graphic designer from Italy. Starting with photography and graphic
        design, I discovered my passion for visual storytelling. Now, I focus on
        building modern, responsive websites using HTML, CSS, JavaScript, and
        Next.js, while designing intuitive interfaces with Adobe Creative Suite
        and Figma. My goal is to create functional, visually appealing digital
        experiences.
      </p>
      <a
        className="link-btn link"
        href="/cv/CV ALLUSHAJ SERGIO - ENG.pdf"
        download
      >
        DOWNLOAD CV (ENG)
      </a>
      <a className="link-btn link" href="/cv/CV ALLUSHAJ SERGIO.pdf" download>
        DOWNLOAD CV (ITA)
      </a>
    </div>
  );
}
