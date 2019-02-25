import React, { Component } from 'react';
import './App.css'; 
import NavBar from './NavBar.js';
import Cube from './Cube.js'; 
import axios from 'axios';
import UserGet from './UserGet';
class App extends Component { 
constructor(){ 
  super(); 
  this.state = { 
    data: "hello", 
    username:"null", 
    password:"null"
  }
}


  render() {
    return (
      <div>
        <NavBar/> 
        {/* <Cube/> */}  
        <UserGet/>
      
      </div>
    );
  }
}

export default App;
