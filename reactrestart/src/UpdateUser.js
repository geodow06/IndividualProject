import React, { Component } from 'react';
import './App.css'; 
// import '/roofpig_and_three.min.js'
import axios from 'axios';


class UpdateUser extends Component { 
  constructor(props){ 
    super(props); 
    this.state = { 
    
       show:false, 
       newusername:"", 
       newpassword:""
      
    }
  } 

    updateRequest = ()=>{  
        // axios.delete(`/deleteUser/${this.props.userID}`); 
        axios.put(`/updateUser/${this.state.newusername}/${this.state.newpassword}/${this.props.userID}`) 
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
        console.log('A username was submitted: ' + this.state.newusername); 
        console.log('A password was submitted: '+ this.state.newpassword);
        event.preventDefault();
      }

    render() {   
      if(!this.state.show){ 
          return( 
          <button onClick={this.showForm}>Update User</button>
          );
      }
      else{
        return ( 
            <form onSubmit={this.handleSubmit} className="form-inline">
                <label className="required">* required </label>
                
                    <label>
                    <input type="text" name='newusername' target='one' className="form-control inputArea" onChange={this.setStates} newusername={this.state.newusername} id="newusername" placeholder="New Username *"></input> 
                    <input type="text" name='newpassword' target='two' className="form-control inputArea" onChange={this.setStates} newpassword={this.state.newpassword} id="newpassword" placeholder="New Password *"></input> 
                    {/* <input>add old password check here</input> */}
                    </label> 
                
                <input type="submit" value="Submit" onClick={this.updateRequest}/> 
            
            </form> 
        
        );   
      }
 
      
    }
   
  }
  
  export default UpdateUser;