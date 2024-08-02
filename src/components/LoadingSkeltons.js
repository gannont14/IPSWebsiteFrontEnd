import React from "react";

const LoadingSkeltons = () => {
  const skeletons = Array(6).fill(0);

  return (
    <div className="container mx-auto p-4 pt-[15rem] bg-white">
      {/* renders the cards with information pulled from the API call  */}
      {/* daisyUI has some blank cards that could probably be rendered before cards have loaded so the page doesn't have some jarring size change */}
      {/* https://daisyui.com/components/skeleton/ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px] pb-10">
        {skeletons.map((_, index) => (
          <div className="flex w-30 h-[50vh] flex-col gap-4" key={index}>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeltons;
