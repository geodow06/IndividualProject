import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import Users from './Users';

class DeleteUser extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       
      
    }
  } 

    deleteRequest = ()=>{  
        axios.delete(`/deleteUser/${this.props.userID}`);
      } 
    render() {   
    
    //   if(!this.props.userName){ 
    //   return( 
    //     <a>
    //     <a>here {this.props.name} here</a>
    //     <a>no name</a> 
    //     </a>
    //   ); 
    //   //let algorithms = this.state.algorithms.map(a => <AlgorithmsListItems algID={a.algID} name={a.name} moves={a.moves} scramble={a.scramble} userID={a.userID} />)
    //   }
    //   else{
      return (
        <a>      
           
            <button onClick={this.deleteRequest}>Delete User {this.props.userName}</button>
        </a>
      
      );  
    //   }
      
    }
   
  }
  
  export default DeleteUser;