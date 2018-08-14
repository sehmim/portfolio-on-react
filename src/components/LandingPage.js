import React from 'react';
import '../css/Intro.css';
import Navbar from './Navbar';

class LandingPage extends React.Component {
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
        <div className="Landing-Page">
          <Navbar/>
          <h1 className="name-header"> Sehmim Al</h1><br/>
          <img src="https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/33691440_1784156978310338_35797598929420288_n.jpg?_nc_cat=0&oh=7c3b916a5053b8580eba5ab438f338d5&oe=5C0EF3EB"
          className="circle"></img> 
          <div className="qualities">
          ♦<a href="#projects" > ♦ Web Developer ♦</a>
            <a href="#"> ♦ Photographer ♦</a>
            <a href="#"> ♦ Musician ♦</a>♦
          </div>
          <div className="qualities">
            Please, do have a look around
          </div>
            <a href="https://www.linkedin.com/in/sehmim-haque/"><img className="social-media" src="https://grytics.com/wp-content/uploads/2015/01/1414386638_linkedin_circle_color-512.png"></img></a>
            <a href="https://github.com/sehmim"><img className="social-media" src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"></img></a>
            <a href="https://stackoverflow.com/users/9531113/sehmim-al-haque"><img className="social-media" src="https://streamdata.io/wp-content/uploads/2018/04/stack-overflow-orange.png"></img></a>
        </div>
      ); 
    }
  }
  export default LandingPage;
