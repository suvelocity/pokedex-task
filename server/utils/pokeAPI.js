const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions

async function getPokemon(name) {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);
        const pokemon = response.data;
    } catch (error) {
        console.log(error.message);
        throw "not found";
    }
    const pokemonData = {
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(element => element.type.name),
        sprites: {
            front: pokemon.sprites.front_default,
            back: pokemon.sprites.back_default,
        }
    }
    return pokemonData
};

module.exports = {getPokemon}