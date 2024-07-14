import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const HomePageLayout = ({ content }) => {
  //handle video blurring and navbar changes on scroll
  // background by default to transparent for the home page
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  //   used to get height of video to check for when background should change
  const videoRef = useRef(null);

  //   used to have background blur more as user scrolls down
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoHeight = videoRef.current.clientHeight;
        const scrollY = window.scrollY;
        if (scrollY > videoHeight) {
          setNavbarBg("bg-gray-900 bg-opacity-75"); // Set your desired background color here
        } else {
          setNavbarBg("bg-transparent");
        }

        // adjust blur amount based on scroll position
        const blur = Math.min(scrollY / 100, 10);
        setBlurAmount(blur);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar className={navbarBg} />
      <HomePage videoRef={videoRef} blurAmount={blurAmount} />
      <Footer />
    </>
  );
};

export default HomePageLayout;
