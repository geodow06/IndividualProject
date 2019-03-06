import React, { Component } from 'react'; 
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';
class Users extends Component{ 
render(){ 
  return (
    <div>      
         
          <li key={`myKey${this.props.userID}`}>  
            <a>{this.props.userName} <DeleteUser userName={this.props.userName} userID={this.props.userID} /><UpdateUser userID={this.props.userID}/></a> 
          </li>
        
    </div>
  );
}
} 

export default Users; 
