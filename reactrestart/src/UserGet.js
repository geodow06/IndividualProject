import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';
// const users = []; 
// let users = [{username:"hello", password:"password"},{username:"hello2",password:"password2"}]
class UserGet extends Component { 
  constructor(){ 
    super(); 
    this.state = { 
      data: "", 
      users:[{username:"hello", password:"password"},{username:"hello2",password:"password2"}], 
      username:"null",
      user:{username:"",password:""}, 
      password:"null"
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
        axios.get('/getAllUsers').then(r=>{this.setState({data: r.data})}); 
        
    } 

    listUsers = ()=>{  
      this.setState({username:"george"}); 
      this.setState({password:"downe"}); 
      this.setState({user:{username:this.state.username, password:this.state.password}}); 
      this.state.users.push(this.state.user); 
      console.log(this.state.username)
      return( 
        <p>{this.state}</p> 
      
      ); 
      {/* <p>{this.state.user[0].username}</p>  */}  
      // this.state.users.push(this.state.username); 
      // this.state.users.push(this.state.password);
    } 

    // loopUsers = ()=>{ 
    //   for(let i=0 ; i<2 ; i++){ 
        
    //   }
    // }
    
    render() { 
      
      return (
        <div> 
            {/* <UserGet users={users[0].username}></UserGet>  */}
            {/* <ul>{this.userList}</ul> */} 
            {/* <p>{this.state.users[1].username}</p>
            // <p>{users[0].username}</p> */} 
            {/* <p>{this.listUsers}</p>   */} 
            
            <button onClick={this.listUsers}>Click</button>
            {/* <p>{this.state.users[0].username}</p> */}
            {/* <button onClick={this.getRequest}>Click</button>  */}
            {/* <p>username={this.state.data[i].userName}</p> 
            <p>password={this.state.data[i].userPassword}</p>  */} 
            {/* <p>{this.state.data[i]}</p>  */}
            {/* <p>{this.state.data[1]}</p> */}
        </div>
      
      ); 
      
    }
   
  }
  
  export default UserGet;