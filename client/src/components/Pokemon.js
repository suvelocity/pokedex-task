import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: this.props.pokemon.front,
    };
  }
  render() {
    const isCaught = this.props.pokemon.isCaught ? (
      <button>release</button>
    ) : (
      <button>catch</button>
    );
    let types = this.props.pokemon.types.map((type) => {
      return <button>{type}</button>;
    });
    return (
      <div>
        <p>name :{this.props.pokemon.name}</p>
        <p>height :{this.props.pokemon.height}</p>
        <p>weight :{this.props.pokemon.weight}</p>
        <p>type :{types}</p>

        <img
          src={this.state.pic}
          onMouseOver={() => {
            this.setState({ pic: this.props.pokemon.back });
          }}
          onMouseOut={() => {
            this.setState({ pic: this.props.pokemon.front });
          }}
        />

        <p>{isCaught}</p>
      </div>
    );
  }
}

export default Pokemon;
