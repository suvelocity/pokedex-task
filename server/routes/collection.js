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
    pokemonCollection.forEach((pokemon) => {
      if (pokemon === body) return res.status(418).send();
    });
    pokemonCollection.push(body);
    res.status(200).send(pokemonCollection);
  } catch (e) {
    res.status(500).send(`Error:`, e);
  }
});

// deleting a pokemon out of an array
collection.delete("/release/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const index = pokemonCollection.findIndex(
      (pokemon) => pokemon.id === id || pokemon.name === id
    );
    pokemonCollection.splice(index, 1);
    res.send(pokemonCollection);
  } catch (e) {
    res.status(500).send(`Error:`, e);
  }
});
// collection.delete("/release/:id", async (req, res) => {
//   const toRemove = pokemonCollection.findIndex(
//     (pokemon) => pokemon.id === parseInt(req.params.id)
//   );

//   if (toRemove === -1)
//     return res.status(404).json({ message: "No such pokemon in favorites!" });

//   pokemonCollection.splice(toRemove, 1);

//   res.send(pokemonCollection);
// });

module.exports = collection;
