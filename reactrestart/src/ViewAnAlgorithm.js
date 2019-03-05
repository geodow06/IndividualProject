import React, { Component } from 'react'; 

import GetAnAlgorithm from './GetAnAlgorithm.js';
class ViewAnAlgorithm extends Component{ 
 

  constructor(props) {
    super(props);
    this.state = {
      getid:null,
   

    }
  }

  setStates = (event)=>{ 
    this.setState({[event.target.name]:event.target.value});
  }  

  handleSubmit=(event) =>{ 
    console.log(`An ID was submitted: ${this.state.getid}`); 
    event.preventDefault();
  } 

  // getRequest=()=>{ 
  //   this.props.getRequest(this.state.getid);
  // }

render(){ 
  return (
    <div>
      
        <h1>HELLO</h1> 
         
        <form onSubmit={this.handleSubmit} className="form-inline">  
            <label> 
                <input type="number" name='getid' target='one' className="form-control inputArea" onChange={this.setStates} getid={this.state.getid} id="getID" placeholder="getID *"></input>
            </label> 
            <input type="submit" value="Submit" onClick={this.getRequest}></input>

        </form> 
        <GetAnAlgorithm getid={this.state.getid}/>
    </div>
  );
}



} 

export default ViewAnAlgorithm;