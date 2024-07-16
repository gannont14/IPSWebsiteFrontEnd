import React, { useEffect, useState } from "react";

const PhotoGalleryPage = () => {
  let [photos, setPhotos] = useState([]);

  //   start with  6 blank cards to fill full screens worth of space
  let [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="pt-[10rem]">
      {photos.map((photo) => (
        <div className="h-[20rem] w-[20rem] m-2">
          <img src={photo.image}></img>
        </div>
      ))}
    </div>
  );
};

export default PhotoGalleryPage;
