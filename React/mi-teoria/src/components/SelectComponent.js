import { Component } from "react";

export default class SelectComponent extends Component {
    render() {
        return (
        <select onChange={this.props.onChange}>
            <option selected>- Jugadores -</option> 
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
        );
    }
}