import React from "react";

const Button = ({ text, onClick, type = "button", className = "", url }) => {
  const baseClasses =
    "px-4 py-2  text-white rounded-full cursor-pointer  focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full cursor-pointer";

  if (url) {
    return (
      <a
        href={url}
        className={`${baseClasses} ${className}`}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security measure for new tabs
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
