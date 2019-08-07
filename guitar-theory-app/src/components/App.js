import React, { Component } from "react";
import Header from "./Header";
import FretBoard from './Fretboard'

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <Header />
        <div className="vh-100 dt w-100 bg-blue">
          <FretBoard />
        </div>
      </div>
    );
  }
}

export default App;
