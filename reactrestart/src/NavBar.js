import React, { Component } from 'react';
import './App.css'; 

class NavBar extends Component {
  render() {
    return (
    <div className="header">
      <a  className="logo">George's PLL Trainer</a>
      <div className="header-right">
          <a className="active">Home</a> 
          <a>ebverjbgwerhi</a>
          <a>Contact</a>
          <a>About</a> 
      </div>
    </div>
    );
  }
}

export default NavBar;