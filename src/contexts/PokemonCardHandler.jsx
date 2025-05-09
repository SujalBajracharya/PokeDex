import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

const PokemonCardHandler = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Pokémon data
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(pokemonUrl);
        const data = await res.json();
        setPokemon(data);
        fetchEvolutionChain(data.species.url);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchEvolutionChain = async (speciesUrl) => {
      try {
        const speciesRes = await fetch(speciesUrl);
        const speciesData = await speciesRes.json();
        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        const chain = [];
        let current = evoData.chain;

        // Traverse the evolution chain
        while (current) {
          chain.push(current.species.name);
          current = current.evolves_to[0];
        }

        setEvolutionChain(chain);
      } catch (error) {
        console.error("Error fetching evolution chain:", error);
      }
    };

    fetchPokemon();
  }, [pokemonUrl]);

  if (loading || !pokemon) {
    return (
      <div className="text-gray-500">
        <svg
          className="animate-spin h-12 w-12 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  return <PokemonCard pokemon={pokemon} evolutionChain={evolutionChain} />;
};

export default PokemonCardHandler;
