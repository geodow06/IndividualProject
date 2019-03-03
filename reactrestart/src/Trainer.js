import React, { Component } from 'react'; 
import GenerateScramble from './GenerateScramble';
import GetAnAlgorithm from './GetAnAlgorithm.js'; 
import GenerateRandomScramble from './GenerateRandomScramble';
import Timer from './Timer'; 
import DisplayUserAlgTimes from './DisplayUserAlgTimes'; 
import DisplayAlgorithm from './DisplayAlgorithm';
class Trainer extends Component{ 
 

  constructor(props) {
    super(props);
    this.state = {
      getid:null,
   

    }
  }


render(){ 
  return (
    <div>
      <GenerateRandomScramble/> 
      {/* <DisplayAlgorithm/> */}
      
     
    </div>
  );
}



} 

export default Trainer;