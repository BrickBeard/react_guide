import React, { Component } from "react";
import bricklogo from "./images/Brick.png";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Brandon", age: 28 },
      { name: "Manu", age: 25 },
      { name: "Abigail", age: 30 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = () => {
    //console.log("Was clicked!");
    // DON'T DO THIS!!!  this.state.persons[0].name = "BrickBeard";
    this.setState({
      persons: [
        { name: "BrickBeard", age: 28 },
        { name: "Manu", age: 22 },
        { name: "Abigail", age: 29 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm BrickBeard</h1>
        <img src={bricklogo} alt="BrickBeard" />
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement("div", null, React.createElement("h1", { className: "App" }, "Hi, I'm BrickBeard"));
  }
}

export default App;
