const { Router } = require("express");
const axios = require("axios");

const pokemon = Router();

pokemon.get("/:name", (req, res) => {
  let name = req.params.name;
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((response) => {
      console.log(response.data.name);
      res.send(name);
    })
    .catch((error) => {
      let statusCode = error.response.status;
      res.send("Error, status code: " + statusCode);
      //Todo- move to a cool 404 page.
    });
});

module.exports = pokemon;
