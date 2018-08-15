import React from 'react';
import '../css/Intro.css';
import '../css/projects.css';


class WebProjects extends React.Component {   
   
    render() {
        const projectsWebsite = [
            { title: 'Lost-and-Found', details: 'A Rails appication where a user can put up an add for a lost item or an item found in public. Then users can contact with each other to do the handover.', technology: 'Rails' , picture: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png', id:'2', href: 'www.google.com'},
            { title: 'Spectral-lights', details: 'A static react application to advertise a bands music and merchandise. It is currently just the shell of what I want to input in the future. It will have feature of purchesing products.', technology: 'React' , picture: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png', id:'4', href: 'www.google.com'},
            { title: 'Movie-Review', details: 'A rails appication where user can add their favorite movies and have other users comment on the movies and rate them.', technology: 'Rails' , picture: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png', id:'3', href: 'https://github.com/sehmim/movie-app'},
            { title: 'Grocery-man', details: 'A react appication where a user can order items from the shop and vendors who can add and control items sold in the shop. The server side is deployed in a different Heroku appication.', technology: 'React' , picture: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' , id:'1', href: 'https://grocery-man.herokuapp.com/'},
            { title: 'Bank-app', details: 'After a day’s hard work at school or college, a student can get rid of boredom on the play-ground. Work alone is not enough. That is why it is said: “All work and no play, makes Jack a dull boy”.', technology: 'Java' , picture: 'https://www.macupdate.com/images/icons256/51370.png', id:'5', href: 'www.google.com'},
        ]
      return (
        <div className="">
                        <div className="container">
            { 
                projectsWebsite.map(item => {
                    return(
                        <div className="col-lg-3 col-md-3 col-xs-10 col-xs-offset-4 border" key={item.id}>
                        <h2 className="header-general"> {item.title} </h2>
                            <h5 className="header-sub"> { item.technology } Appication</h5>
                            <a href={item.href}><img className="proj-img" src={item.picture}></img></a>
                                <p className="detail-main"> {item.details}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
      ); 
    }
  }
  export default WebProjects;
