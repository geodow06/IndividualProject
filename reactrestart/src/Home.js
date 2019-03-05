import React, { Component } from 'react';
import './App.css'; 
import NavBar from './NavBar.js';
import Cube from './Cube.js'; 
import axios from 'axios';
import GetAllUsers from './GetAllUsers'; 
import AddUser from './AddUser';
class Home extends Component { 



  render() {
    return (
      <div>
        {/* <NavBar/>  */}
        {/* <Cube/> */}  
        <h1>Welcome</h1>
        {/* <UserGet/>  */}
        {/* <AddUser/> */}
      
      </div> 
    );
  }
}

export default Home;
