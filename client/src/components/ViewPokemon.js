import React from "react";

const ViewPokemon = ({ data, findType }) => {
  let types = data.types?.map((type) => type);
  return (
    <div>
      <ul>
        <li className="name">Name: {data.name}</li>
        <li className="height">Height: {data.height}</li>
        <li className="weight">Weight: {data.weight}</li>
        <li className="type">
          Type:{" "}
          <ul>
            {types?.map((type) => (
              <li onClick={() => findType(type.name)}>{type.name}</li>
            ))}
          </ul>
        </li>
      </ul>
      <img src={data.sprites?.front} />
      <button>Catch</button>
    </div>
  );
};

export default ViewPokemon;
