import { Component } from "react";

export default class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadoresArray: [],
      parcial: [],
      media: [],
      tiradaActual: 0
    };
    
    this.jugar = this.jugar.bind(this);
    this.tiradas = this.tiradas.bind(this);
  }

  jugar() {
    
    let numJugadores = Number(prompt('Introduce el número de jugadores'));
    
    let jugadoresArray = [];
    let parcial = [];
    let media = [];

    for (let i = 0; i < numJugadores; i++) {
      let nombre = prompt('Introduce el nombre del jugador ' + (i + 1));
      jugadoresArray.push([nombre]);
      parcial.push(0);
      media.push(0);
    }

    this.setState({
      jugadoresArray,
      parcial,
      media,
      tiradaActual: 0
    });
  }

  tiradas() {
    if (this.state.tiradaActual < 5) {
      let nuevaTirada = this.state.tiradaActual + 1;
      
      let jugadoresArray = [...this.state.jugadoresArray];
      let parcial = [...this.state.parcial];
      let media = [...this.state.media];
      
      for (let i = 0; i < jugadoresArray.length; i++) {
        let dado = Math.floor(Math.random() * 6) + 1;
        jugadoresArray[i].push(dado);
        parcial[i] += dado;
        media[i] = parcial[i] / nuevaTirada;
      }

      this.setState({
        jugadoresArray,
        parcial,
        media,
        tiradaActual: nuevaTirada
      });

    } else {
      alert("Ya se han realizado las 5 tiradas.");
    }
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h1>Juego de dados</h1>
        
        <button onClick={this.jugar}>Comenzar</button>

        {this.state.jugadoresArray.length > 0 && (
          <button onClick={this.tiradas} style={{ marginLeft: "10px" }}>
            Tirar dado
          </button>
        )}

        {this.state.jugadoresArray.map((jugador, index) => {
          const nombre = jugador[0];
          const tiradas = jugador.slice(1);

          return (
            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
              <h3>Jugador: {nombre}</h3>
              <p>
                <strong>Tiradas:</strong>{" "}
                {tiradas.length > 0 ? tiradas.join(", ") : "Ninguna"}
              </p>
              <p>
                <strong>Suma Parcial:</strong> {this.state.parcial[index]}
              </p>
              <p>
                <strong>Media:</strong>{" "}
                {this.state.media[index].toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
