import React, { useEffect, useState } from 'react';
import { fetchWithTokenRefresh } from '../utils/apiUtils';

const AdminUploadAboutForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subheader: '',
    mainBodyContent: '',
    image: null,
  });

  useEffect(() => {
    const fetchExistingContent = async () => {
      const response = await fetch('api/aboutMainContent');
      if (response.ok) {
        const data = await response.json();
        setFormData({
          title: data.title,
          subheader: data.subheader,
          mainBodyContent: data.mainBodyContent,
          image: null,
        });
      }
    };

    fetchExistingContent();
  }, []);
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const token = localStorage.getItem('access_token');
    data.append('title', formData.title);
    data.append('subheader', formData.subheader);
    data.append('mainBodyContent', formData.mainBodyContent);
    if (formData.image){
      data.append('image', formData.image);
    }
  }
  



  return (
    <div className="flex w-full h-full">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>subHeader</label>
          <textarea
            name="subheader"
            value={formData.subheader}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>mainBodyContent:</label>
          <textarea
            name="mainBodyContent"
            value={formData.mainBodyContent}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Upload About Section</button>
      </form>
    </div>
  );
};

export default AdminUploadAboutForm;
