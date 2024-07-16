import React from "react";
import { Link } from "react-router-dom";
import IPSLogo from "../static/IPSLogo.png";

const navbar = ({ className = "bg-gray-800 shadow shadow-black" }) => {
  let headers = ["Home", "Services", "About", "Photo Gallery"];
  let headerLinks = ["/", "/services", "/about", "/photos"];
  // mx-8 my-auto  border border-green-500

  return (
    <div
      className={`w-full h-[8rem] flex pl-[30px] transition-all duration-300 fixed ${className}  z-50`}
    >
      <img
        className="h-[6rem] rounded-md px-auto py-auto my-auto "
        src={IPSLogo}
      ></img>

      {/* left side content */}
      <div className="flex">
        {headers.map((header, index) => (
          <Link
            className="mx-8 my-auto btn btn-outline border-transparent hover:underline hover:bg-transparent hover:border-white hover:text-white text-white "
            to={headerLinks[index]}
          >
            {header}
          </Link>
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
