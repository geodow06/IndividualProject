import React, { Component } from 'react'; 
import GetAnAlgorithm from './GetAnAlgorithm';
class AlgorithmSetup extends Component{ 
 
  constructor(props){ 
    super(props);
  }

render(){ 
  return (
    <div>      
        <div> 
          <li key={`aMyKey${this.props.algid}`}>  
            <a>{this.props.algid} {this.props.name} {this.props.moves} {this.props.scramble} {this.props.userid}</a>
          </li>
        </div> 
    </div>
  );
}



} 

export default AlgorithmSetup;