import React, { Component } from 'react'; 

class AlgorithmsListItems extends Component{ 
 
  constructor(props){ 
    super(props);
  }

render(){ 
  return (
    <div>      
        <div> 
          <li key={`aMyKey`}>  
            <a >{this.props.algID} {this.props.name} {this.props.moves} {this.props.scramble} {this.props.userID}</a>
          </li>
        </div> 
    </div>
  );
}



} 

export default AlgorithmsListItems;