import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const HomePageLayout = ({ content }) => {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
};

export default HomePageLayout;
