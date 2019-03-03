import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LoginPage from './LoginPage'; 
import Users from './Users';


class LoginStatus extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
       enteredusername:"", 
       enteredpassword:"",
       loggedin:false,
       accept:false, 
       loginoption:false
    }
  } 

  
    makeTrue=()=>{ 
        this.setState({loggedin:true});
    }  
    makeFalse=()=>{ 
        this.setState({loggedin:false})
    }

    // setStates = (event)=>{ 
    //     this.setState({[event.target.name]:event.target.value});
    //   } 
    
    check = ()=>{ 
        this.getRequest(); 
        let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)
        for(let i=0;i<this.state.users.size();i++){  
          if(users[i].username===this.state.enteredusername&&users[i].password===this.state.enteredpassword) {
              this.setState({accept:true}); 
              this.setState({loggedin:true});
              
          } 
          else{ 
              this.setState({accept:false})
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
     
        if(this.state.loggedin===false){
            if(this.state.loginoption===false){
                return(
                <button onClick={this.setState({loginoption:true})}>Log In</button> 
                );
            }
            else{
            return( 
                
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <label className="required">* required </label>
                    
                    <label>
                    <input type="text" name='enteredusername' target='one' className="form-control inputArea" onChange={this.setStates} enteredusername={this.state.enteredusername} id="enteredusername" placeholder="enteredusername *"></input> 
                    <input type="text" name='enteredpassword' target='two' className="form-control inputArea" onChange={this.setStates} enteredpassword={this.state.enteredpassword} id="enteredpassword" placeholder="enteredpassword *"></input> 
                    </label> 
                    
                    <input type="submit" value="Submit" onClick={this.check}/> 
                    
                </form> 
            );    
            }
        } 
        
        else if(this.state.loggedin===true){ 
            return( 
                <a>Logged in as {this.state.enteredusername}</a>
            );
        } 
        else{ 
            return(
            <a>not working</a>
            );
        }
          
      
 
      
    }
   
  }
  
  export default LoginStatus;