import { Component } from "react";

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // Este enlace es necesario para que ‘this’ funcione en
        // el callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}