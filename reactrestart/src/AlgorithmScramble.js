import React, { Component } from 'react'; 

class AlgorithmScramble extends Component{ 
 


render(){ 
  return (
    <div>      
        <div> 
          <li key={`aMyKey`}>  
            <a>{this.props.scramble}</a>
          </li>
        </div> 
    </div>
  );
}



} 

export default AlgorithmScramble;