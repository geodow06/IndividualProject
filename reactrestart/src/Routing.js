import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home.js';
import Trainer from './Trainer.js';
import AlgorithmsPage from './AlgorithmsPage.js';
import './App.css';

class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }


  logOut = () => {
    this.props.logOut();
  }

  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <NavLink className="logo" to="/">George's PLL Trainer: {this.props.currentUsername}</NavLink>
            <button onClick={this.logOut}>Logout</button>
            <div className="header-right">
              <NavLink id="home" to="/">Home</NavLink>
              <NavLink to="/Trainer">Trainer</NavLink>
              <NavLink to="/AlgorithmsPage">My Algorithms</NavLink>
            </div>
          </div>
          <Route exact path="/" render={() => <Home currentUsername={this.props.currentUsername} />} />
          <Route exact path="/Trainer" render={() => <Trainer currentUserID={this.props.currentUserID} />} />
          <Route exact path="/AlgorithmsPage" render={() => <AlgorithmsPage currentUserID={this.props.currentUserID} />} />
        </div>
      </Router>
    );
  }
}
export default Routing;