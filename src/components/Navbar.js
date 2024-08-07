import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import IPSLogo from "../static/IPSLogo.png";

const Navbar = ({
  navClassName = "bg-white shadow-lg",
  textClassName = "text-black hover:bg-transparent hover:border-black hover:text-black",
}) => {
  const headers = ["Home", "Services", "About", "Photo Gallery"];
  const headerLinks = ["/", "/services", "/about", "/photos"];
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  }

  const getCurrentPage = () => {
    const currentPath = location.pathname;
    const index = headerLinks.indexOf(currentPath);
    return index !== -1 ? headers[index] : "Home";
  }
  // mx-8 my-auto  border border-green-500

  return (
    <div className={`w-[100%] h-auto flex items-center px-4 md:px-8 transition-all duration-300 fixed ${navClassName} z-50`}>
      <div className="hidden md:mt-4 md:flex items-center">
        <button className="md:mb-0">
          <Link to="/">
            <img className="h-24 rounded-md" src={IPSLogo} />
          </Link>
        </button>
      </div>

      {/* Regular navigation */}
      <div className="hidden md:mt-4 md:flex md:ml-auto border border-primary">
        {headers.map((header, index) => (
          <Link
            className={`mx-4 my-2 md:my-0 text-lg btn btn-outline border-transparent ${textClassName}`}
            to={headerLinks[index]}
            key={index}
          >
            {header}
          </Link>
        ))}
      </div>

      {/* Dropdown navigation for smaller screens */}
      <div className="flex flex-col mt-8 mx-auto md:hidden border border-primary">
        <button
          onClick={toggleDropdown}
          className={`flex items-center text-lg btn btn-outline border-transparent ${textClassName}`}
        >
          {getCurrentPage()}
          <span className="ml-2">▼</span>
        </button>

        {dropdownOpen && (
          <div className="w-full bg-white shadow-lg rounded-md mt-2">
            {headers.map((header, index) => (
              <Link
                to={headerLinks[index]}
                key={index}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${location.pathname === headerLinks[index] ? "bg-gray-200" : ""
                  }`}
                onClick={() => setDropdownOpen(false)}
              >
                {header}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Contact Us button */}
      <div className="hidden md:mt-4 md:flex md:ml-auto">
        <button className="btn bg-primary text-white font-bold outline outline-primary border-0 hover:bg-white hover:text-black">
          <Link to={"/contactus"}>Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;