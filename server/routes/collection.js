const mongoose = require("mongoose");
const { Router } = require("express");

const collection = Router();

let pokemonCollection = [];

collection.get("/", async (req, res) => {
  res.send(collection);
});

module.exports = collection;
