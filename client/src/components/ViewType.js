import React from "react";

const ViewType = ({ type, search }) => {
  return (
    <ul>
      {type.pokemons?.map((type) => (
        <li onClick={() => search(type.name)}>{type.name}</li>
      ))}
    </ul>
  );
};

export default ViewType;
