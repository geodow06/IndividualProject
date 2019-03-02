import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './Users';

class GetAllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      users: []
      // username:"null",
      // user:{username:"",password:""}, 
      // password:"null"
    }
  }

  getRequest = () => {
    axios.get('/getAllUsers').then(r => { this.setState({ users: r.data }) });
  }

  render() {
    let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)
    return (
      <div>


        <ul key={`myKey${this.state.userID}`}>
          {users} 
        </ul>
        {this.getRequest()}
        {/* <button onClick={this.getRequest}>Click</button> */}

      </div>

    );

  }

}

export default GetAllUsers;