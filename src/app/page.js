"use client";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AboutComponent from "./components/AboutComponent";
import About2 from "./components/About2";

export default function Home() {
  return (
    <>
      <Intro />
      {/* <About2 /> */}
      <Services />
      <Projects />
    </>
  );
}
