import React from 'react';
import '../css/Intro.css';
import '../css/projects.css';


class ProjectsPhoto extends React.Component {   
   
    render() {
        const projectsPhoto = [
            { title: 'Jake the Dog', picture: 'http://gdurl.com/Xe0l', id:'1', href: 'www.google.com'},
            { title: 'Lost-and-Found', picture: 'http://gdurl.com/Z_PH', id:'2', href: 'www.google.com'},
            { title: 'Spicy', picture: 'http://gdurl.com/66aD', id:'3', href: 'www.google.com'},
            { title: 'A Chair', picture: 'http://gdurl.com/J938', id:'4', href: 'www.google.com'},
        ]
      return (
        <div className="">
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
