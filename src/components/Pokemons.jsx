import React, { useState, useEffect } from "react";
import PokemonCardHandler from "../contexts/PokemonCardHandler";

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      ); // You can adjust the limit here
      const data = await response.json();
      setPokemonList(data.results); // This stores an array of Pokémon names and URLs
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  // Fetch the list of Pokémon
  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon, index) => (
          <PokemonCardHandler key={index} pokemonUrl={pokemon.url} />
        ))
      ) : (
        <div>Loading Pokémon...</div>
      )}
    </div>
  );
};

export default Pokemons;
