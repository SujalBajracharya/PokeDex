import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const Compare = () => {
  const [pokemon1, setPokemon1] = useState("");
  const [pokemon2, setPokemon2] = useState("");
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [evo1, setEvo1] = useState([]);
  const [evo2, setEvo2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchEvolutionChain = async (speciesUrl) => {
    try {
      const speciesRes = await fetch(speciesUrl);
      const speciesData = await speciesRes.json();
      const evoRes = await fetch(speciesData.evolution_chain.url);
      const evoData = await evoRes.json();

      const chain = [];
      let current = evoData.chain;
      while (current) {
        chain.push(current.species.name);
        current = current.evolves_to[0];
      }
      return chain;
    } catch (error) {
      console.error("Error fetching evolution chain:", error);
      return [];
    }
  };

  const handleCompare = async (e) => {
    e.preventDefault();
    if (!pokemon1 || !pokemon2) return;

    setLoading(true);
    setError("");

    try {
      const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1.toLowerCase()}`);
      const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2.toLowerCase()}`);

      if (!res1.ok || !res2.ok) throw new Error("One or both Pokémon not found");

      const dataA = await res1.json();
      const dataB = await res2.json();

      setData1(dataA);
      setData2(dataB);

      const [evoA, evoB] = await Promise.all([
        fetchEvolutionChain(dataA.species.url),
        fetchEvolutionChain(dataB.species.url),
      ]);

      setEvo1(evoA);
      setEvo2(evoB);
    } catch (err) {
      console.error(err);
      setError("Could not fetch one or both Pokémon.");
      setData1(null);
      setData2(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleCompare} className="flex gap-4 justify-center mb-6">
        <input
          type="text"
          value={pokemon1}
          onChange={(e) => setPokemon1(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
          placeholder="First Pokémon"
        />
        <input
          type="text"
          value={pokemon2}
          onChange={(e) => setPokemon2(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
          placeholder="Second Pokémon"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Compare
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="flex flex-wrap justify-center gap-6">
        {data1 && <PokemonCard pokemon={data1} evolutionChain={evo1} />}
        {data2 && <PokemonCard pokemon={data2} evolutionChain={evo2} />}
      </div>
    </div>
  );
};

export default Compare;
