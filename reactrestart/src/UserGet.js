import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class UserGet extends Component { 
  constructor(){ 
    super(); 
    this.state = { 
      data: "hello", 
      username:"null", 
      password:"null"
    }
  }



    getRequest = ()=>{ 
        axios.get('/getAllUsers').then(r=>{this.setState({data: r.data})}); 
        
    }

    render() {
      return (
        <div>
            <button onClick={this.getRequest}>Click</button> 
            <p>username={this.state.data[0].userName}</p> 
            <p>password={this.state.data[0].userPassword}</p> 
        </div>
      
      );
    }
  }
  
  export default UserGet;