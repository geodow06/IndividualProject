import React, { Component } from 'react';

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
          </li>

        </div>
      );
    }
  }



}

export default TimeDisplay;