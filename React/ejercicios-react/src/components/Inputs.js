/*Crear una aplicación con dos elementos tipo text en la que los valores introducidos en uno
de ellos se reflejen automáticamente en el otro.*/
import { Component } from "react";

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <h1>Inputs</h1>
                <input
                    type="text"
                    name="texto"
                    onChange={this.handleChange}
                    value={this.state.texto}
                    placeholder="Texto 1"
                />
                <input
                    type="text"
                    name="texto"
                    onChange={this.handleChange}
                    value={this.state.texto}
                    placeholder="Texto 2"
                />
            </div>
        );
    }
}