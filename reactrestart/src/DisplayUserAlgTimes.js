import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TimeDisplay from './TimeDisplay';
const prettyMs = require('pretty-ms');
class DisplayUserAlgTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: []

    }
  }

  getRequest = () => {
    // console.log("doing getuserAlgRequest");
    // console.log(this.props.currentUserID + " User id succesfully passed");
    // console.log(this.props.algID + " alg");
    axios.get(`/getUserAlgTimes/${this.props.currentUserID}/${this.props.algID}`).then(r => { this.setState({ times: r.data }) });

  }
  render() {
    let times = this.state.times.map(t => <TimeDisplay time={t.time} timeID={t.timeID}/>);
    return (
      <div>
        <ul>
          {times}
        </ul> 
        
        <button className="button"onClick={this.getRequest}>Click</button>
        {/* {this.getRequest()} */}
      </div>

    );

  }

}

export default DisplayUserAlgTimes;