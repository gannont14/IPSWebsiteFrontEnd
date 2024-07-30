import React, { useEffect, useState } from "react";
import AdminUploadAboutForm from "../components/AdminUploadAboutForm";
import AdminUploadForm from "../components/AdminUploadForm";
import AdminUploadImageForm from "../components/AdminUploadImageForm";

const AdminPage = () => {
  const [uploadSelection, setUploadSelection] = useState("service");
  const [content, setContent] = useState(null);
  // service, image, about section

  useEffect(() => {
    switch (uploadSelection) {
      case "service":
        setContent(<AdminUploadForm />);
        break;
      case "photo":
        setContent(<AdminUploadImageForm />);
        break;
      case "about":
        setContent(<AdminUploadAboutForm />);
        break;
      default:
        setContent(<div>No choice selected</div>);
        break;
    }
  }, [uploadSelection]);

  return (
    <div className="pt-[10rem]">
      <div className="dropdown bg-white text-black ">
        <button
          tabIndex={0}
          role="button"
          className="btn bg-white text-black m-1 border-black"
        >
          Select What you want to upload
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow w-[22rem]"
        >
          <li>
            <button
              className="bg-white text-black"
              onClick={() => {
                setUploadSelection("service");
              }}
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setUploadSelection("about");
              }}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setUploadSelection("photo");
              }}
            >
              Photo
            </button>
          </li>
        </ul>
      </div>

      {content}
    </div>
  );
};

export default AdminPage;
