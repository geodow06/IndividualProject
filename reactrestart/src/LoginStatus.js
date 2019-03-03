import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LoginPage from './LoginPage';

class LoginStatus extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       loggedin:false
      
    }
  } 

    // updateRequest = ()=>{  
    //     // axios.delete(`/deleteUser/${this.props.userID}`); 
    //     axios.put(`/updateUser/${this.state.newusername}/${this.state.newpassword}/${this.props.userID}`) 
    //     this.hideForm();
    //   }  
    makeTrue=()=>{ 
        this.setState({loggedin:true});
    }  
    makeFalse=()=>{ 
        this.setState({loggedin:false})
    }

    // setStates = (event)=>{ 
    //     this.setState({[event.target.name]:event.target.value});
    //   } 
    

    render() {   
        if(this.props.accept===false){
          return( 
            <div>    
                
                <NavLink to="/LoginPage">Log in</NavLink> 
                <Route path="/LoginPage" component={LoginPage}/>  
                
                {/* <a>not logged in</a> 
                <button onClick={this.makeTrue}>Log In</button> */}
                {/* {this.makeTrue()} */}
            </div> 
          );
        } 
        else if(this.props.accept===true){ 
            return( 
                <a>Logged In as {this.props.enteredusername}</a>
            );
        } 
        else{ 
            return(
            <a>not working</a>
            )
        }
          
      
 
      
    }
   
  }
  
  export default LoginStatus;