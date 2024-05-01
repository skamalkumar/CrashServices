// Logo.js
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg
        className="h-10 w-10 text-white mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6 3a1 1 0 0 1 0 2H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a1 1 0 1 1 2 0v7a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V8a3 3 0 0 1 3-3h1a1 1 0 0 1 0-2H5a5 5 0 0 0-5 5v7a7 7 0 0 0 7 7h8a7 7 0 0 0 7-7V8a5 5 0 0 0-5-5h-1a1 1 0 0 1 0-2h1a3 3 0 0 1 3 3v7a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V8a1 1 0 0 1 0-2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Logo;
