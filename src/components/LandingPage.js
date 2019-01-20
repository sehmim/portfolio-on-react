import React from 'react';
import '../css/Intro.sass';
import Navbar from './Navbar';
import Popup from "reactjs-popup";

class LandingPage extends React.Component {
  
  dataFromLand = (data) =>{
    this.props.dataFromLand(data)
  }
    
    render() {

      const qualities = [
        { href : "#projects", title: "Web Developer", id:"1"  },
        { href : "#projects", title: "Artsy Guy", id:"2" },
        { href : "#projects", title: "Musician", id:"3" }
      ]

      const socialMedia = [
        { href: "https://www.linkedin.com/in/sehmim-haque/" , src: "https://grytics.com/wp-content/uploads/2015/01/1414386638_linkedin_circle_color-512.png", id:"1"  },
        { href: "https://github.com/sehmim" , src: "https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png", id:"2"  },
        { href: "https://stackoverflow.com/users/9531113/sehmim-al-haque" , src: "https://streamdata.io/wp-content/uploads/2018/04/stack-overflow-orange.png" , id:"3" }
      ]
      const dp = "https://i.imgur.com/SOlv4Rx.jpg";

      return (
        <div className="Landing-Page">
          <Navbar/>
          <h1 className="name-header"> Sehmim Al</h1><br/>
          <Popup  trigger={<img src={dp} className="circle"></img> }
                  position="top left">
                {close => (
                <div className="header-message" onClick={close}>
                    Hello
                </div>
            )}
          </Popup>
            
          <div className="qualities"> ♦
            {
              qualities.map(item => { 
                return(
                  <a onClick={()=> this.dataFromLand(item.id)} key={item.id} href= {item.href}> ♦ {item.title} ♦</a>
                )
              })
            }♦
          </div>
          <div className="qualities">
            Please, do have a look around
          </div> {
            socialMedia.map(item=>{
              return(
                <a key={item.id} href={item.href}><img className="social-media" src={item.src}></img></a>
              )
            })
          }
        </div>
      ); 
    }
  }
  export default LandingPage;
