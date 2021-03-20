import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import ViewPokemon from "./components/ViewPokemon";
import ViewType from "./components/ViewType";
import Collection from "./components/Collection";

import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemon] = useState({});
  const [typeData, setType] = useState([]);
  const [collection, setCollection] = useState([]);

  function getCollection() {
    axios.get(`/api/collection`).then((res) => {
      res.data.forEach((pokemon) => (pokemon.isCaught = true));
      setCollection(res.data);
    });
  }
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    getCollection();
  };
  const getPokemon = async (pokemonName) => {
    try {
      const { data } = await axios.get(`/api/pokemon/${pokemonName}`);
      console.log("***********", collection);
      collection?.forEach((pokemonInfo) => {
        if (pokemonInfo.name === data.name) {
          data.isCaught = true;
          return;
        }
      });
      setPokemon(data);
      // console.log(data);
    } catch (error) {
      console.log("Error: ", error.massage);
    }
  };

  const getType = async (typeName) => {
    try {
      const { data } = await axios.get(`/api/type/${typeName}`);
      setType(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const checkIfPokemonIsCaught = async (pokemon) => {
    try {
      let { data } = await axios.get(`/api/collection`);
      setCollection(data);
      collection.forEach((pokemonInfo, i) => {
        if (pokemonInfo.name === pokemon.name) {
          pokemon.isCaught = true;
        }
      });
      return pokemon.isCaught;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const catchPokemon = async (caughtPokemon) => {
    try {
      caughtPokemon.isCaught = true;
      let { data } = await axios.post(`/api/collection/catch`, caughtPokemon);
      console.log("pokemon was caught");
      setCollection(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const releasePokemon = async (pokemon) => {
    try {
      pokemon.isCaught = false;
      const { data } = await axios.delete(
        `/api/collection/release/${pokemon.name}`
      );
      console.log("pokemon was released");
      setCollection(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className="App">
      <h1 className="header">PokeDex</h1>
      <Search value={search} onChange={onSearchChange} search={getPokemon} />
      <ViewPokemon
        data={pokemonData}
        canCatch={checkIfPokemonIsCaught}
        findType={getType}
        catchPokemon={catchPokemon}
        releasePokemon={releasePokemon}
        getCollection={getCollection}
      />
      <ViewType type={typeData} search={getPokemon} />
      <Collection collection={collection} getCollection={getCollection} />
    </div>
  );
}

export default App;
