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
    <div className="pt-[10rem]  w-full h-[80vh] flex">
      {/* left aligned content */}
      <div className=" w-[25%] flex flex-col">
        <h1>Upload Type</h1>
        <button
          className={`my-5 ${uploadSelection == 'service' ? 'font-bold' : ''} `}
          onClick={() => setUploadSelection('service')}
        >
          Service
        </button>
        <button
          className={`my-5 ${uploadSelection == 'photo' ? 'font-bold' : ''} `}
          onClick={() => setUploadSelection('photo')}
        >
          Photo
        </button>
        <button
          className={`my-5 ${uploadSelection == 'about' ? 'font-bold' : ''} `}
          onClick={() => setUploadSelection('about')}
        >
          About
        </button>
      </div>
      {/* right aligned content */}
      <div className="border border-green-500 w-full">{content}</div>

      <style>
        {`

    input, textarea{
      border: solid;
      border-radius: 3px;
      margin: 5px;
    }

    form{
      flex-direction: column;
    }

`}
      </style>
    </div>
  );
};

export default AdminPage;
