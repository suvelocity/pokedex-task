import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import ViewPokemon from "./components/ViewPokemon";
import ViewType from "./components/ViewType";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [pokemonData, setPokemon] = useState({});
  const [typeData, setType] = useState([]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const getPokemon = async (pokemonName) => {
    try {
      const { data } = await axios.get(`/api/pokemon/${pokemonName}`);
      setPokemon(data);
      console.log(data);
    } catch (error) {
      console.log("Error: ", error.massage);
    }
  };

  const getType = async (typeName) => {
    try {
      const { data } = await axios.get(`/api/type/${typeName}`);
      setType(data);
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="App">
      <h1 className="header">PokeDex</h1>
      <Search value={search} onChange={onSearchChange} search={getPokemon} />
      <ViewPokemon data={pokemonData} findType={getType} />
      <ViewType type={typeData} search={getPokemon} />
    </div>
  );
}

export default App;
