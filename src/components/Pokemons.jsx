import React, { useState, useEffect } from "react";
import PokemonCardHandler from "../contexts/PokemonCardHandler";

const Pokemons = () => {
  const INITIAL_LIMIT = 12;
  const LOAD_MORE_LIMIT = 6;

  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

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
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-3">
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
        className="mt-6 px-6 py-2 bg-primary text-white font-semibold rounded hover:bg-orange-400 transition-colors mb-14"
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default Pokemons;
