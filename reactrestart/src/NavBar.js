import React, { Component } from 'react';
import './App.css'; 

class NavBar extends Component {
  render() {
    return (
    <div className="header">
      <a  className="logo">George's PLL Trainer</a>
      <div className="header-right">
          <a className="active" href="#home">Home</a> 
          <a href="">ebverjbgwerhi</a>
          <a href="">Contact</a>
          <a href="">About</a> 
      </div>
    </div>
    );
  }
}

export default NavBar;