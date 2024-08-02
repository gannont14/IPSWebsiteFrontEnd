import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import VerticalGalleryCarousel from "../components/VerticalGalleryCarousel";

const PhotoGalleryPage = () => {
  let [photos, setPhotos] = useState([]);
  let [groupedPhotos, setGroupedPhotos] = useState({});

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

    const grouped = data.reduce((acc, photo) => {
      const { serviceTag } = photo;
      if (!acc[serviceTag]) {
        acc[serviceTag] = [];
      }
      acc[serviceTag].push(photo);
      return acc;
    }, {});

    setGroupedPhotos(grouped);

    setIsLoading(false);
  };

  // autoscroll for photo gallery
  useEffect(() => {
    const intervalLength = 3000;
    if (photos.length > 0) {
      const interval = setInterval(() => {
        setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, intervalLength); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [photos]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (photos.length == 0) {
    return <div className="pt-[10rem]"> No photos have been uploaded </div>;
  }

  return (
    <div className="pt-[10rem]">
      <div className="relative w-full h-[45rem] overflow-hidden">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === photoIndex ? "slide-in" : "slide-out"
            }`}
          />
        ))}
      </div>
      <div className="pt-[10rem]">
        <div>
          {Object.entries(groupedPhotos).map(([tag, photos]) => (
            <div key={tag} className="service-tag-group mb-10">
              <h2 className="text-2xl font-bold my-4">{tag}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-[5rem]">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="photo-card p-4 shadow-md rounded-lg"
                  >
                    <img
                      src={photo.image}
                      alt={photo.description}
                      className="h-[30rem] w-[20rem] object-cover rounded-lg"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold mb-2">{photo.title}</h2>
                      <p className="text-gray-700">{photo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* added style tag to add css class for the transitions */}{" "}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .slide-in {
          animation: slideIn 1s forwards;
        }

        .slide-out {
          animation: slideOut 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default PhotoGalleryPage;
