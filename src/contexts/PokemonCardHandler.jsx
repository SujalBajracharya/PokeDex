import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

const PokemonCardHandler = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, [pokemonUrl]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <PokemonCard pokemon={pokemon}/>
  );
};

export default PokemonCardHandler;
