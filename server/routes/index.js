const { Router } = require("express");
const pokemon = require("./pokemon");
const type = require("./type");
const collection = require("./collection");

const api = Router();

api.use("/pokemon", pokemon);
api.use("/type", type);
api.use("/collection", collection);

api.use((err, req, res, next) => {
    console.log("sending error:" + err);
    if (err === "pokemon not found") return res.status(404).send(err);
    if (err === "type not found") return res.status(404).send(err);
    res.status(500).end();
    next();
});

module.exports = api;
