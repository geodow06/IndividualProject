import React, { Component } from 'react';
import './App.css'; 
import axios from 'axios';
// import '/roofpig_and_three.min.js'
import AddUser from './AddUser';

class LoginPage extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
        enteredUsername:"", 
        enteredPassword:"", 
        users:[],
        userid:null, 
        loginAccepted:false, 
        register:false
              
    }
  } 

  check = (e)=>{ 
    e.preventDefault();
    this.getRequest(); 
    //let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)
    
    for(let i=0;i<this.state.users.length;i++){  
      // console.log("user name"+this.state.users[i].userName+" entered"+this.state.enteredUsername);
      if(this.state.users[i].userName===this.state.enteredUsername&&this.state.users[i].userPassword===this.state.enteredpassword) { 
        this.setState({userid:this.state.users[i].userID})  
        this.setState({loginAccepted:true}); 
        this.props.setCurrentUser(this.state.userid, this.state.enteredUsername, this.state.loginAccepted); 
        break;
      } 
      
    }
}
  getRequest = () => {
    axios.get('/getAllUsers').then(r => { this.setState({ users: r.data }) }); 
    
  } 
  setStates = (event)=>{ 
    this.setState({[event.target.name]:event.target.value});
  } 

  signUp=()=>{ 
    this.setState({register:true});  
  }  
  signedUp=()=>{ 
    this.setState({register:false});
  }
    render() {   
         if(!this.state.register){   
      
      
      
          return(  
              <div> 
                <h1>Welcome Please Sign In</h1>
                <form onSubmit={this.check} className="form-inline">
                    <label className="required"></label>
                    
                    <label>
                      <input type="text" name='enteredUsername' target='one' className="form-control inputArea" onChange={this.setStates} enteredUsername={this.state.enteredUsername} id="enteredUsername" placeholder="enteredUsername *"></input> 
                      <input type="text" name='enteredpassword' target='two' className="form-control inputArea" onChange={this.setStates} enteredpassword={this.state.enteredpassword} id="enteredpassword" placeholder="enteredpassword *"></input> 
                    </label> 
                    
                    <input type="submit" value="Submit"/> 
                </form>  
                <button onClick={this.signUp}>Or Register An Account Here</button>
              </div>
          );    
         }    
         else{ 
           return( 
            <AddUser signedUp={this.signedUp}/>
           );
         }
    }
  }
  
  export default LoginPage;