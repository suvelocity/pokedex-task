import React from "react";
import "../styles/Collection.css";

export default function Collection({ collection }) {
  console.log(collection);
  return (
    <div>
      <h1> Collection</h1>
      <ul className="pokemon-list">
        {collection?.map((pokemon, i) => {
          <li key={i}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}
