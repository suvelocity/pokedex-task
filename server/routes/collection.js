const { Router } = require("express");

const collection = Router();
const myCollection = []

collection.get("/", (req, res) => {
  res.send(myCollection);

});

module.exports = collection;
