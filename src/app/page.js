"use client";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <div id="top"></div>
      <Intro />
      <Projects />
      <Services />
    </>
  );
}
