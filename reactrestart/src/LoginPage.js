import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Users from './Users'; 
import LoginStatus from './LoginStatus'

class LoginPage extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
        // enteredusername:"", 
        // enteredpassword:"",
        // users:[], 
        // accept:false, 
        // loggedinstatus:false
      
    }
  } 

  check = ()=>{ 
      this.getRequest(); 
      let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)
      for(let i=0;i<this.state.users.size();i++){  
        if(users[i].username===this.props.enteredusername&&users[i].password===this.props.enteredpassword) {
            this.setState({accept:true});
        } 
        else{ 
            continue;
        }
      }
  }

  getRequest = () => {
    axios.get('/getAllUsers').then(r => { this.setState({ users: r.data }) });
  }

  setStates = (event)=>{ 
    this.setState({[event.target.name]:event.target.value});
  } 

  handleSubmit=(event) =>{ 
    console.log('A username was submitted: ' + this.state.enteredusername); 
    console.log('A password was submitted: '+ this.state.enteredpassword);
    event.preventDefault();
  }

    render() {   
        if(this.state.accept===false){
          return( 
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>
                
                <label>
                  <input type="text" name='enteredusername' target='one' className="form-control inputArea" onChange={this.setStates} enteredusername={this.state.enteredusername} id="enteredusername" placeholder="enteredusername *"></input> 
                  <input type="text" name='enteredpassword' target='two' className="form-control inputArea" onChange={this.setStates} enteredpassword={this.state.enteredpassword} id="enteredpassword" placeholder="enteredpassword *"></input> 
                </label> 
                
                <input type="submit" value="Submit" onClick={this.check}/> 
                <LoginStatus accept={this.props.accept}/>
            </form> 
        );   
        } 
        else{ 
            return( 
                <LoginStatus accept={this.props.accept} enteredusername={this.state.enteredusername} enteredpassword={this.state.enteredpassword}/>
            );
        }
      
 
      
    }
   
  }
  
  export default LoginPage;