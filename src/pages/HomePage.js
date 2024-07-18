import React, { useEffect } from "react";
// this file is massive and could be converted to maybe a smaller file or different file type?
import heroBackgroundImage from "../static/IMG_1691.jpeg";
import backgroundVideo from "../static/IPS_Drone_Footage.mp4";

const HomePage = ({ videoRef, blurAmount }) => {
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Set playback speed to half
    }
  }, []);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden z-[-1]">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
          style={{ filter: `brightness(60%) blur(${blurAmount}px) ` }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* Your content goes here */}
          <h1 className="text-white text-4xl font-bold">
            The most we can fit in the trailer is 15 yards
          </h1>
        </div>
      </div>
      {/* Content below */}
      <div className="border border-primary h-[60rem] bg-white flex">
        <div className="h-[40rem] w-[75%] border border-red-500 mx-auto my-auto flex overflow-hidden">
          <div className="h-[50%] w-[40%] my-auto bg-slate-100 rounded-lg flex shadow shadow-black">
            <img
              src={heroBackgroundImage}
              className="w-[90%] h-[90%] object-cover m-auto rounded-lg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
