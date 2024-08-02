import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AdminLoginPage from '../pages/AdminLoginPage';

const AdminLoginLayout = () => {
  return (
    <>
      <Navbar />
      <AdminLoginPage />
      <Footer />
    </>
  );
};

export default AdminLoginLayout;
