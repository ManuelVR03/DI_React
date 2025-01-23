import React, { Component } from "react";

export default class Sumador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0
    };
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  };

  handleSum = () => {
    const { num1, num2 } = this.state;
    alert(num1 + num2);
  };

  render() {
    return (
      <div>
        <h1>Sumador</h1>
        <input
          type="number"
          name="num1"
          onChange={this.handleChange}
          placeholder="Número 1"
        />
        <input
          type="number"
          name="num2"
          onChange={this.handleChange}
          placeholder="Número 2"
        />
        <button onClick={this.handleSum}>Sumar</button>
      </div>
    );
  }
}
