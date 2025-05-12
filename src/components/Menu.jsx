import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./Menu.css";
import logo from "../assets/logo-pokemon-home.png";

const Menu = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle routing
  const handleRouting = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="flex items-center justify-center gap-6 p-4 mb-5">
      {/* Left side buttons */}
      <button
        className="relative px-12 py-3 bg-white text-gray-800 text-base font-medium rounded-full shadow-md overflow-hidden group"
        onClick={() => handleRouting("learn")}
      >
        <span className="relative z-10">My Learning</span>
      </button>

      <button
        onClick={() => handleRouting("compare")}
        className="relative px-12 py-3 bg-white text-gray-800 text-base font-medium rounded-full shadow-md overflow-hidden group"
      >
        <span className="relative z-10">Compare</span>
      </button>

      {/* Center image - Now clicking the logo takes you to the home page */}
      <button onClick={() => handleRouting("home")}>
        <img src={logo} alt="Center" className="w-36 h-36 object-contain" />
      </button>

      {/* Right side buttons */}
      <button
        onClick={() => handleRouting("search")}
        className="relative px-12 py-3 bg-white text-gray-800 text-base font-medium rounded-full shadow-md overflow-hidden group"
      >
        <span className="relative z-10">Search</span>
      </button>

      <button
        onClick={() => handleRouting("premium")}
        className="relative px-12 py-3 bg-white text-gray-800 text-base font-medium rounded-full shadow-md overflow-hidden group"
      >
        <span className="relative z-10">Premium</span>
      </button>
    </div>
  );
};

export default Menu;
