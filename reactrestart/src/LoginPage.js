import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import '/roofpig_and_three.min.js'
import AddUser from './AddUser';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredUsername: "",
      enteredPassword: "",
      users: [],
      userid: null,
      loginAccepted: false,
      register: false,
      user: [], 
      displayedResponse:''
      // usernameToSend:"", 
      // userIDToSend:""

    }
  }

  check = (e)=>{ 
    e.preventDefault();
    this.getRequest(); 
    //let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)

    for(let i=0;i<this.state.users.length;i++){  
      // console.log("user name"+this.state.users[i].userName+" entered"+this.state.enteredUsername);
      if(this.state.users[i].userName===this.state.enteredUsername&&this.state.users[i].userPassword===this.state.enteredPassword) { 
        this.setState({userid:this.state.users[i].userID})  
        this.setState({loginAccepted:true}); 
        this.props.setCurrentUser(this.state.userid, this.state.enteredUsername, this.state.loginAccepted); 
        break;
      } 

    }
  } 

  // setCurrentUser = (e) => { 
  //   e.preventDefault();
  //   this.getRequest();
  //   // this.setState({loginAccepted:true}); 
  
  //   this.setState({loginAccepted:true, usernameToSend:this.state.user.userName, userIDToSend:this.state.userID}); 
    
  //   console.log(this.state.user.userName);
  //   console.log(this.state.usernameToSend);
   
  //   // this.setState({userIDToSend:this.state.user.userID});
  //   console.log(this.state.user.userID);  
  //   console.log(this.state.userIDToSend);
  //   console.log(`user id ${this.state.userIDToSend} username ${this.state.usernameToSend}`);
  //   this.props.setCurrentUser(this.state.userIDToSend, this.state.usernameToSend, this.state.loginAccepted); 
  //   //console.log(`inside setcurrentuser in login page ${this.state.user.userID} ${this.state.user.userName} ${this.state.loginAccepted}`);
  // }

  getRequest = () => {
    axios.get('/getAllUsers').then(r => { this.setState({ users: r.data }) });

  } 
  // getRequest=()=>{ 
  //   axios.get(`/logInUser/${this.state.enteredUsername}/${this.state.enteredPassword}`).then(r => { this.setState({ user: r.data }) });
  // }
  setStates = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  signUp = () => {
    this.setState({ register: true });
  }
  signedUp = (requestResponse, username) => { 
    if(requestResponse === "User "+username+" succesfully added."){ 
      this.setState({ register: false });
    } 
    else{ 
      this.setState({displayedResponse:requestResponse})
    }
    
  }
  render() {
    if (!this.state.register) {



      return (
        <div>
          <h1>Welcome Please Sign In</h1>
          <form onSubmit={this.check} className="form-inline">
            <label className="required"></label>

            <label>
              <input type="text" name='enteredUsername' target='one' className="form-control inputArea" onChange={this.setStates} enteredUsername={this.state.enteredUsername} id="enteredUsername" placeholder="username *"></input>
              <input type="text" name='enteredPassword' target='two' className="form-control inputArea" onChange={this.setStates} enteredPassword={this.state.enteredPassword} id="enteredPassword" placeholder="password *"></input>
            </label>

            <input type="submit" value="Submit" />
          </form>
          <button onClick={this.signUp}>Or Register An Account Here</button>
        </div>
      );
    }
    else {
      return (
        
        <div>
          <AddUser signedUp={this.signedUp} />  
          <a>{this.state.displayedResponse}</a>
        </div>
      );
    }
  }
}

export default LoginPage;