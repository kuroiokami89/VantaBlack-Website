"use client";

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AboutComponent from "./components/AboutComponent";
import Email from "./components/EmailComponent";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutComponent />
      <Services />
      <Projects />
      <Email />
    </>
  );
}
