import React from "react";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 fixed bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl cursor-pointer font-bold flex items-center">
          <span className="text-3xl text-green-600 mr-2">Doc</span>
          <span className="text-3xl text-blue-600">2</span>
          <span className="text-3xl text-gray-800 dark:text-gray-200">PDF</span>
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <span className="mr-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                darkMode ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l2 2m0-6l-2 2m-2 6h2m-2 0H9m6 0h-3m6-6l-2 2m2-4l-2 2m0 4l2-2"
              />
            </svg>
          </button>
          <h1 className="mt-1 text-2xl cursor-pointer font-bold text-gray-800 dark:text-white hover:scale-125 duration-300">
            Home
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
