import React, { Component } from 'react';
import './App.css';

//componenets
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Projects />
      </div>
    );
  }
}

export default App;
