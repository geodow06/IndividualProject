import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AlgorithmListItems from './AlgorithmsListItems';



class GetAnAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms:[]
   

    }
  }

  getRequest = () => { 
    console.log(this.props.getid);
    axios.get(`/getAnAlgorithm/${this.state.getid}`).then(r => { this.setState({ algorithms: r.data }) });
  }  
 

  

  render() {
    if(!this.props.getid){
        return(  
            <div> 
                <p>Please enter an id to find a specific algorithm</p>
               
            </div>
        );
    } 
    else{ 
         
        let algorithms = this.state.algorithms.map(a=><AlgorithmListItems algID={a.algID} name={a.name} moves={a.moves} scramble={a.scramble} userID={a.userID}/>)
        return (
            <div>
              
                <ul>{algorithms}</ul> 
                <button onClick={this.getRequest}>GetAnALgorithm</button>
            </div> 
        );
    }

    

  }

}

export default GetAnAlgorithm; 
