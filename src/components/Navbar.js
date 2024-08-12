import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IPSLogo from "../static/IPSLogo.png";

const Navbar = ({
  navClassName = "bg-white shadow-lg",
  textClassName = "text-black hover:bg-transparent hover:border-black hover:text-black",
}) => {
  const headers = ["Home", "Services", "About", "Photo Gallery"];
  const headerLinks = ["/", "/services", "/about", "/photos"];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  }

  const toggleScroll = (enable) => {
    const appElement = document.querySelector('.App.light');
    const rootElement = document.getElementById('root');
  
    if (appElement) {
      appElement.style.overflow = enable ? 'auto' : 'hidden';
    }
    if (rootElement) {
      rootElement.style.overflow = enable ? 'auto' : 'hidden';
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      toggleScroll(false);
    } else {
      toggleScroll(true);
    }
  
    // Cleanup to reset the scroll behavior when the component unmounts
    return () => {
      toggleScroll(true);
    };
  }, [dropdownOpen]);
 

  return (
    <div className={`w-full h-28 -mb-28 flex flex-wrap items-center px-4 md:px-8 transition-all duration-300 fixed ${navClassName} z-50`}>
      <div className="hidden md:flex items-center">
        <button>
          <Link to="/">
            <img className="h-20 rounded-md" src={IPSLogo} />
          </Link>
        </button>
      </div>

      {/* Regular navigation */}
      <div className="hidden md:flex md:ml-auto">
        {headers.map((header, index) => (
          <Link
            className={`mx-4 md:my-0 text-lg btn btn-outline border-transparent ${textClassName}`}
            to={headerLinks[index]}
            key={index}
          >
            {header}
          </Link>
        ))}
      </div>

      {/* Mobile navigation button */}
      <div className="flex md:hidden mx-auto">
        <button
          onClick={toggleDropdown}
          className={`text-2xl btn btn-outline border-transparent ${textClassName}`}
          >
            Menu
        </button>
      </div>

      {/* Full-screen menu */ }
      {dropdownOpen && (
        <div className="fixed inset-0 bg-black h-screen w-screen bg-opacity-75 z-40 flex justify-center items-center">
          <div className="bg-white h-screen w-screen flex flex-col justify-center items-center space-y-6">
            {headers.map((header, index) => (
              <Link
                to={headerLinks[index]}
                key={index}
                className="text-2xl text-black hover:text-primary"
                onClick={() => setDropdownOpen(false)}
              >
                {header}
              </Link>
            ))}
            <button
              onClick={toggleDropdown}
              className="mt-8 text-lg text-primary hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Us button */}
      <div className="hidden md:flex md:ml-auto">
        <button className="btn bg-primary text-white font-bold outline outline-primary border-0 hover:bg-white hover:text-black">
          <Link to={"/contactus"}>Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;