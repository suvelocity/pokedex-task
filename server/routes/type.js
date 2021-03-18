const { default: axios } = require("axios");
const { Router } = require("express");

const type = Router();

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
