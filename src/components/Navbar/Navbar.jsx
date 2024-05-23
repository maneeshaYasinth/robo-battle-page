import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/logo.png'; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar font-krona fixed top-0 left-0 w-full z-50  bg-opacity-50 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12" />
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4">
            <a
              href="/"
              className="nav-link"
            >
              Home
            </a>
            <a
              href="/registeration"
              className="nav-link"
            >
              Register
            </a>
            <a
              href="/about-us"
              className="nav-link"
            >
              About
            </a>
            <a
              href="/timeline"
              className="nav-link"
            >
              Timeline
            </a>
            <a
              href="/contact-us"
              className="nav-link"
            >
              Contact
            </a>
          </div>
          <div className="sm:hidden">
            <button
              className="text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex bg-purple-600">
          <div className="bg-purple-600 bg-opacity-50 backdrop-blur-lg shadow-lg w-full p-4 space-y-4 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center ">
              {/* <img src={logo} alt="Logo" className="h-12 w-12" /> */}
              <button
                className="text-gray-500 focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX className="h-8 w-8" />
              </button>
            </div>
            <div className="flex flex-col items-start space-y-4 mt-4">
              <a
                href="/"
                className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium w-full"
              >
                Home
              </a>
              <a
                href="/registeration"
                className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium w-full"
              >
                Register
              </a>
              <a
                href="/about-us"
                className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium w-full"
              >
                About
              </a>
              <a
                href="/timeline"
                className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium w-full"
              >
                Timeline
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium w-full"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="fixed inset-0 bg-opacity-50" onClick={toggleMenu}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
