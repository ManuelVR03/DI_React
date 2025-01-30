import './App.css';
import React, { Component } from 'react';
import SelectComponent from './components/SelectComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: 0
    };
  }

  handleChange = (e) => {
    this.setState({ jugadores: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <SelectComponent onChange={this.handleChange} />
          </p>
          
          <h1>{this.state.jugadores}</h1>
        </header>
      </div>
    );
  }
}

export default App;
