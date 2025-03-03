"use client";

import { NeutralFace, NeutralFaceBold, OrbitronLight, Kusanagi } from "./fonts";

export default function Email() {
  return (
    <div id="email">
      <span className={`${OrbitronLight.className}`}>
        WHANT TO GET IN CONTACT?
      </span>
      <a
        href="mailto:sergioallushaj@gmail.com"
        className={`${Kusanagi.className}`}
      >
        CONTACT ME
      </a>
    </div>
  );
}
