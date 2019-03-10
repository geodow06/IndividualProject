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
        algID:"", 
        previousMoves:"", 
        previousName:"", 
        display:""
      

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
      this.setState({previousMoves:this.state.randomAlgorithm.moves,previousName:this.state.randomAlgorithm.name});
  } 



  render() { 
    if(this.state.running){
        return( 
           <div className="Body">
           <div>
            <div className="centre">
              <div>
              <h1 id="scramble" className="centre">{this.state.randomAlgorithm.scramble}</h1>
              </div> 
              <div>
              <button onClick={this.generateRandomScramble}>Next Scramble</button>
              </div>
            </div>   
            <div className="centre" id="timer">     
              <Timer currentUserID={this.props.currentUserID} currentAlgID={this.state.randomAlgorithm.algID}/> 
            </div>
            <div className="left">
            <button onClick={this.endTraining}>Click to stop</button> 
            <h2>The previous algorithm was :  {this.state.previousName} </h2>
            <h2>With a possible solution of : {this.state.previousMoves}</h2>
            </div>
          
           
           </div>   
           <div className="left" id="timeBox"> 
              <DisplayAlgorithm currentUserID={this.props.currentUserID}/>
            </div> 

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