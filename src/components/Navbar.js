import React from "react";
import IPSLogo from "../static/IPSLogo.png";

const navbar = (className) => {
  let headers = ["Home", "Services", "About", "Photo Gallery"];
  let headerLinks = ["/", "/services", "/about", "/photos"];
  // mx-8 my-auto  border border-green-500

  return (
    <div
      className={`w-full h-[8rem] flex pl-[30px] transition-all duration-300 fixed z-10 ${className}`}
    >
      <img
        className="h-[6rem] rounded-md px-auto py-auto my-auto "
        src={IPSLogo}
      ></img>

      {/* left side content */}
      <div className="flex">
        {headers.map((header, index) => (
          <div
            className="mx-8 my-auto btn  hover:bg-black text-white "
            to={headerLinks[index]}
          >
            {header}
          </div>
        ))}
      </div>
      {/* right side content */}
      <div className="flex items-center ml-auto">
        <div className="mr-[6rem] btn bg-primary text-white font-bold">
          Contact us
        </div>
      </div>
    </div>
  );
};
export default navbar;
