const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions

// axios.get(POKEAPI_BASE_URL).then((res) => {
//   console.log(res);
// });
module.exports = { POKEAPI_BASE_URL, axios };
