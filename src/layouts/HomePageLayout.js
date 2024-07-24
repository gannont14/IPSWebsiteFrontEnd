import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const HomePageLayout = () => {
  //handle video blurring and navbar changes on scroll
  // background by default to transparent for the home page
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const [textClasses, setTextClasses] = useState(
    "text-white hover:underline hover:bg-transparent hover:border-white hover:text-white"
  );
  //   used to get height of video to check for when background should change
  const videoRef = useRef(null);

  //   used to have background blur more as user scrolls down
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoHeight = videoRef.current.clientHeight;
        const scrollY = window.scrollY;
        if (scrollY + 150 > videoHeight) {
          setNavbarBg("bg-white shadow shadow-lg");
          setTextClasses(
            "text-black hover:underline hover:bg-transparent hover:border-black hover:text-black"
          );
        } else {
          setNavbarBg("bg-transparent");
          setTextClasses(
            "text-white hover:underline hover:bg-transparent hover:border-white hover:text-white"
          );
        }

        // adjust blur amount based on scroll position
        const blur = Math.min(scrollY / 100, 10);
        setBlurAmount(blur);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarBg]);

  return (
    <>
      <Navbar navClassName={navbarBg} textClassName={textClasses} />
      <HomePage videoRef={videoRef} blurAmount={blurAmount} />
      <Footer />
    </>
  );
};

export default HomePageLayout;
