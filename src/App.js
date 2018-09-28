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
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    //console.log("Was clicked!");
    // DON'T DO THIS!!!  this.state.persons[0].name = "BrickBeard";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 22 },
        { name: "Abigail", age: 29 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Brandon", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Abigail", age: 30 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Brick")} // Better application
            changed={this.nameChangeHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm BrickBeard</h1>
        <img src={bricklogo} alt="BrickBeard" />
        <p>I'm a React App!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement("div", null, React.createElement("h1", { className: "App" }, "Hi, I'm BrickBeard"));
  }
}

export default App;
