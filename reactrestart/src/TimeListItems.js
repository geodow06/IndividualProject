import React, { Component } from 'react'; 
import DeleteTimeLog from './DeleteTimeLog';
class TimeListItems extends Component{ 
 
  constructor(props){ 
    super(props);
  } 

render(){ 
  return (
    <div>      
        <div> 
          <li key={`aMyKey${this.props.timeID}`}>  
            <a>{this.props.timeID} {this.props.time} {this.props.algFID} <DeleteTimeLog  timeID={this.props.timeID}/></a>
          </li>
        </div> 
    </div>
  );
}



} 

export default TimeListItems;