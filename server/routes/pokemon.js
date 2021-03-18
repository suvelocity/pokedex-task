const { Router } = require("express");
const axios = require("axios");

const pokemon = Router();

pokemon.get("/:name", (req, res) => {
  let name = req.params.name;
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + name)
    .then((response) => {
      console.log(response.data.name);
      let obj = {};
      obj.name = response.data.name;
      obj.id = response.data.id;
      obj.height = response.data.height;
      obj.weight = response.data.weight;
      let types = response.data.types;
      let typesName = [];
      for (let i = 0; i < types.length; i++) {
        typesName.push(types[i].type.name);
      }
      obj.types = typesName;
      obj.front = response.data.sprites.front_default;
      obj.back = response.data.sprites.back_default;
      res.send(obj);
    })
    .catch((error) => {
      let statusCode = error.response.status;
      res.send("Error, status code: " + statusCode);
      //Todo- move to a cool 404 page.
    });
});

module.exports = pokemon;
