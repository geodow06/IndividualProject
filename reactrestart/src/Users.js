import React, { Component } from 'react'; 
import NavBar from './NavBar.js'; 
import AddUser from './AddUser.js';
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