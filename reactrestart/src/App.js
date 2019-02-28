import React, { Component } from 'react';
import './App.css'; 
import NavBar from './NavBar.js';
import Cube from './Cube.js'; 
import axios from 'axios';
import UserGet from './UserGet'; 
import AddUser from './AddUser.js'; 
import RoutePage from './Routing.js'; 
import Testingdatasets from './Testingdatasets'; 
import Data from './Data';
class App extends Component { 
  render(){ 
    return(
    <div> 
     
      <RoutePage></RoutePage> 
   
    </div>
    
    
    ); 
  }
  // render() {
  //   return (
  //     <div>
  //       <NavBar/> 
  //       {/* <Cube/> */}  
  //       <UserGet/> 
  //       {/* <AddUser/> */}
      
  //     </div>
  //   );
  // }
}

export default App;
