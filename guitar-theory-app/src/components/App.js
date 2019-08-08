import React, { Component } from "react";
import Header from "./Header";
import Fretboard from "./Fretboard";

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <Header />
        <div className="flex items-center vh-100 dt w-100 bg-dark-blue">
          <Fretboard/>
        </div>
      </div>
    );
  }
}

export default App;
