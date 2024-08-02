import React from "react";
import { Link } from "react-router-dom";
import IPSLogo from "../static/IPSLogo.png";

const navbar = ({
  navClassName = "bg-white shadow shadow-lg",
  textClassName = "text-black hover:bg-transparent hover:border-black hover:text-black",
}) => {
  let headers = ["Home", "Services", "About", "Photo Gallery"];
  let headerLinks = ["/", "/services", "/about", "/photos"];
  // mx-8 my-auto  border border-green-500

  return (
    <div
      className={`w-full h-[8rem] flex pl-[30px] transition-all duration-300 fixed ${navClassName}  z-50`}
    >
      <img
        className="h-[6rem] rounded-md px-auto py-auto my-auto "
        src={IPSLogo}
      ></img>

      {/* left side content */}
      <div className="flex">
        {headers.map((header, index) => (
          <Link
            className={`mx-8 my-auto text-lg  btn btn-outline border-transparent ${textClassName}`}
            to={headerLinks[index]}
            key={index}
          >
            {header}
          </Link>
        ))}
      </div>
      {/* right side content */}
      <div className="flex items-center ml-auto">
        <button className="mr-[6rem] btn bg-primary text-white font-bold outline outline-primary">
          <Link to={"/contactus"}>Contact Us</Link>
        </button>
      </div>
    </div>
  );
};
export default navbar;
