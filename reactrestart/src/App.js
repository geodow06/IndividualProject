import React, { Component } from 'react';
import './App.css'; 
import RoutePage from './Routing.js'; 

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
