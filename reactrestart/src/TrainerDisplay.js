import React, { Component } from 'react';
import DisplayUserAlgTimes from './DisplayUserAlgTimes';
class TrainerDisplay extends Component {



  render() {
    return (
      <div>
        <div>
          <li key={`aMyKey${this.props.algID}`}>
            <a> {this.props.name} <DisplayUserAlgTimes currentUserID={this.props.currentUserID} name={this.props.name} algID={this.props.algID} /></a>
          </li>
        </div>
      </div>
    );
  }



}

export default TrainerDisplay;