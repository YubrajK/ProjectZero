import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {

    
   
    render(){
        return(
            <div className="myNavbar">
                 

                 <nav class="navbar bg-dark navbar-dark navbar-expand-md">
                <a class="navbar-brand text-white" href="#">School Management System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav text-white">
                    <li class="nav-item text-white">
                    <Link to="/"><i class="fa fa-home"></i> Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="teachers"><i class="fa fa-users"></i> Teachers</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="Students"><i class="fa fa-graduation-cap"></i> Students</Link>
                    </li>    
                    <li class="nav-item">
                    <Link top="Parents"><i class="fa fa-users"></i> Parents</Link>  
                    </li>
                    <li class="nav-item">
                    <Link to="Exams"><i class="fa fa-paste"></i> Exams</Link>
                    </li>
                    </ul>
                </div>  
                </nav>
            
                    
            </div>

        )
    }
}

export default Sidebar