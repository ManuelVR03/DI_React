import './App.css';
import React, { Component } from 'react';
import CounterClase from './components/CounterClase';
import CounterClaseFuncionFlecha from './components/CounterClaseFuncionFlecha';
import CounterHook from './components/CounterHook';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <CounterClase />
        <CounterClaseFuncionFlecha />
        <CounterHook />
      </div>
    );
  }
}

export default App;

/*

App.js modo Hooks:

export default function App() {
  return (
    <div className="container">
      <CounterClase />
      <CounterClaseFuncionFlecha />
      <CounterHook />
    </div>
  );
}

*/
