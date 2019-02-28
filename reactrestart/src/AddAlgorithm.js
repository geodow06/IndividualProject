import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class AddAlgorithm extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
      algName:'', 
      moves:'',  
      scramble:'',
      userID:''
    }
  }



    pushRequest = ()=>{ 
     
      axios.post(`/addAlgorithm/${this.state.algName}/${this.state.moves}/${this.state.scramble}/${this.state.userID}`); 
      
    } 

    setStates = (event)=>{ 
      this.setState({[event.target.name]:event.target.value});
    } 

    handleSubmit=(event) =>{ 
      console.log('A algName was submitted: ' + this.state.algName); 
      console.log('A moves was submitted: '+ this.state.moves); 
      console.log('A scramble was submitted: '+ this.state.scramble); 
      console.log('A userID was submitted: '+ this.state.userID);
      event.preventDefault();
    }

    render() {
      return (
        <div> 
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>
                
                <label>
                  <input type="text" name='algName' target='one' className="form-control inputArea" onChange={this.setStates} algName={this.state.algName} id="algName" placeholder="AlgName *"></input> 
                  <input type="text" name='moves' target='two' className="form-control inputArea" onChange={this.setStates} password={this.state.moves} id="moves" placeholder="Moves *"></input> 
                  <input type="text" name='scramble' target='three' className="form-control inputArea" onChange={this.setStates} username={this.state.scramble} id="scramble" placeholder="Scramble *"></input> 
                  <input type="text" name='userID' target='four' className="form-control inputArea" onChange={this.setStates} password={this.state.userId} id="userID" placeholder="UserID *"></input> 
                </label> 
                
                <input type="submit" value="Submit" onClick={this.pushRequest}/> 
                
            </form> 
        </div>
      );
    } 
  }
  
  export default AddAlgorithm;