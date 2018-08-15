import React, { Component } from 'react';
import './App.css';
import './css/projects.css';
import './css/Intro.css';
import './css/sidebar.css';

//componenets
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";


class App extends Component {
  state = {
    // NOTE: change this back to treu!! 
    loading: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;
      
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return <img className="intro-loading-gif" src="/images/intro.gif" alt="Smiley face"></img>

    }
    return (
      <div className="App">
        <LandingPage />
        <Projects />
      </div>
    );
  }
}

export default App;
