import React, { Component } from 'react'; 
import DeleteAlgorithm from './DeleteAlgorithm';
class AlgorithmsListItems extends Component{ 
 


render(){ 
  return (
    <div>      
        <div> 
          <li key={`aMyKey`}>  
            <a>{this.props.algID} {this.props.name} {this.props.moves} {this.props.scramble} {this.props.userID}<DeleteAlgorithm algID={this.props.algID}/></a>
          </li>
        </div> 
    </div>
  );
}



} 

export default AlgorithmsListItems;