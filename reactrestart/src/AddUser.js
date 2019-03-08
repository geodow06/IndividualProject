import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      requestResponse: ''
    }
  }
  pushRequest = () => {
    axios.post(`/addUser/${this.state.username}/${this.state.password}`).then(r => { this.setState({ requestResponse: r.data }) });

    this.props.signedUp(this.state.requestResponse, this.state.username);

  }
  setStates = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <label className="required">To create a new user please enter a username and password</label>
          <label>
            <input type="text" name='username' target='one' className="form-control inputArea" onChange={this.setStates} username={this.state.username} id="Username" placeholder="Username *"></input>
            <input type="text" name='password' target='two' className="form-control inputArea" onChange={this.setStates} password={this.state.password} id="Password" placeholder="Password *"></input>
          </label>
          <input type="submit" value="Submit" onClick={this.pushRequest} />
        </form>
      </div>
    );
  }
}

export default AddUser;