import React, { useEffect, useRef, useState } from 'react';
// this file is massive and could be converted to maybe a smaller file or different file type?
import HomePagePictureDescription from '../components/HomePagePictureDescription';
import LoadingSpinner from '../components/LoadingSpinner';
import bannerImage from '../static/BannerImage.jpg';
import heroBackgroundImage from '../static/IMG_1691.jpeg';
import backgroundVideo from '../static/IPS_Drone_Footage.mp4';

const HomePage = ({ videoRef, blurAmount }) => {
  const imageRef = useRef(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Set playback speed to half
    }

    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };
    setIsLoading(false);
  }, [videoRef]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden z-[1] drop-shadow-2xl">
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
          {/* central hero content */}
          <h1 className="text-white text-4xl font-bold"></h1>
        </div>
      </div>

      {/* Contact us section */}
      <div className=" h-[60rem] bg-bgcustom flex">
        <HomePagePictureDescription
          picture={heroBackgroundImage}
          content={
            <div className="text-1xl md:text-3xl text-gray-200 font-thin text-center p-3 m-auto rounded-lg">
              <h1 className="text-2xl md:text-5xl text-gray-300 pb-7 font-semibold">
                Get in touch!
              </h1>
              <h2>Contact us to speak with us or request a quote today!</h2>
              <a
                href="#/contactus/"
                className="font-semibold text-white underline mt-[3rem] block hover:text-white w-[50%] mx-auto"
              >
                Contact Us
              </a>
            </div>
          }
        />
      </div>
      {/* Large image banner */}
      <div className="w-full h-[70vh] drop-shadow-2xl overflow-hidden parallax-container">
        <img
          src={bannerImage}
          ref={imageRef}
          className="parallax-image"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        />
      </div>
      {/* picture with about section flip orientation? */}
      <div className=" h-[60rem] bg-bgcustom flex">
        <HomePagePictureDescription
          picture={heroBackgroundImage}
          content={
            <div className="text-1xl md:text-3xl text-white font-thin text-center p-3 m-auto rounded-lg">
              Over a <b>decade</b> of landscaping experience ensure a
              beautifully designed, built, and managed landscape
            </div>
          }
          flipped={true}
        />
      </div>
      <style jsx>
        {`
          .parallax-container {
            position: relative;
            overflow: hidden;
          }

          .parallax-image {
            position: absolute;
            bottom : 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transform: translateZ(
              0
            
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
