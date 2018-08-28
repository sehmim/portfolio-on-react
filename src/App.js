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
    loading: true,
    id : '1'
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000); // simulates an async action, and hides the spinner
  }

  changingState = (data) => {
    this.setState({
      id : data
    })
  } 
  render() {
    const { loading } = this.state;
      
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return <img className="intro-loading-gif" src="/images/intro.gif" alt="Smiley face"></img>

    }
    return (
      <div className="App">
        <LandingPage dataFromLand ={ this.changingState } />
        <Projects PropjectsState ={ this.changingState } />
      </div>
    );
  }
}

export default App;
