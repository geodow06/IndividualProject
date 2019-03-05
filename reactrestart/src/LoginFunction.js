import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LoginPage from './LoginPage'; 
import Users from './Users';
import LoginStatus from './LoginStatus';

class LoginFunction extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       loggedin:false, 
       currentUser:"", 
       users:[], 
       accepted:false, 
       status:"Log In", 
       loginselected:false, 
       logInResponse:[]
      
    }
  } 

    makeTrue=()=>{ 
        this.setState({loggedin:true});
    }  
    makeFalse=()=>{ 
        this.setState({loggedin:false})
    }

    acceptLogin = (accept)=>{ 
      this.setState({accepted:accept});
    }

    getRequest = () => {
      axios.get('/getAllUsers').then(r => { this.setState({ users: r.data }) }); 
      
    } 
 
    logInUser=(enteredUsername, enteredPassword)=>{ 
      axios.get(`/logInUser/${enteredUsername}/${enteredPassword}`).then(r=>{this.setState({logInResponse: r.data})});
    }

    makeLoggedIn = ()=>{ 
      this.setState({loggedin:true});
    } 

    setStatus=()=>{ 
      this.props.setStatus(this.state.status)
    }
    check = (enteredusername, enteredpassword)=>{ 
        this.getRequest(); 
        //let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)
        
        for(let i=0;i<this.state.users.length;i++){  
          console.log("user name"+this.state.users[i].userName+" entered"+enteredusername);
          if(this.state.users[i].userName===enteredusername&&this.state.users[i].userPassword===enteredpassword) {
              this.makeTrue(); 
              console.log("log in passed")
              this.acceptLogin(); 
              this.makeLoggedIn();
              this.setState({currentUser:enteredusername}); 
              this.setState({status:`Logged in as ${this.state.currentUser}`})
          } 
          else{ 
              
            console.log("log in failed");
          }
        }
    }

    // setStates = (event)=>{ 
    //     this.setState({[event.target.name]:event.target.value});
    //   } 
    

    render() {    
       
        // if(!this.state.loginselected){ 
        //   return( 
        //     <div></div>
        //   );
        // } 
        // else{ 
          if(!this.state.loggedin){
            return( 
              <div>   
                  <LoginPage check={this.check}/> 
              </div> 
            );
          } 
          else if(this.state.loggedin){ 
              return( 
                  <div>
                      <a>Logged In as {this.state.currentUser}</a> 
                      <button onClick={this.makeFalse}>Log Out</button>  
                      <LoginStatus status ={this.state.status}></LoginStatus>
                  </div>
              );
          } 
          else{ 
              return(
              <a>not working</a>
              )
          }  
        // }
    
    } 
  }
  export default LoginFunction; 