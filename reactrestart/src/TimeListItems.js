import React, { Component } from 'react';
import DeleteTimeLog from './DeleteTimeLog';
class TimeListItems extends Component {


  render() {
    return (
      <div>
        <div>
          <li key={`aMyKey${this.props.timeID}`}>
            <a>Time : {this.props.time} {this.props.algID} <DeleteTimeLog timeID={this.props.timeID} /></a>
          </li>
        </div>
      </div>
    );
  }



}

export default TimeListItems;