import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home.js'; 
import Trainer from './Trainer.js';  
import UsersPage from './UsersPage'; 
import TimeLogPage from './TimeLogPage'; 
import AlgorithmsPage from './AlgorithmsPage.js'; 
import ErrorPage from './ErrorPage'
import LoginStatus from './LoginStatus'; 
import axios from 'axios';
import './App.css'; 




// function RoutePage(props){        
    
    
    
//     return( 
//         <Router> 
//             <div> 
//                 <div className="header">               
//                     <NavLink className="logo" to="/">George's PLL Trainer: Welcome {props.currentUsername}</NavLink>
//                     <div className="header-right">   
                      
//                         <NavLink id="home" to="/">Home</NavLink>
//                         {/* <NavLink to="/UsersPage">Users</NavLink> */}
//                         <NavLink to="/Trainer">Trainer</NavLink> 
//                         <NavLink to="/TimeLogPage">Times</NavLink>
//                         <NavLink to="/AlgorithmsPage">My Algorithms</NavLink> 
//                         {/* <LoginStatus/> */}
                        
//                         {/* <Route path="/error" component={ErrorPage}></Route>                       */}
//                     </div>
//                 </div>
                
//                 <Route exact path="/" component={Home}/>
//                 {/* <Route path="/UsersPage" component={UsersPage}/>  */}
//                 <Route path="/Trainer" component={Trainer}/> 
//                 <Route path="/TimeLogPage" component={TimeLogPage}></Route> 
//                 <Route path="/AlgorithmsPage" component={AlgorithmsPage}></Route>  
//             </div>        
//         </Router> 
//     );
// }



// export default RoutePage;


class AdminRouting extends Component { 
    constructor(props){ 
      super(props); 
      this.state = { 
        username:'', 
        password:''
      }
    }
    

    logOut=()=>{ 
        this.props.logOut();
    }
  
      render() {
        return ( 
            <Router> 
                <div> 
                    <div className="header">               
                        <NavLink className="logo" to="/">George's PLL Trainer: Welcome {this.props.currentUsername}</NavLink> 
                        <button className="button"onClick={this.logOut}>Logout</button>
                        <div className="header-right">   
                        
                            <NavLink id="home" to="/">Home</NavLink>
                            <NavLink to="/UsersPage">Users</NavLink>
                     
                            {/* <LoginStatus/> */}
                            
                            {/* <Route path="/error" component={ErrorPage}></Route>                       */}
                        </div>
                    </div>
                    
                   
                    <Route exact path="/" render={() => <Home currentUsername={this.props.currentUsername}/>}/> 
                    <Route path="/UsersPage" component={UsersPage}/>
                </div>        
            </Router> 
       
        );
      } 
    }
    
    export default AdminRouting;