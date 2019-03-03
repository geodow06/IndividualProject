import React, { Component } from 'react';
import './App.css'; 
import RoutePage from './Routing.js'; 

class App extends Component { 
  
  constructor(props){ 
    super(props); 
    this.state = { 
        currentuserid:null
              
    }
  } 

  render(){ 
    return(
    <div> 
     
      <RoutePage></RoutePage> 
   
    </div>
    
    
    ); 
  }
}

export default App;
