import React from "react";
import "../styles/Collection";

export default function Collection({ collection }) {
  return (
    <div>
      <h1> Collection</h1>
      <ul className="pokemon-list">
        {collection.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
