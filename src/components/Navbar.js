import React from 'react';
import '../css/Intro.sass';

class Navbar extends React.Component {   
   
    render() {
      const navbarData = [
        { title: 'Home', url: '/', id:'1'},
        { title: 'Projects', url: '#projects', id:'2'}
      ]
      return (
        <div className="">
            <nav className="navbar">
                <ul className="nav navbar-nav">{
                  navbarData.map( item =>{
                    return(
                      <li key={item.id}> <a href={item.url}>{item.title}</a></li>
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
