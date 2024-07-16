import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesPage from "../pages/ServicesPage";

const ServicesPageLayout = () => {
  return (
    <>
      <Navbar />
      <ServicesPage />
      <Footer />
    </>
  );
};

export default ServicesPageLayout;
