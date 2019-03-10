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
        <h1 className="centre">Welcome {this.props.currentUsername} to my PLL Training companion.<br/>This is a work in progress but I hope you find it useful, you are able to add your own algorithms via the "My Algorithms" page<br/>
        and then on the "Trainer" page also gound on the navigation bar at the top right you will be given a random scramble from one of your algorithms<br/> 
        which will leave you with a specific PLL case for you to solve, use the timer provided to time yourself perform the algorithm
        and your times will be dispplayed on the right, thankyou.</h1>
      </div>
    );
  }
}

export default Home;
