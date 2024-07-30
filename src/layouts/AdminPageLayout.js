import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AdminPage from "../pages/AdminPage";

const AdminPageLayout = () => {
  return (
    <>
      <Navbar />
      <AdminPage />
      <Footer />
    </>
  );
};

export default AdminPageLayout;
