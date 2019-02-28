import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class AddTimeLog extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      time:'', 
      algID:''
    }
  }



    pushRequest = ()=>{ 
     
      axios.post(`/addTimeLog/${this.state.time}/${this.state.algID}`);
    } 

    setStates = (event)=>{ 
      this.setState({[event.target.name]:event.target.value});
    } 

    handleSubmit=(event) =>{ 
      console.log('A username was submitted: ' + this.state.time); 
      console.log('A password was submitted: '+ this.state.algID);
      event.preventDefault();
    }

    render() {
      return (
        <div> 
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>
                
                <label>
                  <input type="text" name='time' target='one' className="form-control inputArea" onChange={this.setStates} username={this.state.time} id="Time" placeholder="Time *"></input> 
                  <input type="text" name='algID' target='two' className="form-control inputArea" onChange={this.setStates} password={this.state.algID} id="AlgID" placeholder="AlgID *"></input> 
                </label> 
                
                <input type="submit" value="Submit" onClick={this.pushRequest}/> 
                
            </form> 
        </div>
      );
    } 
  }
  
  export default AddTimeLog;