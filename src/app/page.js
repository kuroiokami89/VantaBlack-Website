"use client";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <div id="top"></div>
      <Intro />
      {/* <About /> */}
      <Projects />
      <Services />
    </>
  );
}
