import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactUsPage from "../pages/ContactUsPage";

const ContactUsLayout = () => {
  return (
    <>
      <Navbar />

      <ContactUsPage />

      <Footer />
    </>
  );
};

export default ContactUsLayout;
