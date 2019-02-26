import React, { Component } from 'react'; 
import NavBar from './NavBar.js';
class Users extends Component{ 


render(){ 
  return (
    <div>
        <NavBar/> 
        
        <AddUser/>
    
    </div>
  );
}



} 

export default Users;