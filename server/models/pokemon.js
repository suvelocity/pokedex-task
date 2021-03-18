require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
console.log("connecting to", url);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log("error connecting to mongodb: ", err.message));

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  wight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
});

pokemonSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
