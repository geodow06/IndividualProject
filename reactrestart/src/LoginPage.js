import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'


class LoginPage extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
        enteredusername:"", 
        enteredpassword:"", 
              
    }
  } 


  setStates = (event)=>{ 
    this.setState({[event.target.name]:event.target.value});
  } 

  check=(e)=>{ 
    e.preventDefault(); 
    this.props.check(this.state.enteredusername, this.state.enteredpassword); 
    console.log("Hey reached check");
  }

    render() {   
          return( 
            <form onSubmit={this.check} className="form-inline">
                <label className="required"></label>
                
                <label>
                  <input type="text" name='enteredusername' target='one' className="form-control inputArea" onChange={this.setStates} enteredusername={this.state.enteredusername} id="enteredusername" placeholder="enteredusername *"></input> 
                  <input type="text" name='enteredpassword' target='two' className="form-control inputArea" onChange={this.setStates} enteredpassword={this.state.enteredpassword} id="enteredpassword" placeholder="enteredpassword *"></input> 
                </label> 
                
                <input type="submit" value="Submit"/> 
            </form> 
        );       
    }
  }
  
  export default LoginPage;