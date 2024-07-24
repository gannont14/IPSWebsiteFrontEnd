import React from "react";

export const ServicesCard = ({ title, body, image }) => {
  return (
    <div className="card card-compact bg-white w-30 shadow-xl">
      <figure>
        <img src={image} alt="Insert image alt text here" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-center p-3">
          <button className="btn bg-primary text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};
