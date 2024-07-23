import React from "react";

const HomePagePictureDescription = ({ picture, content }) => {
  return (
    <div className="relative h-[40rem] w-[60%]  mx-auto my-auto flex overflow-hidden">
      <div className="relative z-10 h-[50%] w-[40%] my-auto bg-slate-100 flex shadow shadow-black">
        {content}
      </div>
      <div className="absolute top-1/2 right-0 z-0 transform -translate-y-1/2 translate-x-[30%]  w-full h-[80%] my-auto">
        <img
          src={picture}
          className="w-full h-full object-cover object-center m-auto  shadow shadow-black rounded-sm"
        />
      </div>
    </div>
  );
};

export default HomePagePictureDescription;
