import React, { useState } from 'react';
import { fetchWithTokenRefresh } from '../utils/apiUtils';
import { ServicesCard } from './ServicesCard';

// depending on amount of different forms are going to need to come out, i.e. services, about etc. might need to parameterize this to handle
// different formats and requests

const AdminUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    extendedBody: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  //update state change of title, body
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //update state change of images
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));

    setFormData({
      ...formData,
      image: file,
    });
  };

  //   form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');
    const data = new FormData();
    data.append('title', formData.title);
    data.append('body', formData.body);
    data.append('extendedBody', formData.body);
    data.append('image', formData.image);

    const response = await fetchWithTokenRefresh('/api/services/modify', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    if (response.ok) {
      alert('Service uploaded successfully!');
      setFormData({
        title: '',
        body: '',
        extendedBody: '',
        image: null,
      });
      setImagePreview(null);
    } else {
      alert('Failed to upload service.');
    }
  };

  return (
    <div className="flex h-full w-full">
      <form className="form " onSubmit={handleSubmit}>
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
          <label>Body:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Extended Body:</label>
          <textarea
            name="extendedBody"
            value={formData.extendedBody}
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
        <button type="submit">Upload Service</button>
      </form>
      <div className="flex align-middle  h-auto w-full ">
        <div className="m-auto flex-col">
          <div>service card preview</div>
          <div className="w-[30rem]">
            <ServicesCard
              title={formData.title}
              body={formData.body}
              extendedBody={formData.extendedBody}
              image={imagePreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUploadForm;
