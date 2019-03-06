import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  deleteRequest = () => {
    axios.delete(`/deleteUser/${this.props.userID}`);
  }
  render() {
    return (
      <a>
        <button onClick={this.deleteRequest}>Delete User</button>
      </a>
    );
  }
}
export default DeleteUser;