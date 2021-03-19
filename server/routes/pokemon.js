const { Router } = require("express");
const {getPokemon} = require("../utils/pokeAPI")

const pokemon = Router();

pokemon.get("/:name", async (req, res, next) => {
  try {
    const pokemon = await getPokemon(req.params.name);
  } catch (error) {
    next(error)
  }
  res.send(pokemon);
});

pokemon.use((err, req, res, next) => {
  if (err === "not found") return res.status(404).end();
});

module.exports = pokemon;
