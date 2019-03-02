import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TimeListItems from './TimeListItems';

// const users = []; 
// let users = [{username:"hello", password:"password"},{username:"hello2",password:"password2"}]
class GetAllTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {

      times: []

    }
  }

  getRequest = () => {
    axios.get('/getAllTimes').then(r => { this.setState({ times: r.data }) });

  }
  render() {
    let times = this.state.times.map(t => <TimeListItems timeID={t.timeID} time={t.time} algID={t.algID} />)
    return (
      <div>
        <ul>
          {times}
        </ul>
        <button onClick={this.getRequest}>Click</button>
      </div>

    );

  }

}

export default GetAllTimes;