import React, { Component } from 'react';
import DeleteTimeLog from './DeleteTimeLog';
const prettyMs = require('pretty-ms');
class TimeDisplay extends Component {


  render() {
    if (!this.props.time) {
      return (
        <a>try again</a>
      );
    }
    else {
      return (
        <div>

          <li key={`aMyKey${this.props.timeID}`}>
            <a>{prettyMs(parseInt(this.props.time), { secDecimalDigits: 4 })}</a>
            {/* <a>{this.props.time}</a> */} 
            <DeleteTimeLog timeID={this.props.timeID} />
          </li>
          

        </div>
      );
    }
  }



}

export default TimeDisplay;