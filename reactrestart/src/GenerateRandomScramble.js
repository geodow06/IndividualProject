import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import Timer from './Timer';
import DisplayAlgorithm from './DisplayAlgorithm';



class GenerateRandomScramble extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userID:"", 
        randomAlgorithm:"", 
        running:null, 
        algID:""
      

    }
  }

//   getRequest = () => { 
   
//     axios.get(`/getAnAlgorithm/${this.props.getid}`).then(r => { this.setState({ algorithm: r.data }) }); 
//     console.log(this.state.algorithm.scramble);
//   }  
  
  startTraining=()=>{ 
      this.setState({running:true}); 
      this.generateRandomScramble(); 
      
  } 
  endTraining=()=>{ 
      this.setState({running:false});
  }

  generateRandomScramble = () =>{  
      
      axios.get(`/getRandomAlgorithm/${this.props.currentUserID}`).then(r=>{this.setState({randomAlgorithm:r.data})});
  } 



  render() { 
    if(this.state.running){
        return( 
           <div>
            <div>
              <h1 id="randomScramble">{this.state.randomAlgorithm.scramble}</h1>
              <button onClick={this.generateRandomScramble}>Next Scramble</button>
            </div>   
            <div id="timer">     
              <Timer currentUserID={this.props.currentUserID} currentAlgID={this.state.randomAlgorithm.algID}/> 
            </div>
            <div id="timeBox"> 
              <DisplayAlgorithm currentUserID={this.props.currentUserID}/>
            </div> 
            <button onClick={this.endTraining}>Click to stop</button>
           </div>
        ); 
    } 
    else{ 
        return( 
            
    <button onClick={this.startTraining}>Click to begin</button> 

        );
    }

    

  }

}

export default GenerateRandomScramble; 