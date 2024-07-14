import React from "react";

export const ServicesCard = ({ title, body, image }) => {
  return (
    <div className=" frosted-glass p-5 rounded-lg shadow shadow-black min-h-[400px] width-max">
      <h1 className="text-white font-bold">{title}</h1>
      <p className="text-white ">{body}</p>
      {/* images work, some might not need images, maybe add functionality to check if image has been uploaded and reformat card accordingly? */}
      <img src={image}></img>
    </div>
  );
};
