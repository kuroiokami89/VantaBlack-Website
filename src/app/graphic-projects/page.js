"use client";

import { useEffect, useState } from "react";
import { PhotoList } from "./PhotoList";
import { NeutralFace } from "../components/fonts";

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

  const [selectedImage, setSelectedImage] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className={`${NeutralFace.className}`}>
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
      {/* {overlayVisible && (
        <div
          onClick={closeOverlay}
          className={`overlay ${NeutralFace.className}`}
        >
          <button className="close-button" onClick={closeOverlay}>
            X
          </button>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt="Selected" />
            <div className="overlay-content-text">
              <h2 className={`${NeutralFace.className}`}>
                {selectedImage.description}
              </h2>
              <div className="overlay-list">
                <span>{selectedImage.device}</span>
                <span>{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
