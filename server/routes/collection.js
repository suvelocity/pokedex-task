const { Router } = require("express");

const collection = Router();

let pokemonCollection = [
  { id: 85, name: "charzard" },
  { id: 4, name: "pika" },
];

//getting the full array
collection.get("/", async (req, res) => {
  res.send(pokemonCollection);
});

//adding a pokemon to the array
collection.post("/catch", async (req, res) => {
  const { body } = req;
  pokemonCollection.push(body);
  res.status(200).send("pokemon Collected!");
});

//deleting a pokemon out of an array
collection.delete("/release/:id", async (req, res) => {
  const { id } = req.body;
  const index = pokemonCollection.findIndex((pokemon) => pokemon.id === id);
  pokemonCollection.splice(index, 1);
  res.send(pokemonCollection);
});

module.exports = collection;
