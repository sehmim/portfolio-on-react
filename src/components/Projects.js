import React from 'react';
import '../css/projects.css';
import '../css/Intro.sass';
import '../css/sidebar.css';



// conmopenets
import WebProjects from './WebProjects';
import ProjectsPhoto from "./PhotoProjects";
import MusicProjects from "./MusicProjects";
import SideBar from "./SideBar";


class Projects extends React.Component {   

  state = {
    catagoryID : '1'
  }

  sideBar = (data) =>{
    this.setState({
      catagoryID : data
    })
  }

  datafromPropects = (data) =>{
    this.props.PropjectsState(this.state.catagoryID)
  }

    render() {

      const sideNavbarData = [
        { title: 'Websites', id:'1'},
        { title: 'Photos', id:'2'},
        { title: 'Music', id:'3'}
      ]
      
      return (
        
        <div className="" id="projects">
            <hr /><div className="name-header">Projects<hr />
              <SideBar dataFromSideBar = {this.sideBar} />
            </div>
              {
                this.state.catagoryID === '1' ? <WebProjects />: null || 
                this.state.catagoryID === '2' ? <ProjectsPhoto />: null ||
                this.state.catagoryID === '3' ? <MusicProjects />: null

              }
        </div>
      ); 
    }
  }
  export default Projects;
