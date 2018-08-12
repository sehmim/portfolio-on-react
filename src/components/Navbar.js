import React from 'react';
import '../css/Intro.css';

class Navbar extends React.Component {   
   
    render() {
      const navbarData = [
        { title: 'Home', url: '/', id:'1'},
        { title: 'Projects', url: '#projects', id:'2'},
        { title: 'Contact', url: '#', id:'3'}
      ]
      return (
        <div className="">
            <nav className="navbar">
                <ul className="nav navbar-nav">{
                  navbarData.map( item =>{
                    return(
                      <li> <a href={item.url}>{item.title}</a></li>
                    )
                  })
                }
                </ul>
            </nav>
        </div>
      ); 
    }
  }
  export default Navbar;
