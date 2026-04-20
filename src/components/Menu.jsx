import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import logo from "../assets/logo-pokemon-home.png";

const Menu = () => {
  const navigate = useNavigate();

  const handleRouting = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-4 mb-5">

      {/* Left side buttons */}
      <button
        className="relative w-full md:w-auto px-6 md:px-12 py-2 md:py-3 bg-white text-gray-800 text-sm md:text-base font-medium rounded-full shadow-md overflow-hidden group"
        onClick={() => handleRouting("learn")}
      >
        <span className="relative z-10">My Learning</span>
      </button>

      <button
        onClick={() => handleRouting("compare")}
        className="relative w-full md:w-auto px-6 md:px-12 py-2 md:py-3 bg-white text-gray-800 text-sm md:text-base font-medium rounded-full shadow-md overflow-hidden group"
      >
        <span className="relative z-10">Compare</span>
      </button>

      {/* Center image */}
      <button onClick={() => handleRouting("home")}>
        <img
          src={logo}
          alt="Center"
          className="w-24 h-24 md:w-36 md:h-36 object-contain"
        />
      </button>

      {/* Right side buttons */}
      <button
        onClick={() => handleRouting("search")}
        className="relative w-full md:w-auto px-6 md:px-12 py-2 md:py-3 bg-white text-gray-800 text-sm md:text-base font-medium rounded-full shadow-md overflow-hidden group"
      >
        <span className="relative z-10">Search</span>
      </button>

      <button
        onClick={() => handleRouting("premium")}
        className="relative w-full md:w-auto px-6 md:px-12 py-2 md:py-3 bg-white text-gray-800 text-sm md:text-base font-medium rounded-full shadow-md overflow-hidden group"
      >
        <span className="relative z-10">Premium</span>
      </button>

    </div>
  );
};

export default Menu;