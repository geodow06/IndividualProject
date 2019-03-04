import React, { Component } from 'react';
import './App.css'; 

class Home extends Component { 

  constructor(props){ 
    super(props); 
    this.state = {       
    }
  } 

  render() {
    return (
      <div>
        {/* <NavBar/>  */}
        {/* <Cube/> */}  
        <h1>Welcome {this.props.currentUserID} to my PLL Training companion.</h1>
        {/* <UserGet/>  */}
        {/* <AddUser/> */}
      
      </div> 
    );
  }
}

export default Home;
