import React, { useState } from 'react';

const AdminUploadImageForm = () => {
  // description, serviceTag, image
  const [formData, setFormData] = useState({
    description: '',
    serviceTag: '',
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
    const data = new FormData();
    const token = localStorage.getItem('access_token');
    data.append('description', formData.description);
    data.append('serviceTag', formData.serviceTag);
    data.append('image', formData.image);

    //make post request to services api
    let response = await fetch('/api/photos/modify', {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //check to make sure actually uploaded
    if (response.ok) {
      alert('Photo uploaded successfully!');
      // reset form to make another upload
      setFormData({
        description: '',
        serviceTag: '',
        image: null,
      });
    } else {
      alert('Failed to upload photo.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>serviceTag:</label>
          <textarea
            type="text"
            name="serviceTag"
            value={formData.serviceTag}
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
        <button type="submit">Upload Photo</button>
      </form>
    </div>
  );
};

export default AdminUploadImageForm;
