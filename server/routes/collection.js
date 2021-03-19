const { Router } = require("express");

const collection = Router();

let pokemonCollection = [];

//getting the full array
collection.get("/", async (req, res) => {
  try {
    res.send(pokemonCollection);
  } catch (e) {
    res.status(500).send(`Error:`, e);
  }
});

//adding a pokemon to the array
collection.post("/catch", async (req, res) => {
  try {
    const { body } = req;

    pokemonCollection.push(body);
    res.status(200).send(pokemonCollection);
  } catch (e) {
    res.status(500).send(`Error:`, e);
  }
});

//deleting a pokemon out of an array
collection.delete("/release/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const index = pokemonCollection.findIndex(
      (pokemon) => pokemon.id === id || pokemon.name === id
    );
    pokemonCollection.splice(index, 1);
    res.send(pokemonCollection);
  } catch (e) {
    res.status(500).send(`Error:`, e);
  }
});

module.exports = collection;
