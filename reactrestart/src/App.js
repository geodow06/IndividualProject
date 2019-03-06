import React, { Component } from 'react';
import './App.css';
import RoutePage from './Routing.js';
import LoginPage from './LoginPage';
import AdminRouting from './AdminRouting';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUserID: null,
      loggedIn: false,
      currentUsername: null,

    }
  }

  setCurrentUser = (userid, enteredUsername, loginAccepted) => {
    this.setState({ currentUserID: userid });
    this.setState({ loggedIn: loginAccepted });
    this.setState({ currentUsername: enteredUsername }); 
    // console.log(`${this.state.currentUserID}  id  ${this.state.currentUsername} username  ${this.state.loggedIn}    `)
  }

  logOut = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    if (!this.state.loggedIn) {
      return ( 
        
        <LoginPage setCurrentUser={this.setCurrentUser} />
      );
    }
    else if (this.state.currentUsername === "Admin") {
      return (
        <AdminRouting currentUsername={this.state.currentUsername} logOut={this.logOut} />
      );
    }

    else {
      return (
        <div>
  
          <RoutePage currentUsername={this.state.currentUsername} currentUserID={this.state.currentUserID} logOut={this.logOut} />

        </div>
      );
    }
  }
}

export default App;
