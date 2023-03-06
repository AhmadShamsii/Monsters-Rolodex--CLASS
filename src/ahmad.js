import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "linda",
          id: "231",
        },
        {
          name: "jawad",
          id: "231",
        },
        {
          name: "sikander",
          id: "231",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(function (monster) {
          return (
            <div key={monster.id}>
              <h1>{montser.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
