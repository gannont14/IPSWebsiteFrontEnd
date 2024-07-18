import React, { useEffect, useState } from "react";

// THIS WAS A FAILED ATTEMPT THAT DOESN'T DISPLAY ANYTHING, COULD STILL LOOK COOL

const VerticalGalleryCarousel = ({ photos }) => {
  //   vertical carousel that shows previous photos above and below and autoscrolls through them
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const length = photos.length;
    const nextIndex = (currentIndex + 1) % length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevious = () => {
    const length = photos.length;
    const previousIndex = (currentIndex - 1 + length) % length;
    setCurrentIndex(previousIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container border border-red-500 h-[80rem]">
      <div className="carousel">
        {photos.map((photo, index) => {
          let className = "carousel-item";

          if (index === currentIndex) {
            className += " active";
          } else if (
            index ===
            (currentIndex - 1 + photos.length) % photos.length
          ) {
            className += " prev";
          } else if (index === (currentIndex + 1) % photos.length) {
            className += " next";
          }

          <div key={index} className={className}>
            <img
              src={photo.image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          </div>;
        })}
      </div>
      <div className="carousel-buttons">
        <button onClick={goToPrevious} className="carousel-button">
          &lt;
        </button>
        <button onClick={goToNext} className="carousel-button">
          &gt;
        </button>
      </div>
      <style jsx>
        {`
          .carousel-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin: auto;
            overflow: hidden;
          }

          .carousel {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }

          .carousel-item {
            position: absolute;
            width: 70%; /* Adjust the width to show parts of the next and previous images */
            transition: transform 0.5s ease, opacity 0.5s ease;
          }

          .carousel-item img {
            width: 100%;
            height: auto;
          }

          .active {
            transform: translateX(0);
            z-index: 2;
            opacity: 1;
          }

          .prev {
            transform: translateX(-100%);
            z-index: 1;
            opacity: 0.5; /* Adjust opacity for the next and previous images */
          }

          .next {
            transform: translateX(100%);
            z-index: 1;
            opacity: 0.5;
          }

          .carousel-buttons {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
          }

          .carousel-button {
            background: rgba(0, 0, 0, 0.5);
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0.5rem 1rem;
          }

          .carousel-button:hover {
            background: rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    </div>
  );
};

export default VerticalGalleryCarousel;
