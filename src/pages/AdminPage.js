import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUploadAboutForm from '../components/AdminUploadAboutForm';
import AdminUploadForm from '../components/AdminUploadForm';
import AdminUploadImageForm from '../components/AdminUploadImageForm';

const AdminPage = () => {
  const [uploadSelection, setUploadSelection] = useState('service');
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  // use is authenticated or not

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token !== null) {
      setIsAuth(true);
    } else {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  // service, image, about section

  useEffect(() => {
    switch (uploadSelection) {
      case 'service':
        setContent(<AdminUploadForm />);
        break;
      case 'photo':
        setContent(<AdminUploadImageForm />);
        break;
      case 'about':
        setContent(<AdminUploadAboutForm />);
        break;
      default:
        setContent(<div>No choice selected</div>);
        break;
    }
  }, [uploadSelection]);

  if (!isAuth) {
    return <div className="pt-[10rem]">User Not authorized</div>;
  }

  return (
    <div className="pt-[10rem] h-[80vh] content">
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
                setUploadSelection('service');
              }}
            >
              Service
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setUploadSelection('about');
              }}
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setUploadSelection('photo');
              }}
            >
              Photo
            </button>
          </li>
        </ul>
      </div>

      {content}
      <style>
        {`

              content.button {
                border: solid;
                border-radius: 3px;
                margin: 5px;
                width: 20rem;
                height: 3rem;
              }

          input,
          textarea {
            border: solid;
            border-radius: 3px;
            margin: 5px;
          }

          form {
            padding: 5px;
            padding-left: 20px;
          }
`}
      </style>
    </div>
  );
};

export default AdminPage;
