"use client";

import { Kusanagi, Ki } from "./fonts";

export default function Email() {
  return (
    <div id="email">
      <span className={`${Ki.className}`}>INTERESTED IN WORKING WITH ME ?</span>
      <a
        href="mailto:sergioallushaj@gmail.com"
        className={`${Kusanagi.className}`}
      >
        GET IN TOUCH
      </a>
    </div>
  );
}
