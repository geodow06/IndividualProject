import React, { Component } from 'react'; 
import DisplayUserAlgTimes from './DisplayUserAlgTimes';
import axios from 'axios';
import AlgorithmSetup from './AlgorithmSetup';
import TrainerDisplay from './TrainerDisplay';
class DisplayAlgorithm extends Component{ 

    constructor(props) {
        super(props);
        this.state = {
          algorithms:[],
          userID:12
            // algid:3
        }
      }

      getRequest = () => { 
   
        axios.get(`/getUserAlgs/${this.props.currentUserID}`).then(r => { this.setState({ algorithms: r.data }) }); 
        
      }  

render(){ 
   
    let algorithms = this.state.algorithms.map(a=><TrainerDisplay name={a.name} algID={a.algID} currentUserID={this.props.currentUserID}/>)
    return(   
      <div>
        <div>
        {algorithms}
        {/* {this.getRequest()}  */}
       
        </div>
        <button onClick={this.getRequest}>Click to Show Algorithms and Times</button>
      </div>
    );
}



} 

export default DisplayAlgorithm;