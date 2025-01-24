import { Component } from "react";

export default class Factura extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            precio: 0,
            cantidad: 0,
            total: 0,
            items: []
        };
        this.newCompra = this.newCompra.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    newCompra(e) {
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
        this.state.items.push({
            nombre: producto,
            precio: precio,
            cantidad: cantidad
        });
    }

    render() {
        return (
            <div>
                <h1>Factura</h1>
                <form>
                    <label htmlFor='producto'>Producto: </label>
                    <select id='producto' value={this.state.nombre} onChange={this.handleChange}>
                        <option value='Martillo'>Martillo</option>
                        <option value='Destornillador'>Destornillador</option>
                        <option value='Caladora'>Caladora</option>
                    </select>
                    <br />
                    <label htmlFor='precio'>Precio: </label>
                    <input type='number' id='precio' value={this.state.precio} onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='cantidad'>Cantidad: </label>
                    <input type='number' id='cantidad' value={this.state.cantidad} onChange={this.handleChange}/>
                    <br />
                    <button onClick={this.newCompra}>Añadir</button>
                </form>
                <h3>Factura</h3>
                <p>
                    {this.state.items.map((item, index) => (
                        <span key={index}>
                            Producto: {item.nombre}, Precio: {item.precio}€, Cantidad: {item.cantidad}
                        </span>
                    ))}
                </p>
                <p>Total: {this.state.total}€</p>
            </div>
        )
    }
}