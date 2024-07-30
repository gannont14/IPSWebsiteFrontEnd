import React, { useState } from "react";

// depending on amount of different forms are going to need to come out, i.e. services, about etc. might need to parameterize this to handle
// different formats and requests

const AdminUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
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
    data.append("title", formData.title);
    data.append("body", formData.body);
    data.append("image", formData.image);

    //make post request to services api
    let response = await fetch("/api/services", {
      method: "POST",
      body: data,
    });

    //check to make sure actually uploaded
    if (response.ok) {
      alert("Service uploaded successfully!");
      // reset form to make another upload
      setFormData({
        title: "",
        body: "",
        image: null,
      });
    } else {
      alert("Failed to upload service.");
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
      <style jsx>
        {`
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

          button {
            border: solid;
            border-radius: 3px;
            margin: 5px;
            width: 20rem;
            height: 3rem;
          }
        `}
      </style>
    </div>
  );
};

export default AdminUploadForm;
