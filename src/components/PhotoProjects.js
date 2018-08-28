import React from 'react';
import '../css/Intro.css';
import '../css/projects.css';


class ProjectsPhoto extends React.Component {   
   
    render() {
        const projectsPhoto = [
            { title: 'Secret', picture: 'https://i.imgur.com/1hy7sRo.jpg', id:'2', href: 'www.google.com'},
            { title: 'Spicy', picture: 'https://i.imgur.com/LouFvjF.jpg', id:'3', href: 'www.google.com'},
            { title: 'Suace', picture: 'https://i.imgur.com/N5gzAZQ.jpg', id:'4', href: 'www.google.com'},
        ]
      return (
        <div className="" id="photo">
                <div className="container">
            { 
                projectsPhoto.map(item => {
                    return(
                        <div className="col-lg-4 col-md-4 col-xs-10 col-xs-offset-1 border-pic" key={item.id}>
                        <h2 className="header-general"> {item.title} </h2>
                            <a><img className="proj-img-photo" src={item.picture}></img></a>
                        </div>
                    )
                })
            }
            </div>
        </div>
      ); 
    }
  }
  export default ProjectsPhoto;
