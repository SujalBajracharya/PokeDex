import React, { useState, useEffect } from "react";

const PokemonCard = ({ pokemon, evolutionChain }) => {
  const [bgColor, setBgColor] = useState("bg-gray-400");

  // Pokémon type to background color mapping
  const typeColors = {
    fire: "bg-red-400",
    water: "bg-blue-400",
    grass: "bg-green-400",
    electric: "bg-yellow-400",
    psychic: "bg-purple-400",
    rock: "bg-brown-400",
    bug: "bg-lime-400",
    ghost: "bg-indigo-400",
    dragon: "bg-teal-400",
    fairy: "bg-pink-400",
    normal: "bg-gray-400",
    fighting: "bg-orange-400",
    poison: "bg-violet-400",
    ground: "bg-amber-400",
    flying: "bg-sky-400",
    ice: "bg-cyan-400",
    steel: "bg-slate-400",
    dark: "bg-black-400",
  };

  useEffect(() => {
    const primaryType = pokemon.types[0]?.type.name;
    if (primaryType && typeColors[primaryType]) {
      setBgColor(typeColors[primaryType]);
    }
  }, [pokemon]);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-600 p-4">
      <div
        className={`max-w-sm rounded-2xl overflow-hidden shadow-lg ${bgColor} p-4`}
      >
        {/* Pokémon Image */}
        <img
          className="w-full h-48 object-cover"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />

        <div className="px-6 py-4">
          {/* Pokémon Name */}
          <div className="font-bold text-xl mb-2 capitalize">
            {pokemon.name}
          </div>

          {/* Pokémon Description */}
          <p className="text-gray-700 text-base">
            Known for its incredible speed, {pokemon.name} uses its Tailwind to
            outmaneuver opponents and strike with precision.
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {/* Pokémon Types */}
          <div className="mb-2">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {type.type.name}
              </span>
            ))}
          </div>

          {/* Pokémon Abilities */}
          <div className="mb-2">
            <span className="font-semibold">Abilities:</span>
            {pokemon.abilities.map((ability) => (
              <span
                key={ability.ability.name}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {ability.ability.name}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 py-4">
          {/* Pokémon Base Stats */}
          <div>
            <div className="text-lg font-semibold">Base Stats:</div>
            <ul className="text-gray-700 text-base">
              <li>
                HP:{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "hp")
                    .base_stat
                }
              </li>
              <li>
                Attack:{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "attack")
                    .base_stat
                }
              </li>
              <li>
                Defense:{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "defense")
                    .base_stat
                }
              </li>
              <li>
                Special Attack:{" "}
                {
                  pokemon.stats.find(
                    (stat) => stat.stat.name === "special-attack"
                  ).base_stat
                }
              </li>
              <li>
                Special Defense:{" "}
                {
                  pokemon.stats.find(
                    (stat) => stat.stat.name === "special-defense"
                  ).base_stat
                }
              </li>
              <li>
                Speed:{" "}
                {
                  pokemon.stats.find((stat) => stat.stat.name === "speed")
                    .base_stat
                }
              </li>
            </ul>
          </div>
        </div>

        <div className="px-6 py-4">
          {/* Pokémon Evolution Chain */}
          <div className="px-6 py-4">
            <div className="text-lg font-semibold">Evolution Chain:</div>
            <p className="text-gray-700 text-base">
              {evolutionChain.length > 0
                ? evolutionChain.join(" → ")
                : "No evolution data available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
