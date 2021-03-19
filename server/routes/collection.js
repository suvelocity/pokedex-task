const { Router } = require("express");

const collection = Router();
const myCollection = []

collection.get("/", (req, res) => {
  res.send(myCollection);

});

collection.post("/catch", (req, res)=>{
  const {body} = req;
  myCollection.push(body)
  res.send({success: true})
})

module.exports = collection;
