import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/logo.png'; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-purple-800 bg-opacity-50 shadow-lg navbar font-krona backdrop-blur-md ">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12" />
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
              className="p-2 text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex bg-purple-600">
          <div className="w-full p-4 space-y-4 transition-transform duration-300 ease-in-out transform bg-purple-600 bg-opacity-50 shadow-lg backdrop-blur-lg">
            <div className="flex items-center justify-between ">
              {/* <img src={logo} alt="Logo" className="w-12 h-12" /> */}
              <button
                className="text-gray-500 focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="/"
                className="w-full px-3 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/registeration"
                className="w-full px-3 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900"
              >
                Register
              </a>
              <a
                href="/about-us"
                className="w-full px-3 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/timeline"
                className="w-full px-3 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900"
              >
                Timeline
              </a>
              <a
                href="/contact-us"
                className="w-full px-3 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900"
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
