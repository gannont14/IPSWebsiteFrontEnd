import React, { useState } from 'react';
import { fetchWithTokenRefresh } from '../utils/apiUtils';
import { ServicesCard } from './ServicesCard';

// depending on amount of different forms are going to need to come out, i.e. services, about etc. might need to parameterize this to handle
// different formats and requests

const AdminUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    serviceId: '',
    body: '',
    summaryBody: '',
    photoGalleryTag: '',

    cardImage: null,
    beforeImage: null,
    afterImage: null,
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
    // const file = e.target.files[0];
    // setImagePreview(URL.createObjectURL(file));
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });

    if (name === 'cardImage' && files[0]) {
      const previewURL = URL.createObjectURL(files[0]);
      setImagePreview(previewURL);
    }
  };

  //   form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');
    const data = new FormData();
    data.append('title', formData.title);
    data.append('serviceId', formData.serviceId);
    data.append('body', formData.body);
    data.append('summaryBody', formData.summaryBody);
    data.append('photoGalleryTag', formData.photoGalleryTag);

    data.append('cardImage', formData.cardImage);
    data.append('beforeImage', formData.beforeImage);
    data.append('afterImage', formData.afterImage);

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
        serviceId: '',
        body: '',
        summaryBody: '',
        photoGalleryTag: '',

        cardImage: null,
        beforeImage: null,
        afterImage: null,
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
          <label>Service ID:</label>
          <input
            type="text"
            name="serviceId"
            value={formData.serviceId}
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
          <label>Summary Body:</label>
          <textarea
            name="summaryBody"
            value={formData.summaryBody}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Photo Gallery Tag:</label>
          <input
            type="text"
            name="photoGalleryTag"
            value={formData.photoGalleryTag}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Card Image:</label>
          <input
            type="file"
            name="cardImage"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <div>
          <label>Before Image:</label>
          <input
            type="file"
            name="beforeImage"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <div>
          <label>After Image:</label>
          <input
            type="file"
            name="afterImage"
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
              extendedBody={formData.body}
              cardImage={imagePreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUploadForm;
