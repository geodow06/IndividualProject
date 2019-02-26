import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class UserGet extends Component { 
  constructor(){ 
    super(); 
    this.state = { 
      data: ["hello","goodbye"], 
      username:"null", 
      password:"null"
    }
  }



    getRequest = ()=>{ 
        axios.get('/getAllUsers').then(r=>{this.setState({data: r.data})}); 
        
    }
    loopUsers = ()=>{ 
      for(let i=0 ; i<2 ; i++){ 
        
      }
    }
    
    render() { 
      for(let i=0 ; i<2 ; i++){ 
        return (
          <div>
              {/* <button onClick={this.getRequest}>Click</button>  */}
              {/* <p>username={this.state.data[i].userName}</p> 
              <p>password={this.state.data[i].userPassword}</p>  */} 
              <p>{this.state.data[i]}</p> 
              {/* <p>{this.state.data[1]}</p> */}
          </div>
        
        ); 
      } 
    }
   
  }
  
  export default UserGet;