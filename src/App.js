import React, { Component } from "react";
import UserInputs from "./UserInputs/UserInputs";
import UserOutputs from "./UserOutputs/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    inputText: "Insert text",
    doubleInput: "Insert text",
    defaultInput: "Insert text",
  };

  mutiplyInputHandler = (event) => {
    this.setState({
      doubleInput: event.target.value + " " + event.target.value,
      inputText: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInputs
          changed={this.mutiplyInputHandler}
          defaultInput={this.state.inputText}
        />
        <UserOutputs
          output1={this.state.doubleInput}
          output2={this.state.defaultInput}
        />
      </div>
    );
  }
}

export default App;
