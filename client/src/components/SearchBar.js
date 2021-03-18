import axios from "axios";
import Pokemon from "./Pokemon";

import React, { Component } from "react";

const pokemonDemo = {
  name: "raichu",
  id: 26,
  height: 8,
  weight: 300,
  types: ["electric"],
  front:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  back:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
  isCaught: false,
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemonDemo,
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     axios.get(`api/pokemon/${props.name}`).then((response) => {
  //       this.setState({ pokemon: response });
  //     });
  //   }

  fetchData() {
    axios.get("http://localhost:3001/api/pokemon/24").then((response) => {
      //   console.log(response);
      this.setState({ pokemon: response.data });
    });
  }

  render() {
    return (
      <>
        <input></input>
        <button onClick={this.fetchData}>Search Pokemon</button>
        <Pokemon pokemon={this.state.pokemon} />
      </>
    );
  }
}

export default SearchBar;
