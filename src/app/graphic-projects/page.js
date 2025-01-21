"use client";

import { useEffect } from "react";
import { NeutralFace } from "../components/fonts.js";
import dynamic from "next/dynamic";

// Dynamically import Masonry (only available on the client side)
const Masonry = dynamic(() => import("masonry-layout"), { ssr: false });

export default function GraphicProjectsPage() {
  useEffect(() => {
    const grid = document.querySelector(".grid");
    if (grid) {
      new Masonry(grid, {
        // Set itemSelector so .grid-sizer is not used in layout
        itemSelector: ".grid-item",
        // Use element for option
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });
    }
  }, []);

  return (
    <div className="grid">
      <div className="grid-sizer"></div>
      <div className="grid-item item-1"></div>
      <div className="grid-item grid-item--width2 item-2"></div>
      <div className="grid-item grid-item--height2 item-3"></div>
    </div>
  );
}
