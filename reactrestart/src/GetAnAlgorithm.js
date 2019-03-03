import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AlgorithmScramble from './AlgorithmScramble';


class GetAnAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm:{}
      

    }
  }

  getRequest = () => { 
   
    axios.get(`/getAnAlgorithm/${this.props.getid}`).then(r => { this.setState({ algorithm: r.data }) }); 
    console.log(this.state.algorithm.scramble);
  }  
 

  

  render() { 
    console.log("the shit"+this.props.getid);
    if(!this.props.getid){
        return(  
            <div> 
                <p>Please enter an id to find a specific algorithm</p>
               
            </div>
        );
    } 
    else{ 
         
        //let algorithm = this.state.algorithm.map(a=><AlgorithmScramble scramble={a.scramble}/>)
        return (
            <div>
                <p>this is the value of the id entered {this.props.getid}</p>
                <ul>{this.state.algorithm.scramble}</ul> 
                <button onClick={this.getRequest}>GetAnALgorithm</button>
            </div> 
        );
    }

    

  }

}

export default GetAnAlgorithm; 
