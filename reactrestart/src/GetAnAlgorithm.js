import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AlgorithmListItems from './AlgorithmsListItems';



class GetAnAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getid:null,
      algorithms: []

    }
  }

  getRequest = () => { 
    console.log(this.state.getid);
    axios.get(`/getAnAlgorithm/${this.state.getid}`).then(r => { this.setState({ algorithm: r.data }) });
  }  
 

  setStates = (event)=>{ 
    this.setState({[event.target.name]:event.target.value});
  }  

  handleSubmit=(event) =>{ 
    console.log(`An ID was submitted: ${this.state.getid}`); 
    event.preventDefault();
  }

  render() {
    if(!this.state.getid){
        return(  
            <div> 
                <p>Please enter an id to find a specific algorithm</p>
                <form onSubmit={this.handleSubmit} className="form-inline">  
                <label> 
                    <input type="number" name='getid' target='one' className="form-control inputArea" onChange={this.setStates} getid={this.state.getid} id="getID" placeholder="getID *"></input>
                </label> 
                <input type="submit" value="Submit" onClick={this.getRequest}></input>

                </form> 
            </div>
        );
    } 
    else{ 
         
        let algorithms = this.state.algorithms.map(a=><AlgorithmListItems algID={a.algID} name={a.name} moves={a.moves} scramble={a.scramble} userID={a.userID}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline">  
                    <label> 
                        <input type="number" name='getid' target='one' className="form-control inputArea" onChange={this.setStates} getid={this.state.getid} id="getID" placeholder="getID *"></input>
                    </label> 
                    <input type="submit" value="Submit" onClick={this.getRequest}></input>

                </form> 
                <ul>{algorithms}</ul> 
                <button onClick={this.getRequest}>GetAnALgorithm</button>
            </div> 
        );
    }

    

  }

}

export default GetAnAlgorithm; 
