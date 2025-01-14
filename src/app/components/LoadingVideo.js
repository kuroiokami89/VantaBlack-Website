import { useEffect } from "react";

export default function LoadingVideo({ onLoaded }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
      }}
    >
      <video
        src="/Vantablack-Intro2.mp4"
        autoPlay
        muted
        onEnded={onLoaded} // Trigger when video ends
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
