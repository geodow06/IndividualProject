import React, { Component } from 'react'; 
import DeleteUser from './DeleteUser';

class Users extends Component{ 

render(){ 
  return (
    <div>      
        <div> 
          <li key={`myKey${this.props.userID}`}>  
            <a>{this.props.userID} {this.props.userName} {this.props.userPassword} <DeleteUser userName={this.props.userName} userID={this.props.userID}/></a> 
            
          </li>
        </div> 
    </div>
  );
}



} 

export default Users;