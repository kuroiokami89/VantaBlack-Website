"use client";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Intro />
      <Services />
      {/* <Projects2 /> */}
      <Projects />
    </>
  );
}
