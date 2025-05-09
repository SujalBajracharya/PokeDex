import React, { useState, useEffect } from "react";
import PokemonCardHandler from "../contexts/PokemonCardHandler";

const Pokemons = () => {
  const INITIAL_LIMIT = 12;
  const LOAD_MORE_LIMIT = 6;

  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  // Pokémon type to background color mapping
  const typeColors = {
    fire: "#F08030",  
    water: "#6890F0",
    grass: "#78C850", 
    electric: "#F8D030",  
    psychic: "#F85888",     
    rock: "#B8A038",      
    bug: "#A8B820",      
    ghost: "#705898",  
    dragon: "#7038F8",     
    fairy: "#EE99AC",      
    normal: "#A8A878",    
    fighting: "#C03028",   
    poison: "#A040A0",  
    ground: "#E0C068",     
    flying: "#A890F0",    
    ice: "#98D8D8",     
    steel: "#B8B8D0",      
    dark: "#705848",       
  };
  

  const fetchPokemonList = async (limit, offsetVal) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offsetVal}`
      );
      const data = await response.json();
      setPokemonList((prevList) => [...prevList, ...data.results]);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchPokemonList(INITIAL_LIMIT, 0);
    setOffset(INITIAL_LIMIT);
  }, []);

  const handleLoadMore = () => {
    fetchPokemonList(LOAD_MORE_LIMIT, offset);
    setOffset((prev) => prev + LOAD_MORE_LIMIT);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 p-4 justify-center mb-4 sticky top-5 z-50">
        {Object.entries(typeColors).map(([type, bgClass]) => (
          <div
            key={type}
            className={`text-white px-3 py-1 rounded-full text-sm capitalize shadow`}
            style={{ backgroundColor: typeColors[type] }}
          >
            {type}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap w-3/4 justify-center gap-y-14">
          {pokemonList.length > 0 ? (
            pokemonList.map((pokemon, index) => (
              <PokemonCardHandler key={index} pokemonUrl={pokemon.url} />
            ))
          ) : (
            <div>Loading Pokémon...</div>
          )}
        </div>

        <button
          onClick={handleLoadMore}
          className="mt-6 px-6 py-2 bg-primary rounded-full text-white font-semibold hover:bg-orange-400 transition-colors"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default Pokemons;
