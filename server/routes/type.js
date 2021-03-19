// const { default: axios } = require("axios");
const { Router } = require("express");
const { POKEAPI_BASE_URL, axios } = require("../utils/pokeAPI");

const type = Router();

// type.get("/:name", (req, res) => {
//   const { name } = req.params;
//   axios.get(`${POKEAPI_BASE_URL}/type/${name}`).then((data) => {
//     const typesDate = {
//       id: data.id,
//       name: data.name,
//       pokemons: [],
//     };
//     data.pokemon.forEach((pokemon) => {
//       typesDate.pokemons.push(pokemon.pokemon);
//     });
//     res.send(typesDate);
//   });

type.get("/:name", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/type/${req.params.name}`
    );
    const { name, id, pokemon } = data;
    console.log({
      name,
      id,
      pokemons: pokemon.map((pokemon) => pokemon.pokemon),
    });
    res.json({
      name,
      id,
      pokemons: pokemon.map((pokemon) => pokemon.pokemon),
    });
  } catch {
    console.log("error happend", error.massage);
  }
});

module.exports = type;
