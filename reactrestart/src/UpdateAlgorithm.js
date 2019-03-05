import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';


class UpdateAlgorithm extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       show:false, 
       newName:"", 
       newMoves:"", 
       newScramble:""
      
    }
  } 

    updateRequest = ()=>{  
        // axios.delete(`/deleteUser/${this.props.userID}`); 
        axios.put(`/updateAlgorithm/${this.state.newName}/${this.state.newMoves}/${this.state.newScramble}/${this.props.algID}`) 
        this.hideForm();
      }  
    showForm=()=>{ 
        this.setState({show:true});
    }  
    hideForm=()=>{ 
        this.setState({show:false})
    }

    setStates = (event)=>{ 
        this.setState({[event.target.name]:event.target.value});
      } 
  
      handleSubmit=(event) =>{ 
        event.preventDefault();
      }

    render() {   
      if(!this.state.show){  
          
          return( 
          
          <button onClick={this.showForm}>Update</button>
          );
      }
      else{
        return ( 
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>     
                    <label>
                    <input type="text" name='newName' target='one' className="form-control inputArea" onChange={this.setStates} newName={this.state.newName} id="newName" placeholder="New Name *"></input> 
                    <input type="text" name='newMoves' target='two' className="form-control inputArea" onChange={this.setStates} newMoves={this.state.newMoves} id="newMoves" placeholder="New Moves *"></input> 
                    <input type="text" name='newScramble' target='three' className="form-control inputArea" onChange={this.setStates} newScramble={this.state.newScramble} id="newScramble" placeholder="New Scramble *"></input>
                    {/* <input>add old password check here</input> */}
                    </label>          
                <input type="submit" value="Submit" onClick={this.updateRequest}/> 
            </form>         
        );   
      }
    }   
  }
  
  export default UpdateAlgorithm;