import React, { Component } from 'react';
import './App.css'; 
import NavBar from './NavBar.js';
import Cube from './Cube.js';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar/> 
        <Cube/>
      </div>
    );
  }
}

export default App;
