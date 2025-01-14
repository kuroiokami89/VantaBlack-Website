"use client";

import { NeutralFace } from "../components/fonts.js";

export default function AboutComponent() {
  return (
    <div id="about" className={`${NeutralFace.className}`}>
      <p>
        Hi, I’m Sergio Allushaj, also known as Vantablack on social media. I’m a
        junior front-end developer and graphic designer from Italy. I started
        with photography and graphic design, which sparked my passion for visual
        communication. Over time, I shifted to web development, blending
        creativity and technology. I now create modern, responsive websites
        using HTML, CSS, JavaScript, and Next.js, while leveraging Adobe
        software and Figma to craft intuitive and visually engaging user
        experiences.
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
