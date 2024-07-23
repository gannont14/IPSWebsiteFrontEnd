import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";

const AboutPageLayout = () => {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
};

export default AboutPageLayout;
