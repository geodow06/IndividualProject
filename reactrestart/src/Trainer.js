import React, { Component } from 'react'; 
import GenerateScramble from './GenerateScramble';
import GetAnAlgorithm from './GetAnAlgorithm.js';
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
      <GenerateScramble/> 
      
     
    </div>
  );
}



} 

export default Trainer;