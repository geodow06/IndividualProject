import React, { Component } from 'react'; 
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';


class Users extends Component{ 

render(){ 
  return (
    <div>      
         
          <li key={`myKey${this.props.userID}`}>  
            <a>{this.props.userID} {this.props.userName} {this.props.userPassword} <DeleteUser userName={this.props.userName} userID={this.props.userID} /><UpdateUser userID={this.props.userID}/></a> 
          </li>
        
    </div>
  );
}



} 

export default Users; 
{/* <UpdateUser userName={this.props.userName} password = {this.props.password} useruserID={this.props.userID}/> */}