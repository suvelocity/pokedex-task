import React from "react";
import "../styles/Collection.css";
import CollectionItem from "./CollectionItem";

export default function Collection({ collection, getCollection, search }) {
  console.log(collection);
  return (
    <>
      <h1> Collection:</h1>
      {collection.map((itemCollection, i) => (
        <CollectionItem
          key={`collectionItem-${i}`}
          pokemonName={itemCollection}
          search={search}
        />
      ))}
      <button className="get-collection-btn" onClick={getCollection}>
        Get collection
      </button>
    </>
  );
}
