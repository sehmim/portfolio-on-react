import React from 'react';
import '../css/Intro.css';
import '../css/projects.css';


class WebProjects extends React.Component {   
    'https://github.com/sehmim/portfolio-on-react'
    render() {
        const projectsWebsite = [
            { title: 'Hot Dog Stand', details: 'Hot-Dog Stand is an Front End e-commerce site made in React. This web app is used for marketing a hotdog stand and showing off its services. Users can order their favourite choice of hot.', technology: 'React' , picture: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' , id:'1', href: 'http://hotdog-stand.surge.sh/'},
            { title: 'Grocery-man', details: 'A react appication where a user can order items from the shop and vendors who can add and control items sold in the shop. The server side is deployed in a different Heroku appication.', technology: 'React' , picture: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' , id:'1', href: 'https://grocery-man.herokuapp.com/'},
            { title: 'Spectral-lights', details: 'A static react application to advertise a bands music and merchandise. It is currently just the shell of what I want to input in the future. It will have feature of purchesing products.', technology: 'React' , picture: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png', id:'4', href: 'https://spectrallights.herokuapp.com/'},
            { title: 'Movie-Review', details: 'A rails appication where user can add their favorite movies and have other users comment on the movies and rate them.', technology: 'Rails' , picture: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png', id:'3', href: 'https://github.com/sehmim/movie-app'},
            { title: 'Bank-app', details: 'After a day’s hard work at school or college, a student can get rid of boredom on the play-ground. Work alone is not enough. That is why it is said: “All work and no play, makes Jack a dull boy”.', technology: 'Java' , picture: 'https://www.macupdate.com/images/icons256/51370.png', id:'5', href: 'https://github.com/sehmim/android-bankapp'},
            { title: "Current running Website", details: 'Github Repo for the current website. This is a very basic static website with only CSS and bootstrap linked to it.', technology: 'React' , picture: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png', id:'6', href: 'https://github.com/sehmim/portfolio-on-react'}

        ]
      return (
        <div className="">
                        <div className="container">
            { 
                projectsWebsite.map((item,index) => {
                    return(
                        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-1 col-xs-offset-8 border" key={index}>
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
