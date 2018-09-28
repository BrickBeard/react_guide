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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Brandon", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Abigail", age: 30 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
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
