import { Component } from 'react'

export default class CounterClase extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.reset = this.reset.bind(this)
    }
    incrementar() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementar() {
        this.setState({
            count: this.state.count - 1
        })
    }
    reset() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button className="btn btn-success" onClick={this.incrementar}>Incrementar</button>
                <button className="btn btn-danger" onClick={this.decrementar}>Decrementar</button>
                <button className="btn btn-warning" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}