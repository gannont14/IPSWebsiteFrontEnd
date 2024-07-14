import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const HomePageLayout = ({ content }) => {
  return (
    <div className="bg-[url(/Users/gannontubbs/Documents/IMG_1546.jpg)]">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default HomePageLayout;
