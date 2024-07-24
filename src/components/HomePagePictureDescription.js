import React from "react";

const HomePagePictureDescription = ({ picture, content, flipped }) => {
  return (
    <div className="relative h-[40rem] w-[60%] mx-auto my-auto flex overflow-hidden">
      {flipped ? (
        <>
          <div className="absolute top-1/2 left-0 z-0 transform -translate-y-1/2 -translate-x-[30%] w-full h-[80%] my-auto">
            <img
              src={picture}
              className="w-full h-full object-cover object-center m-auto shadow shadow-black rounded-sm overflow-hidden"
            />
          </div>
          <div className="relative z-10 h-[50%] w-[40%] my-auto bg-primary flex ml-auto">
            {content}
          </div>
        </>
      ) : (
        <>
          <div className="relative z-10 h-[50%] w-[40%] my-auto bg-primary flex shadow-lg rounded-sm">
            {content}
          </div>
          <div className="absolute top-1/2 right-0 z-0 transform -translate-y-1/2 translate-x-[30%] w-full h-[80%] my-auto">
            <img
              src={picture}
              className="w-full h-full object-cover object-center m-auto shadow shadow-black rounded-sm overflow-hidden"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePagePictureDescription;
