import React, { Component } from 'react';
import './App.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.currentUsername} to my PLL Training companion.</h1>
      </div>
    );
  }
}

export default Home;
