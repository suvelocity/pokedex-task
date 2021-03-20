import React from "react";
import "../styles/Collection.css";
import CollectionItem from "./CollectionItem";

export default function Collection({ collection, getCollection }) {
  console.log(collection);
  return (
    // <div>
    //   <h1> Collection</h1>
    //   <button onClick={getCollection}>Get Collection</button>

    //   <ul className="pokemon-list">
    //     {collection?.map((pokemon, i) => {
    //       <li key={i}>
    //         {pokemon.name}
    //         <img
    //           src={pokemon.sprites?.front}
    //           onMouseOver={(e) => (e.currentTarget.src = pokemon.sprites?.back)}
    //           onMouseOut={(e) => (e.currentTarget.src = pokemon.sprites?.front)}
    //         />
    //       </li>;
    //     })}
    //   </ul>
    // </div>
    <>
      {collection.map((itemCollection, i) => (
        <CollectionItem
          key={`collectionItem-${i}`}
          pokemonName={itemCollection}
        />
      ))}
      <button className="get-collection-btn" onClick={getCollection}>
        Get collection
      </button>
    </>
  );
}
