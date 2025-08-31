import localFont from "next/font/local";

/* FONT USED FOR TITLES (h1 TAGS) */
const Kusanagi = localFont({
  src: "../fonts/Kusanagi.otf",
});

/* FONT USED FOR SUB-TITLES (h2-h3 TAGS) */
const OrbitronLight = localFont({
  src: "../fonts/Orbitron Light.otf",
});

/* FONT USED FOR LINKS PARAGRAPHS AND SPANS (a, p AND span TAGS) */
const Ki = localFont({
  src: "../fonts/Ki-Regular.otf",
});

export { Kusanagi, OrbitronLight, Ki };
