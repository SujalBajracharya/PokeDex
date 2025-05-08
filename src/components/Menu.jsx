import React from 'react';
import './Menu.css';
import logo from '../assets/logo-pokemon-home.png'; 

const Menu = () => {
  const itemsLeft = ['Move', 'Trade'];
  const itemsRight = ['More Features', 'Premium'];

  return (
    <div className="flex items-center justify-center gap-6 p-4 mb-5">
      
      {/* Left side buttons */}
      {itemsLeft.map((item, index) => (
        <button
          key={item}
          className="relative px-12 py-3 bg-white text-gray-800 text-base font-medium rounded-full shadow-md overflow-hidden group"
        >
          <span className="relative z-10">{item}</span>
        </button>
      ))}

      {/* Center image */}
      <button>
        <img src={logo} alt="Center" className="w-36 h-36 object-contain" />
      </button>

      {/* Right side buttons */}
      {itemsRight.map((item, index) => (
        <button
          key={item}
          className="relative px-12 py-3 bg-white text-gray-800 text-base font-medium rounded-full shadow-md overflow-hidden group"
        >
          <span className="relative z-10">{item}</span>
        </button>
      ))}
    </div>
  );
};

export default Menu;
