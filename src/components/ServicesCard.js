import React from "react";

export const ServicesCard = ({ title, body }) => {
  return (
    <div className=" bg-gray-700 p-5 rounded-lg shadow shadow-black min-h-[400px] width-max">
      <h1 className="text-white font-bold">{title}</h1>

      <p className="text-white ">{body}</p>
    </div>
  );
};
