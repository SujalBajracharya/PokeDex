import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input
  const [searchResults, setSearchResults] = useState(null); // State to hold the search results
  const [loading, setLoading] = useState(false); // State to handle loading state
  const [error, setError] = useState(""); // State to handle errors
  const [evolutionChain, setEvolutionChain] = useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to fetch the search results based on the search term
  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    if (!searchTerm) return; // If no input, don't search

    setLoading(true); // Set loading state to true
    setError(""); // Clear previous error

    try {
      // Fetch data from the Pokémon API (you can search by name or id)
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      if (!response.ok) throw new Error("Pokémon not found");
      const data = await response.json();

      // Set search results
      setSearchResults(data);
      fetchEvolutionChain(data.species.url);
    } catch (err) {
      // Handle error (e.g., Pokémon not found)
      setError("No Pokémon found, please try again.");
      setSearchResults();
    } finally {
      setLoading(false); // Set loading state to false
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

  return (
    <div className="p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-lg mx-auto"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-full shadow-md border border-gray-300"
          placeholder="Search for Pokémon by name or number..."
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && (
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
      )}

      {/* Error State */}
      {error && <div className="text-red-500 mt-4">{error}</div>}

      {/* Search Results */}
      {searchResults && (
        <PokemonCard pokemon={searchResults} evolutionChain={evolutionChain} />
      )}
    </div>
  );
};

export default Search;
