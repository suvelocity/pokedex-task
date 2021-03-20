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
  const [isCaught, setIsCaught] = useState(false);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const getPokemon = async (pokemonName) => {
    let { data } = await axios.get(`/api/collection`);
    setCollection(data);
    // data.forEach((pokemonInfo) => {
    //   console.log("****", pokemonInfo, "****");
    //   if (pokemonInfo.name === pokemonName.name) {
    //     pokemonInfo.isCaught = true;
    //     return;
    //   }
    //   setCollection(data);
    // });
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
      // console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const checkIfPokemonIsCaught = async (name) => {
    try {
      let { data } = await axios.get(`/api/collection`);
      setCollection(data);
      let flag = false;
      collection.forEach((pokemonInfo, i) => {
        if (pokemonInfo.name === name) {
          flag = true;
          data.isCaught = true;
        }
      });
      setIsCaught(flag);
      return flag;
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
      setIsCaught(true);
      setCollection(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const releasePokemon = async (name) => {
    try {
      const { data } = await axios.delete(`/api/collection/release/${name}`);
      console.log("pokemon was released");
      setIsCaught(false);
      setCollection(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const getCollection = () => {
    axios.get(`/api/collection`).then((res) => {
      setCollection(res.data);
    });
  };
  return (
    <div className="App">
      <h1 className="header">PokeDex</h1>
      <Search value={search} onChange={onSearchChange} search={getPokemon} />
      <ViewPokemon
        data={pokemonData}
        canCatch={checkIfPokemonIsCaught}
        isCaught={isCaught}
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
