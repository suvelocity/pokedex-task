const { Router } = require("express");
const axios = require("axios");

const pokemon = Router();
//localhost:3001/api/pokemon/
pokemon.get("/:name", (req, res) => {
  let name = req.params.name;
  axios.get("https://pokeapi.co/api/v2/pokemon/" + name).then((response) => {
    if (response.status === 200) {
      console.log(response.data.name);
    }
  });
  res.send(name);
});

module.exports = pokemon;
