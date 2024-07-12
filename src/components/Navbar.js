import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  let headers = ["Home", "Services", "About", "Photo Gallery"];
  let headerLinks = ["/", "/services", "/about", "/photos"];
  // mx-8 my-auto  border border-green-500

  return (
    <div className="w-full border border-red-500 h-[8rem] flex pl-[60px]">
      {headers.map((header, index) => (
        <Link
          className="mx-8 my-auto  border border-green-500"
          to={headerLinks[index]}
        >
          {header}
        </Link>
      ))}
    </div>
  );
};
export default navbar;
