import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import Title from './components/Title';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Title />
      <Menu />
      <Pokemons />
    </>
  );
}

export default App;
