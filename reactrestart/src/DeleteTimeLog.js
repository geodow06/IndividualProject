import React, { Component } from 'react';
import './App.css'; 
import axios from 'axios';


class DeleteTimeLog extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       
      
    }
  } 

    deleteRequest = ()=>{  
        axios.delete(`/deleteTimeLog/${this.props.timeID}`);
      } 
    render() {   
  
      return (
        <a>      
           
            <button onClick={this.deleteRequest}>Delete Time</button>
        </a>
      
      );  
    //   }
      
    }
   
  }
  
  export default DeleteTimeLog;