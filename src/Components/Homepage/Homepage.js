import React, {Component} from 'react'
import Homeadmin from '../Pages/Homeadmin'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';



class Homepage extends Component {
    render(){
        return(
            <div style={{backgroundColor:' '}}>
                
                <Router>
                 <button><Link to="Admin">Home</Link></button> 
                </Router>

               

            </div>
        )
    }
}

export default Homepage;