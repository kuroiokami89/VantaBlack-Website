import { useEffect } from "react";

export default function LoadingVideo({ onLoaded }) {
  useEffect(() => {
    // Automatically trigger the onLoaded function after the video ends or after a set duration
    const timer = setTimeout(() => {
      onLoaded(); // Trigger when video has played for 5 seconds
    }, 5000); // Adjust this to match your video duration

    return () => clearTimeout(timer); // Clean up the timer
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
