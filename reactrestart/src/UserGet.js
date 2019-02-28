import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
import Users from './Users'; 

// const users = []; 
// let users = [{username:"hello", password:"password"},{username:"hello2",password:"password2"}]
class UserGet extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      data: "", 
      users:[{userID:"null",userName:"null", userPassword:"null"},{userID:"second",userName:"bdb",userPassword:"be"}] 
      // username:"null",
      // user:{username:"",password:""}, 
      // password:"null"
    }
  } 
 
 
  // user = {username:"hello",password:"goodbye"}
  // userList = () =>{ 
  //   const listItems = users.map((user)=> 
  //     <li>{user}</li>
  //   ); 
  //   return( 
  //     <ul>{listItems}</ul>
  //   );
  // }
  // this.state.myArray.push('new value')

    getRequest = ()=>{ 
        axios.get('/getAllUsers').then(r=>{this.setState({users: r.users})}); 
        // this.setState({users:[{userID:"1",userName:"George",userPassword:"Downe"},{userID:"2",userName:"George",userPassword:"Heimsith"}]}); 
      } 

    // listUsers = ()=>{  
    //   this.setState({username:"george"}); 
    //   this.setState({password:"downe"}); 
    //   this.setState({user:{username:this.state.username, password:this.state.password}}); 
    //   this.state.users.push(this.state.user); 
    //   console.log(this.state.username)
    //   return( 
    //     <p>{this.state}</p> 
      
    //   ); 
  

   
    
    render() { 
      let users = this.state.users.map(u => <Users userID={u.userID} userName={u.userName} userPassword={u.userPassword}/>)
      return (
        <div>  
           
           
            <ul key={`myKey${this.state.userID}`}>  
                {users}
            </ul> 
            
            <button onClick={this.getRequest}>Click</button>
         
        </div>
      
      ); 
      
    }
   
  }
  
  export default UserGet;