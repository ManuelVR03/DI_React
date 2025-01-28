import React, { Component } from "react";
import InputNumberComponent from "../components/inputNumber";
import SelectComponent from "../components/select";

export default class Ejercicio4 extends Component {
  constructor() {
    super();

    this.state = {
      producto: "Martillo",
      precio: 0,
      cantidad: 0,
      listaProductos :[],
      listaPrecio :[],
      listaCant: [],
      total:0,

    };
  }
  fillList = () => {
    this.state.listaProductos.push(this.state.producto);
    this.state.listaPrecio.push(this.state.precio);
    this.state.listaCant.push(this.state.cantidad);
    this.calcularTotal();
    this.forceUpdate();

  }
  setProducto = (event) => {
    this.setState({
      producto: event.target.value,
    });
  };
  setCantidad = (event) => {
    if (event.target.value > 0) {
      this.setState({
        cantidad: event.target.value,
      });
    } else {
      alert("La cantidad no puede ser menor o igual a 0");
    }
  };
  setPrecio = (event) => {
    if (event.target.value > 0) {
      this.setState({
        precio: event.target.value,
      });
    } else {
      alert("El precio no puede ser menor o igual a 0");
    }
  };
  calcularTotal = () => {
    for (let i = 0; i < this.state.listaProductos.length; i++) {
      this.state.total += (this.state.listaCant[i] * this.state.listaPrecio[i]);
    }
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h2>Ejercicio 4 - React</h2>

      <h4>Ejercicio 4-Factura</h4>
      <SelectComponent
      tipo="productos"
      guardaSeleccion={this.setProducto}
      />
      <div style={{ display: 'flex' }}>
      <label>Cantidad: </label>
      <InputNumberComponent
      tipo="cantidad"
      name="cantidad"
      guardaNum={this.setCantidad}
      />
      </div>
      <div style={{ display: 'flex' }}>
      <label>Precio: </label>
      <InputNumberComponent
      tipo="precio"
      name="precio"
      guardaNum={this.setPrecio}
      />
      </div>
      <br/>
      <button onClick={this.fillList}>Añadir producto</button>
      <table className="table-format">
      <thead>
        <tr>
        <th>
        <h5>Producto</h5>
        </th>
        <th>
        <h5>Cantidad</h5>
        </th>
        <th>
        <h5>Precio</h5>
        </th>
        <th>
        <h5>Total</h5>
        </th>
        </tr>
      </thead>
      <tbody>
        {this.state.listaProductos.map((producto, index) => (
        <tr key={index}>
        <td>{producto}</td>
        <td>{this.state.listaCant[index]}</td>
        <td>{this.state.listaPrecio[index]} €</td>
        <td>{this.state.listaCant[index] * this.state.listaPrecio[index]} €</td>
        </tr>
        ))}
        <tr>
        <td></td>
        <td></td>
        <td>Total:</td>
        <td>{this.state.total} €</td>
        </tr>
      </tbody>
      </table>
      </header>
      </div>
    );
  }
}