import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TimeListItems from './TimeListItems'; 
import TimeDisplay from './TimeDisplay';
const prettyMs = require('pretty-ms');
// const users = []; 
// let users = [{username:"hello", password:"password"},{username:"hello2",password:"password2"}]
class GetAllTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // algID:3, 
      // userID:12,
      times: []

    }
  }

  getRequest = () => {
    axios.get(`/getUserAlgTimes/${this.props.userID}/${this.props.algID}`).then(r => { this.setState({ times: r.data }) });
    
  }
  render() {
    let times = this.state.times.map(t => <TimeDisplay time={t.time} />)
    return (
      <div>
        <ul>
          {times}
        </ul>
        {/* <button onClick={this.getRequest}>Click</button>  */}
        {this.getRequest()}
      </div>

    );

  }

}

export default GetAllTimes;