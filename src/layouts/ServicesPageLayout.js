import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesPage from "../pages/ServicesPage";

const ServicesPageLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url(/Users/gannontubbs/Documents/IMG_1546.jpg)] bg-cover bg-center">
        <ServicesPage />
      </div>
      <Footer />
    </>
  );
};

export default ServicesPageLayout;
