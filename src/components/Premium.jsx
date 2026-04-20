import React, { useRef, useState } from "react";
import "./Premium.css";

const Premium = () => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg)"
  );

  let bounds = null;

  const refreshBounds = () => {
    if (cardRef.current) {
      bounds = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e) => {
    if (!bounds) return;

    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;

    setTransform(
      `rotateX(${-y * 14}deg) rotateY(${x * 14}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div className="wrap">
      <div
        className="card"
        ref={cardRef}
        style={{ transform }}
        onMouseEnter={refreshBounds}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="holo" />

        {/* Header */}
        <div className="card-header">
          <div>
            <div className="rarity">
              ULTRA RARE · HOLOGRAPHIC
            </div>
            <div className="poke-name">Pikachu</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div className="hp-label">HP</div>
            <div className="hp-val">200</div>
          </div>
        </div>

        {/* Artwork */}
        <div className="art-area">
          <img src={`${import.meta.env.BASE_URL}pikachu-premium.png`} alt="Pikachu" />
        </div>

        {/* Info ribbon */}
        <div className="ribbon">
          <span>NO. 025 Mouse Pokémon</span>
          <span>HT: 1'04"</span>
          <span>WT: 13.2 lbs.</span>
        </div>

        {/* Move 1 */}
        <div className="moves">
          <div className="move">
            <div className="energy">⚡</div>
            <div className="energy">⚡</div>
            <div className="move-name">
              Thunderclap Strike
            </div>
            <div className="move-dmg">150+</div>
          </div>
        </div>

        <div className="move-desc">
          If this Pokémon has any extra Energy attached, this attack does 50 more damage and the opponent's Active Pokémon is Paralyzed.
        </div>

        {/* Move 2 */}
        <div className="moves" style={{ paddingBottom: 4 }}>
          <div className="move">
            <div className="energy">⚡</div>
            <div className="move-name">Volt Rush</div>
            <div className="move-dmg">40</div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="illus">Illus. Antigravity</div>
          <div className="set-info">
            GEN-III PROMO 025/151 ★
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;