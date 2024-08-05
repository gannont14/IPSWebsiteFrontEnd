import React, { useState } from 'react';

export const ServicesCard = ({ title, body, image, extendedBody }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative card card-compact bg-white w-30 shadow-xl h-[50vh]`}
    >
      {/* Default card before expanded */}
      <figure>
        <img src={image} alt="Insert image alt text here" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black">{title}</h2>
        <p className=" text-gray-700">{body}</p>
        <div className="card-actions justify-center p-3">
          <button onClick={toggleExpand} className="btn bg-primary text-white">
            Read More
          </button>
        </div>
      </div>

      {/* overlay for button click */}
      {isExpanded && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-90 flex flex-col items-center justify-center z-10 rounded-lg">
          <div className="text-center text-white h-[78%] p-7">
            <p>{extendedBody}</p>
          </div>
          <div className="card-actions justify-center p-3">
            <button
              onClick={toggleExpand}
              className="btn bg-primary text-white"
            >
              Read More
            </button>
          </div>
        </div>
      )}
    </div>

    // <div className="relative border border-gray-300 p-4 my-4">
    //   <h2 className="text-xl font-bold">{title}</h2>
    //   <p className="mt-2">{body}</p>
    //   <button
    //     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    //     onClick={toggleExpand}
    //   >
    //     {isExpanded ? "Hide Info" : "Show Info"}
    //   </button>

    //   {/* Overlay div */}
    //   {isExpanded && (
    //     <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
    //       <div className="text-center">
    //         <p>{body}</p>
    //         <button
    //           className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
    //           onClick={toggleExpand}
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

// ${isExpanded ? "h-auto" : "h-[50vh]"}
