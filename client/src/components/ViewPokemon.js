import React from "react";
import "../styles/ViewPokemon";

const ViewPokemon = ({ data, findType, catchPokemon, releasePokemon }) => {
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
      <button
        onClick={data.isCaught ? releasePokemon(data.name) : catchPokemon()}
      >
        {" "}
        {data.isCaught ? `Release` : `Catch`}
      </button>
    </div>
  );
};

export default ViewPokemon;
