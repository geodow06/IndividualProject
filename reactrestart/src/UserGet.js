import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
// const users = []; 
let users = [{username:"hello", password:"password"},{username:"hello2",password:"password2"}]
class UserGet extends Component { 
  constructor(){ 
    super(); 
    this.state = { 
      data: ["hello","goodbye"], 
      users:[{username:"hello", password:"password"},{username:"hello2",password:"password2"}], 
      username:"null", 
      password:"null"
    }
  } 
 
 
  user = {username:"hello",password:"goodbye"}
  userList = () =>{ 
    const listItems = users.map((user)=> 
      <li>{user}</li>
    ); 
    return( 
      <ul>{listItems}</ul>
    );
  }


    getRequest = ()=>{ 
        axios.get('/getAllUsers').then(r=>{this.setState({data: r.data})}); 
        
    }
    loopUsers = ()=>{ 
      for(let i=0 ; i<2 ; i++){ 
        
      }
    }
    
    render() { 
      for(let i=0 ; i<2 ; i++){ 
        return (
          <div> 
              {/* <UserGet users={users[0].username}></UserGet>  */}
              {/* <ul>{this.userList}</ul> */}
              <p>{users[0].username}</p>
              {/* <button onClick={this.getRequest}>Click</button>  */}
              {/* <p>username={this.state.data[i].userName}</p> 
              <p>password={this.state.data[i].userPassword}</p>  */} 
              <p>{this.state.data[i]}</p> 
              {/* <p>{this.state.data[1]}</p> */}
          </div>
        
        ); 
      } 
    }
   
  }
  
  export default UserGet;