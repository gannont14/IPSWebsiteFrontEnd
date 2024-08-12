import React, { useState } from 'react';

// depending on amount of different forms are going to need to come out, i.e. services, about etc. might need to parameterize this to handle
// different formats and requests

const AdminUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    extendedBody: '',
    image: null,
  });

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
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  //   form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');
    const data = new FormData();
    data.append('title', formData.title);
    data.append('body', formData.body);
    data.append('image', formData.image);

    const response = await fetch('/api/services/modify', {
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
    } else {
      alert('Failed to upload service.');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
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
          <label>Title:</label>
          <input
            type="text"
            name="extendedBody"
            value={formData.extendedBody}
            onChange={handleChange}
            required
          />
        </div>{' '}
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
    </div>
  );
};

export default AdminUploadForm;
