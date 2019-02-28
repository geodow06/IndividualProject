import React, { Component } from 'react'; 
import NavBar from './NavBar.js'; 
import AddUser from './AddUser.js'; 
import UserGet from './UserGet';
class Users extends Component{ 
 
  constructor(props){ 
    super(props);
  }

render(){ 
  return (
    <div>      
        <div> 
          <li key={`myKey${this.props.userID}`}>  
            <a>{this.props.userID} {this.props.userName} {this.props.userPassword}</a>
          </li>
        </div> 
    </div>
  );
}



} 

export default Users;