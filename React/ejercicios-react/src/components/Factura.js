/*Crear una aplicación para añadir elementos a una factura que se mostrará en la página.
Tendrá un formulario que recogerá el nombre del producto mediante un selector tipo select,
su precio y la cantidad, ambos en un elemento tipo number; al pulsar el botón se añadirá esa
línea a la factura, actualizando el precio final de la misma.*/

import { Component } from "react";

export default class Factura extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            precio: 0,
            cantidad: 0,
            total: 0
        }
    }

    newCompra = (e) => {
        e.preventDefault();
        let producto = document.getElementById('producto').value;
        let precio = document.getElementById('precio').value;
        let cantidad = document.getElementById('cantidad').value;
        let total = this.state.total + (precio * cantidad);
        this.setState({
            nombre: producto,
            precio: precio,
            cantidad: cantidad,
            total: total
        });
    }
    
    render() {
        return (
            <div>
                <h1>Factura</h1>
                <form>
                    <label for='producto'>Producto: </label>
                    <select id='producto'>
                        <option value='Martillo'>Martillo</option>
                        <option value='Destornillador'>Destornillador</option>
                        <option value='Caladora'>Caladora</option>
                    </select>
                    <br />
                    <label for='precio'>Precio: </label>
                    <input type='number' id='precio' />
                    <br />
                    <label for='cantidad'>Cantidad: </label>
                    <input type='number' id='cantidad' />
                    <br />
                    <button onClick={this.newCompra}>Añadir</button>
                </form>
                <h3>Factura</h3>
                <ul>
                    <li>Producto: {this.state.nombre} - Precio: {this.state.precio} - Cantidad: {this.state.cantidad}</li>
                </ul>
                <p>Total: {this.state.total}€</p>
            </div>
        )
    }
} 