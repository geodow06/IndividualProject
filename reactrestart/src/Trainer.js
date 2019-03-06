import React, { Component } from 'react';

import GenerateRandomScramble from './GenerateRandomScramble';


class Trainer extends Component {


  constructor(props) {
    super(props);
    this.state = {
      getid: null,


    }
  }


  render() {
    return (
      <div>
        <GenerateRandomScramble currentUserID={this.props.currentUserID} />
      </div>
    );
  }



}

export default Trainer;