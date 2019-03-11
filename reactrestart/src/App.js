import React, { Component } from 'react';
import './App.css';
import RoutePage from './Routing.js';

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
      displayedResponse: '',
      username: '',
      password: '',
      requestResponse: ''
    }
  }


  setCurrentUser = (e) => {
    e.preventDefault();
    this.getRequest();
  }

  pushRequest = () => {
    axios.post(`/addUser/${this.state.username}/${this.state.password}`).then(r => { this.setState({ requestResponse: r.data }) });
  }

  getRequest = () => {
    console.log(`user id ${this.state.enteredUsername} username ${this.state.enteredPassword}`);
    axios.get(`/logInUser/${this.state.enteredUsername}/${this.state.enteredPassword}`).then(r => { this.setState({ user: r.data, loggedIn: true }) });
  }

  setStates = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  setStates2 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  signUp = () => {
    this.setState({ register: true });
  }
  signedUp = () => {
    // if (this.state.requestResponse === "User " + this.state.username + " succesfully added.") {
      this.setState({ register: false });
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  logOut = () => {
    this.setState({ loggedIn: false });
  }
  render() {

    if (this.state.register) {
      return (
        <div className="centre"> 
          <h1> 
            Please sign up by entering a username and password.
          </h1>
          <form onSubmit={this.handleSubmit} className="form-inline">
            <label className="required">* required </label>
            <label>
              <input type="text" name='username' target='one' className="form-control inputArea" onChange={this.setStates} username={this.state.username} id="Username" placeholder="Username *"></input>
              <input type="text" name='password' target='two' className="form-control inputArea" onChange={this.setStates} password={this.state.password} id="Password" placeholder="Password *"></input>
            </label>
            <input type="submit" value="Submit" onClick={this.pushRequest} />
           
          </form>
          <button className="button"onClick={this.signedUp}><span>Return to Login Page</span></button>
          
          <div>
            <a>{this.state.requestResponse}</a>
          </div>
        </div>
      );
    }


    else if (!this.state.loggedIn || !this.state.user.userName) {
      return (
        <div className="centre">
          <h1 className="centre">Welcome to my PLL trainer please sign in below</h1>
          <form onSubmit={this.setCurrentUser} className="form-inline">
            <label className="required"></label>

            <label>
              <input type="text" name='enteredUsername' target='one' className="form-control inputArea" onChange={this.setStates2} enteredUsername={this.state.enteredUsername} id="enteredUsername" placeholder="username *"></input>
              <input type="password" name='enteredPassword' target='two' className="form-control inputArea" onChange={this.setStates2} enteredPassword={this.state.enteredPassword} id="enteredPassword" placeholder="password *"></input>
            </label>

            <input className="submit"type="submit" value="Submit" />
          </form>
          <button className="button"onClick={this.signUp}><span>Or Register An Account Here</span></button>
        </div>
      );
    }

    else if (this.state.enteredUsername === "Admin") {
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
