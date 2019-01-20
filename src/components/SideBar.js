import React from 'react';
import '../css/projects.css';
import '../css/Intro.sass';
import '../css/sidebar.css';


class SideBar extends React.Component {   



    render() {

    const sendData = (data) =>{
        this.props.dataFromSideBar(data);
    }

      const sideNavbarData = [
        { title: 'Websites', id:'1'},
        { title: 'Arts', id:'2'},
        { title: 'Music', id:'3'}
      ]
      
      return (
        <div id="SidebarNav" className="SidebarNav">
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
                                                onClick={()=>sendData( item.id )} >
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
      ); 
    }
  }
  export default SideBar;
