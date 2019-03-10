import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';

class AddAlgorithm extends Component { 
  constructor(){ 
    super(); 
    this.state = { 
      algName:'', 
      moves:'',  
      scramble:'',
     
    }
  }



    pushRequest = ()=>{ 
     
      axios.post(`/addAlgorithm/${this.state.algName}/${this.state.moves}/${this.state.scramble}/${this.props.currentUserID}`); 
      
    } 

    setStates = (event)=>{ 
      this.setState({[event.target.name]:event.target.value});
    } 

    handleSubmit=(event) =>{ 

      event.preventDefault();
    }

    render() {
      return (
        <div className="centre"> 
        <br/> 
        <br/>
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>
                
                <label>
                  <input type="text" name='algName' target='one' className="form-control inputArea" onChange={this.setStates} algName={this.state.algName} id="algName" placeholder="Name *"></input> 
                  <input type="text" name='moves' target='two' className="form-control inputArea" onChange={this.setStates} moves={this.state.moves} id="moves" placeholder="Moves *"></input> 
                  <input type="text" name='scramble' target='three' className="form-control inputArea" onChange={this.setStates} scramble={this.state.scramble} id="scramble" placeholder="Scramble *"></input> 
                 
                </label> 
                
                <input type="submit" value="Submit" onClick={this.pushRequest}/> 
                
            </form> 
        </div>
      );
    } 
  }
  
  export default AddAlgorithm;