import React from "react";
import AdminUploadAboutForm from "../components/AdminUploadAboutForm";
// import AdminUploadImageForm from "../components/AdminUploadImageForm";

const AdminPage = () => {
  return (
    <div className="pt-[10rem]">
      <h1>admin page</h1>
      {/* <AdminUploadForm /> */}
      {/* <AdminUploadImageForm /> */}
      <AdminUploadAboutForm />
    </div>
  );
};

export default AdminPage;
