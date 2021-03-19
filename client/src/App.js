import { useEffect, useState } from "react";
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

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const getPokemon = async (pokemonName) => {
    try {
      const { data } = await axios.get(`/api/pokemon/${pokemonName}`);
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
  // const getCollection = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/collection`);
  //     setCollection(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  const catchPokemon = async (data) => {
    try {
      let caught = await axios.post(`/api/collection/catch`, data);
      if (caught.status === 200) {
        console.log(data);
        let newCollection = [...collection];
        newCollection.push(data);
        setCollection(newCollection);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const releasePokemon = async (name) => {
    try {
      const { data } = await axios.delete(`/api/collection/release/${name}`);
      setCollection(data);
      // console.log(data);
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
        findType={getType}
        catchPokemon={catchPokemon}
        releasePokemon={releasePokemon}
      />
      <ViewType type={typeData} search={getPokemon} />
      <Collection collection={collection} />
    </div>
  );
}

export default App;
