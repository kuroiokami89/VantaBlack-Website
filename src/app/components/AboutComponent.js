"use client";

import { Kusanagi, OrbitronLight, Reno, Ki } from "../components/fonts.js";

export default function AboutComponent() {
  return (
    <div id="about" className={`${Ki.className}`}>
      <h2 className={`${Kusanagi.className}`}>SERGIO ALLUSHAJ</h2>
      <p>
        Hi! I’m Sergio Allushaj (Vantablack), a junior front-end developer and
        graphic designer from Italy. Merging my background in photography/design
        with visual storytelling, I now build modern, responsive websites using
        HTML, CSS, JavaScript, and Next.js, while crafting interfaces in Figma
        and Adobe Suite. I strive to create functional, visually engaging
        digital experiences.
      </p>
      <a className="link-btn link" href="/cv/CV ALLUSHAJ SERGIO.pdf" download>
        DOWNLOAD CV (ITA)
      </a>
    </div>
  );
}
