import React from "react";
import "../styles/ViewPokemon.css";

const ViewPokemon = ({
  data,
  findType,
  catchPokemon,
  releasePokemon,
  canCatch,
  flag,
}) => {
  let types = data.types?.map((type) => type);

  return (
    <div>
      <ul>
        <li className="name" key={data.name}>
          Name: {data.name}
        </li>
        <li className="height" key={data.height}>
          Height: {data.height}
        </li>
        <li className="weight" key={data.weight}>
          Weight: {data.weight}
        </li>
        <li className="type" key="types">
          Type:{" "}
          <ul>
            {types?.map((type, i) => (
              <li key={i} onClick={() => findType(type.name)}>
                {type.name}
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <img src={data.sprites?.front} />
      <button
        onClick={async () => {
          (await canCatch(data.name))
            ? releasePokemon(data.name)
            : catchPokemon(data);
        }}
      >
        {" "}
        {flag ? `Release` : `Catch`}
      </button>
    </div>
  );
};

export default ViewPokemon;
