const { Router } = require("express");

const collection = Router();
const myCollection = []

collection.get("/", (req, res) => {
  res.send("collection route");
});

module.exports = collection;
