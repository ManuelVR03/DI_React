import React, { Component } from "react";

export default class SelectComponent extends Component {
  productos = ["Martillo", "Tornillo", "Taladro", "Tuerca", "Broca"];
  dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  render() {
    const opciones =
      this.props.tipo === "productos" ? this.productos : this.dias;

    return (
      <div>
        <label>
          {this.props.tipo === "productos" ? "Producto:" : "Día de la semana:"}
        </label>
        <select onChange={this.props.guardaSeleccion}>
          {opciones.map((opcion, index) => (
            <option key={index} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>
    );
  }
}