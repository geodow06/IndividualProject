import React, { Component } from 'react'; 
import NavBar from './NavBar.js'; 
import AddUser from './AddUser.js'; 
import UserGet from './UserGet.js';
class UsersPage extends Component{ 

constructor(props){ 
    super(props);
}

render(){ 
  return (
    <div>
      
        
        <AddUser/> 
        <UserGet/>
    
    </div>
  );
}



} 

export default UsersPage;