import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LoginPage from './LoginPage'; 
import Users from './Users'; 
import LoginFunction from './LoginFunction';

class LoginStatus extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       loggedin:false,  
       loginStatus:"Log in"
    //    currentUser:"",
      
    }
  } 


    setStatus=(status)=>{ 
        this.setState({loginStatus:status})
    }

   

    render() {   
        if(!this.state.loggedin){
          return( 
            <div>    
                
                <NavLink to="/LoginPage">{this.state.loginStatus}</NavLink> 
                <Route path="/LoginPage" component={LoginFunction} />   
                {/* <LoginFunction setStatus={this.setStatus}/> */}
                {/* <LoginPage check={this.check}/> */}
                {/* <a>not logged in</a> 
                <button onClick={this.makeTrue}>Log In</button> */}
                {/* {this.makeTrue()} */}
            </div>   
          );
        }
           
      
      
          
      
 
      
    }
   
  }
  
  export default LoginStatus; 
  