"use client";

import { useEffect, useState } from "react";
import { PhotoList } from "./PhotoList";
import { NeutralFace, Kusanagi } from "../components/fonts";

export default function Gallery() {
  useEffect(() => {
    let Masonry; // Variabile per il modulo Masonry
    let masonry;

    const initMasonry = async () => {
      if (typeof window !== "undefined") {
        // Importa Masonry solo lato client
        Masonry = (await import("masonry-layout")).default;

        masonry = new Masonry("#gallery", {
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
          percentPosition: true,
        });

        const imgLoadPromises = Array.from(
          document.querySelectorAll("#gallery img")
        ).map(
          (img) =>
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
        );

        Promise.all(imgLoadPromises).then(() => {
          masonry.layout();
        });
      }
    };

    initMasonry();

    return () => masonry && masonry.destroy(); // Distruggi Masonry al momento dello smontaggio
  }, []);

  return (
    <div id="gallery" className={`${NeutralFace.className}`}>
      <div className="section-title">
        <h2 className={`${Kusanagi.className}`}>PORTFOLIO</h2>
      </div>
      <div className="grid-sizer"></div>
      {PhotoList.map((image, index) => (
        <div
          className="grid-item"
          key={index}
          onClick={() => handleImageClick(image)}
        >
          <img src={image.url} alt={`Image ${index + 1}`} />
        </div>
      ))}
      <div className="grid-item">
        <video autoPlay>
          <source src="/projects/Halloween Skeleton.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
