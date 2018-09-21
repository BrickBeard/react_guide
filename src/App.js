import React, { Component } from "react";
import logo from "./logo.svg";
import bricklogo from "./images/Brick.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <img src={bricklogo} alt="BrickBeard" />
      </div>
    );
  }
}

export default App;
