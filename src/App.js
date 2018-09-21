import React, { Component } from "react";
import bricklogo from "./images/Brick.png";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm BrickBeard</h1>
        <img src={bricklogo} alt="BrickBeard" />
        <p>This is really working!</p>
        <Person />
      </div>
    );
    // return React.createElement("div", null, React.createElement("h1", { className: "App" }, "Hi, I'm BrickBeard"));
  }
}

export default App;
