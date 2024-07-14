import React, { useEffect } from "react";
import backgroundVideo from "../static/IPS_Drone_Footage.mp4";

const HomePage = ({ videoRef, blurAmount }) => {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Set playback speed to half
    }
  }, []);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          style={{ filter: `brightness(60%) blur(${blurAmount}px) ` }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* Your content goes here */}
          <h1 className="text-white text-4xl">Welcome to Our Site</h1>
        </div>
      </div>
      {/* Content below */}
      <div>test content below playing video</div>
    </>
  );
};

export default HomePage;
