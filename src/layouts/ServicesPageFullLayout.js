import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServicesPageFull from '../pages/ServicesPageFull';

const ServicesPageFullLayout = () => {
  return (
    <div>
      <Navbar />
      <ServicesPageFull />
      <Footer />
    </div>
  );
};

export default ServicesPageFullLayout;
