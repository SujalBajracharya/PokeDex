import React from 'react';
import PokeDex from '../assets/Pokedex-logo.png';

const Title = () => {
  return (
    <div>
      <img src={PokeDex} alt="Pokedex" className="w-52 h-auto mx-auto rounded-lg"/>
    </div>
  );
};

export default Title;
