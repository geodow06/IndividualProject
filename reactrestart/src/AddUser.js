import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class AddUser extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      username:'', 
      password:''
    }
  }



    pushRequest = ()=>{ 
      axios.post(`/addUser/${this.state.username}/${this.state.password}`); 
      this.props.signedUp();
      
    } 

    setStates = (event)=>{ 
      this.setState({[event.target.name]:event.target.value});
    } 

    handleSubmit=(event) =>{ 
      console.log('A username was submitted: ' + this.state.username); 
      console.log('A password was submitted: '+ this.state.password);
      event.preventDefault();
    }

    render() {
      return (
        <div> 
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>
                
                <label>
                  <input type="text" name='username' target='one' className="form-control inputArea" onChange={this.setStates} username={this.state.username} id="Username" placeholder="Username *"></input> 
                  <input type="text" name='password' target='two' className="form-control inputArea" onChange={this.setStates} password={this.state.password} id="Password" placeholder="Password *"></input> 
                </label> 
                
                <input type="submit" value="Submit" onClick={this.pushRequest}/> 
                
            </form> 
        </div>
      );
    } 
  }
  
  export default AddUser;