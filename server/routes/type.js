const { Router } = require("express");
const { POKEAPI_BASE_URL, axios } = require("../utils/pokeAPI");

const type = Router();

type.get("/:name", (req, res) => {
  const { name } = req.params;
  axios.get(`${POKEAPI_BASE_URL}/type/${name}`).then((data) => {
    const typesDate = {
      id: data.id,
      name: data.name,
      pokemons: [],
    };
    data.pokemon.forEach((pokemon) => {
      typesDate.pokemons.push(pokemon.pokemon);
    });
    res.send(typesDate);
  });
});

module.exports = type;
