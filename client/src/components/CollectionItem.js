import React from "react";

export default function CollectionItem({ pokemonName }) {
  return (
    <div>
      {pokemonName.name}
      <img
        src={pokemonName.sprites?.front}
        onMouseOver={(e) => (e.currentTarget.src = pokemonName.sprites?.back)}
        onMouseOut={(e) => (e.currentTarget.src = pokemonName.sprites?.front)}
      />
    </div>
  );
}
