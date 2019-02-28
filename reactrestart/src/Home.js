import React, { Component } from 'react';
import './App.css'; 
import NavBar from './NavBar.js';
import Cube from './Cube.js'; 
import axios from 'axios';
import UserGet from './UserGet'; 
import AddUser from './AddUser';
class Home extends Component { 



  render() {
    return (
      <div>
        {/* <NavBar/>  */}
        {/* <Cube/> */}  
        <UserGet/> 
        {/* <AddUser/> */}
      
      </div> 
    );
  }
}

export default Home;
