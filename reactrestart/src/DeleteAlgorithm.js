import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';


class DeleteAlgorithm extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       
      
    }
  } 

    deleteRequest = ()=>{  
        axios.delete(`/deleteAlgorithm/${this.props.algID}`);
      } 
    render() {   
  
      return (
        <a>      
           
            <button onClick={this.deleteRequest}>Delete</button>
        </a>
      
      );  
    //   }
      
    }
   
  }
  
  export default DeleteAlgorithm;