import React, { Component } from 'react';
import './App.css';
import RoutePage from './Routing.js';
import LoginPage from './LoginPage'; 
import axios from 'axios';
import AdminRouting from './AdminRouting';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUserID: null,
      loggedIn: false,
      currentUsername: null,
      enteredUsername: "",
      enteredPassword: "",
      users: [],
      userid: null,
      loginAccepted: false,
      register: false,
      user: [],
      displayedResponse: ''
    }
  }
  // setCurrentUser = (userid, enteredUsername, loginAccepted) => {
  //   this.setState({ currentUserID: userid, currentUsername: enteredUsername, loggedIn: loginAccepted });
  //   // console.log(`${this.state.currentUserID}  id  ${this.state.currentUsername} username  ${this.state.loggedIn}    `)
  // } 

  setCurrentUser = (e) => {
    e.preventDefault();
    this.getRequest();


    // this.setState({ loggedIn: true, currentUsername: this.state.user.userName, currentUserID: this.state.user.userID });

    console.log(this.state.user.userName);
    console.log(this.state.currentUsername);


    console.log(this.state.user.userID);
    console.log(this.state.currentUserID);
    console.log(`user id ${this.state.currentUserID} username ${this.state.currentUsername}`);
    // this.props.setCurrentUser(this.state.userIDToSend, this.state.usernameToSend, this.state.loginAccepted);


  }

  getRequest = () => { 
    console.log(`user id ${this.state.enteredUsername} username ${this.state.enteredPassword}`);
    axios.get(`/logInUser/${this.state.enteredUsername}/${this.state.enteredPassword}`).then(r => { this.setState({ user: r.data , loggedIn:true}) });
  }

  setStates = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  logOut = () => {
    this.setState({ loggedIn: false });
  }
  render() {
    if (!this.state.loggedIn) {
      return (
        // <LoginPage setCurrentUser={this.setCurrentUser} /> 
        <div>
          <h1>Welcome Please Sign In</h1>
          <form onSubmit={this.setCurrentUser} className="form-inline">
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
    else if (this.state.currentUsername === "Admin") {
      return (
        <AdminRouting currentUsername={this.state.enteredUsername} logOut={this.logOut} />
      );
    }
    else {
      return (
        <div>
          <RoutePage currentUsername={this.state.enteredUsername} currentUserID={this.state.user.userID} logOut={this.logOut} />
        </div>
      );
    }
  }
}
export default App;
