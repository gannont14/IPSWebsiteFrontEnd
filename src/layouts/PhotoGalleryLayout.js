import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PhotoGallery from "../pages/PhotoGalleryPage";

const PhotoGalleryLayout = () => {
  return (
    <>
      <Navbar />
      <PhotoGallery />
      <Footer />
    </>
  );
};

export default PhotoGalleryLayout;
