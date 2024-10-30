"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function Services() {
  return (
    <div className={`blocco ${NeutralFace.className}`} id="services">
      <h2 className={`${NeutralFaceBold.className}`}>WHAT CAN I DO</h2>
      <div className="services-list">
        <div className="service">
          <div className="service-title">
            <span>0.1</span>
            <h3
              className={`${NeutralFace.className}`}
              style={{ fontWeight: 100 }}
            >
              WEB DEVELOPMENT
            </h3>
          </div>
          <p>
            A website developed to captivate and convert can elevate your brand
            to new heights. My custom-coded sites are meticulously crafted to
            reflect your unique identity, delivering seamless experiences with a
            focus on animation—keeping your audience engaged and returning.
          </p>
        </div>
        <div className="service">
          <div className="service-title">
            <span>0.2</span>
            <h3
              className={`${NeutralFace.className}`}
              style={{ fontWeight: 100 }}
            >
              WEB DESIGN
            </h3>
          </div>
          <p>
            A website developed to captivate and convert can elevate your brand
            to new heights. My custom-coded sites are meticulously crafted to
            reflect your unique identity, delivering seamless experiences with a
            focus on animation—keeping your audience engaged and returning.
          </p>
        </div>
        <div className="service">
          <div className="service-title">
            <span>0.3</span>
            <h3
              className={`${NeutralFace.className}`}
              style={{ fontWeight: 100 }}
            >
              VIDEO MOTION
            </h3>
          </div>
          <p>
            A website developed to captivate and convert can elevate your brand
            to new heights. My custom-coded sites are meticulously crafted to
            reflect your unique identity, delivering seamless experiences with a
            focus on animation—keeping your audience engaged and returning.
          </p>
        </div>
      </div>
    </div>
  );
}
