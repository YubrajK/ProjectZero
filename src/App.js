 import React, {Component} from 'react';
 import './App.css';

 import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

 import Admin from './Admin'
 import Homepage from './Components/Homepage/Homepage'
 import Homeadmin from './Components/Pages/Homeadmin'


 class App extends Component {     
     render(){
         return(
             <div className="App">
              
                
                 
                 <Router>
                 <Switch>  
                
                 <Route exact  path="/"  exact component = {Homepage} />  
                
                 
                
                <Route exact path="/Admin"   component = {Admin} />  
               
                </Switch>
                 </Router>     
            </div>
         )
     }
 }

 export default App