"use client";

import { OrbitronLight, Ki } from "./fonts";

export default function About() {
  return (
    <div id="about" className={`${Ki.className}`}>
      <p>
        Hi, I'm Sergio Allushaj, a web developer and designer skilled in modern
        web technologies like React and Next.js, complemented by expertise in
        Figma and Adobe Creative Suite. I specialize in building user-friendly,
        responsive digital experiences and enjoy turning ideas into engaging
        solutions through collaboration.
      </p>
      <div className="section-title">
        <h2 className={`${OrbitronLight.className}`}>ABOUT ME</h2>
      </div>
    </div>
  );
}
