const { default: axios } = require("axios");
const { Router } = require("express");

const pokemon = Router();

pokemon.get("/:name", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.name}`
    );
    const { height, weight, name, id, types, sprites } = data;
    console.log({
      height,
      weight,
      name,
      id,
      types: types.map((type) => type.type),
      sprites: {
        front: sprites["front_default"],
        back: sprites["back_default"],
      },
    });
    res.json({
      height,
      weight,
      name,
      id,
      types: types.map((type) => type.type),
      sprites: {
        front: sprites["front_default"],
        back: sprites["back_default"],
      },
    });
  } catch (error) {
    console.log("error happend", error);
  }
});

module.exports = pokemon;
