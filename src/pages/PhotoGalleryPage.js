import React, { useEffect, useState } from "react";

const PhotoGalleryPage = () => {
  let [photos, setPhotos] = useState([]);

  //   start with  6 blank cards to fill full screens worth of space
  let [isLoading, setIsLoading] = useState(true);

  //   keep track of current photo on carousel
  let [photoIndex, setPhotoIndex] = useState(0);

  //fetch from photos

  let API_URL = "/api/photos";

  useEffect(() => {
    getPhotos();
  }, []);

  let getPhotos = async () => {
    let response = await fetch(API_URL, {
      method: "GET",
    });

    console.log("sent request");

    let data = await response.json();
    setPhotos(data);
    setIsLoading(false);
  };

  let nextPhoto = () => {
    setPhotoIndex((photoIndex + 1 + photos.length) % photos.length);
    console.log("test");
  };

  let previousPhoto = () => {
    setPhotoIndex((photoIndex - 1 + photos.length) % photos.length);
    console.log("test1");
  };

  if (isLoading) {
    return <div className="pt-[10rem]">Loading...</div>;
  }

  if (photos.length == 0) {
    return <div className="pt-[10rem]"> No photos have been uploaded </div>;
  }

  return (
    <div className="pt-[10rem]">
      <h1 className="text-white text-center font-bold text-xl">
        Photo gallery
      </h1>

      <div className="carousel w-full h-[45rem]">
        <div
          id={`slide${photoIndex}`}
          className="carousel-item relative w-full"
        >
          <img src={photos[photoIndex].image} className="w-full"></img>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a onClick={previousPhoto} className="btn btn-circle">
              /
            </a>
            <a onClick={nextPhoto} className="btn btn-circle">
              \
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryPage;
