import React, { useEffect, useState } from "react";
import "./Premium.css";

const PokemonCard = ({ pokemon, evolutionChain, description }) => {
  const [bgColor, setBgColor] = useState("#ffd700");

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

  useEffect(() => {
    const primaryType = pokemon.types[0]?.type.name;
    if (primaryType && typeColors[primaryType]) {
      setBgColor(typeColors[primaryType]);
    }
  }, [pokemon]);

  const getStat = (name) =>
    pokemon.stats.find((stat) => stat.stat.name === name)?.base_stat;

  return (
    <div
      className="pokemon-card"
      style={{ background: `linear-gradient(to bottom, ${bgColor}, #ffc107)` }}
    >
      <div className="card-header">
        <div>
          <span className="basic-badge">BASIC</span>
        </div>
        <div className="hp-display">
          <span className="hp-text">HP</span>
          <span className="hp-value">{getStat("hp")}</span>
          <span className="energy-symbol"></span>
        </div>
      </div>
      <div className="flex align-middle pl-3">
        <span className="pokemon-name">{pokemon.name.toUpperCase()}</span>
      </div>

      <div className="card-image">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="pokemon-info">
        NO. {pokemon.id} • {pokemon.types[0].type.name.toUpperCase()} TYPE
      </div>

      <div className="attack-section">
        <div className="attack">
          <div className="attack-details">
            <p className="pokemon-description">{description}</p>
            <div className="attack-header">
              <span className="attack-name">Attack</span>
              <span className="attack-damage">{getStat("attack")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* abilities */}
      <div className="mx-4 my-3">
        {pokemon.abilities.map((ability) => (
          <span
            key={ability.ability.name}
            className="inline-block bg-transparent rounded-full px-3 py-1 text-sm font-semibold border-opacity-45 border-l border-t-[3px] border-white border-b-[3px] border-r-[3px] border-b-gray-400 border-r-gray-400 text-gray-700 mr-2 mb-2"
          >
            {ability.ability.name}
          </span>
        ))}
      </div>

      <div className="card-stats">
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-label">weakness</span>
            <div className="stat-icon weakness-icon"></div>
            <span className="stat-value">×2</span>
          </div>
          <div className="stat">
            <span className="stat-label">resistance</span>
            <div className="stat-icon resistance-icon"></div>
          </div>
          <div className="stat">
            <span className="stat-label">retreat</span>
            <div className="stat-icon retreat-icon"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-4">
          {/* Pokémon Evolution Chain */}
          <div className="py-4">
            <p className="text-black text-sm">
              {evolutionChain.length > 0
                ? evolutionChain.join(" → ")
                : "No evolution data available"}
            </p>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div>
          <div className="illustrator">illus. Souichirou Gunjima</div>
          <div className="card-symbols">
            <div className="card-symbol">⚫</div>
            <div className="card-symbol">
              {pokemon.types[0].type.name[0].toUpperCase()}
            </div>
          </div>
        </div>
        <div>
          <div className="card-number">
            {String(pokemon.id).padStart(4, "0")}/1025 ⚫
          </div>
          <div className="copyright">©2025 Pokémon Sujal Project</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
