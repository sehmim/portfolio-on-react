import React from 'react';
import '../css/projects.css';
import '../css/Intro.css';
import '../css/sidebar.css';



// conmopenets
import WebProjects from './WebProjects';
import ProjectsPhoto from "./PhotoProjects";
import MusicProjects from "./MusicProjects";


class Projects extends React.Component {   

  state = {
    catagoryID : '1'
  }
    changeState = (data) =>{
      this.setState({
        catagoryID : data
      })
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
            {/* < ----- MOVE THIS TO A DIFFERENT COMPONENT IN THE FUTURE */}
            <div className="SidebarNav">
              <aside className="col-12 col-md-2 p-0 bg-dark">
                <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
                    <div className="collapse navbar-collapse">
                      <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                          {
                              sideNavbarData.map(item =>{
                                  return (
                                      <li key={item.id} className="nav-item">
                                          <a  onClick={this.catagorySecelt} 
                                              value={sideNavbarData.id}
                                              className="nav-link pl-0 text-nowrap"
                                              href={ '#' + item.title}
                                              onClick={()=>this.changeState( item.id )} >
                                                  { item.title }
                                          </a>
                                      </li>
                                  )
                              })
                            }
                        </ul>
                      </div>
                  </nav>
                </aside>
              </div>
          {/* MOVE THIS TO A DIFFERENT COMPONENT IN THE FUTURE  --- > */}
            
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
