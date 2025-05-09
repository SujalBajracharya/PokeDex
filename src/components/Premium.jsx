import React from "react";
import './Premium.css'

const Premium = () => {
  return (
    <>
      <div className="pokemon-card">
        <div className="card-header">
          <div>
            <span className="basic-badge">BASIC</span>
            <span className="pokemon-name">Pikachu</span>
          </div>
          <div className="hp-display">
            <span className="hp-text">HP</span>
            <span className="hp-value">70</span>
            <span className="energy-symbol"></span>
          </div>
        </div>

        <div className="card-image"></div>

        <div className="pokemon-info">
          NO. 025 Mouse Pokémon HT: 1'4" WT: 13.2 lbs.
        </div>

        <div className="attack-section">
          <div className="attack">
            <div className="attack-energy"></div>
            <div className="attack-details">
              <div className="attack-header">
                <span className="attack-name">Pika Strike</span>
                <span className="attack-damage">20+</span>
              </div>
              <p className="attack-description">
                If 1 of your Dedenne used Dede-Short during your last turn, this
                attack does 180 more damage.
              </p>
            </div>
          </div>
        </div>

        <div className="card-stats">
          <div className="stats-bar">
            <div className="stat">
              <span className="stat-label">weakness</span>
              <div className="stat-icon weakness-icon"></div>
              <span className="stat-value">× 2</span>
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

        <div className="card-footer">
          <div>
            <div className="illustrator">Illus. Souichirou Gunjima</div>
            <div className="card-symbols">
              <div className="card-symbol">⚫</div>
              <div className="card-symbol">F</div>
            </div>
          </div>
          <div>
            <div className="card-number">049/195 ⚫</div>
            <div className="copyright">
              ©2022 Pokémon / Nintendo / Creatures / GAME FREAK
            </div>
          </div>
        </div>

        <div className="card-description">
          Pikachu that can generate powerful electricity have cheek sacs that
          are extra soft and super stretchy.
        </div>
      </div>
    </>
  );
};

export default Premium;
