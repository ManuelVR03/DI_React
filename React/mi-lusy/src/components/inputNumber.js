import React, { Component } from "react";

export default class InputNumberComponent extends Component {

  tipo = [
    "Cantidad",
    "Precio"
  ];
  render() {
    const opcion = this.props.tipo === "cantidad" ?this.tipo[0]: this.tipo[1];

    return (
      <div>
        <input placeholder={`Introduzca ${opcion}`} type="number" name={this.props.name} onChange={this.props.guardaNum}></input>
      </div>
    );
  }
}