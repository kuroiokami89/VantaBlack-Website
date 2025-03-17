"use client";

import { Kusanagi, Ki } from "./fonts";

export default function Email() {
  return (
    <div id="email">
      <span className={`${Ki.className}`}>INTRESTED IN MY SERVICES ?</span>
      <a
        href="mailto:sergioallushaj@gmail.com"
        className={`${Kusanagi.className}`}
      >
        CONTACT ME
      </a>
    </div>
  );
}
